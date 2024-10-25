"use client"
import { useState, useRef } from 'react';
import { Cropper } from 'react-advanced-cropper';
import 'react-advanced-cropper/dist/style.css';
import PropTypes from 'prop-types';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Camera, LoaderIcon, Upload } from 'lucide-react';
import toast from 'react-hot-toast';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import ImageKit from "imagekit";
import { useSession } from 'next-auth/react';

const PhotoUpload = ({ aspectRatio, type, user }) => {
    const [image, setImage] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const cropperRef = useRef(null);
    const axiosSecure = useAxiosSecure();
    const { data: session, status, update } = useSession();
    // console.log(session)
    // Initialize ImageKit
    const imageKit = new ImageKit({
        publicKey: "public_Vh5nLR3Jrm4T8zA+77I+lh7nZSY=",
        privateKey: "private_NmXzE7tSS12GF17YPjVqGuEolgM=",
        urlEndpoint: "https://ik.imagekit.io/britto",
    });
    
    const onSelectFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () => setImage(reader.result));
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const uploadImage = async () => {
        setIsUploading(true);
        setUploadProgress(0);
        const canvas = cropperRef.current ? cropperRef.current.getCanvas() : null;
        
        if (canvas) {
            try {
                // Convert canvas to blob
                const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg'));
                
                // Convert blob to base64
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                
                reader.onloadend = async () => {
                    try {
                        // Upload to ImageKit
                        const fileName = `profile_${user?.id}_${Date.now()}`;
                        const uploadResponse = await imageKit.upload({
                            file: reader.result,
                            fileName: fileName,
                            folder: "/profile_images"
                        });

                        // Update progress
                        setUploadProgress(50);
                        // console.log('ImageKit upload response:', uploadResponse);

                        // Update user profile with the new image URL
                        const response = await axiosSecure.put(`/users/${user?.id}`, {
                            image: uploadResponse.url
                        });

                        // console.log(response)

                         await update({
                            ...session.user,
                            image: uploadResponse.url})
                        
                        setUploadProgress(100);
                        toast.success('Profile picture updated successfully!');
                        setIsUploading(false);
                        document.getElementById('close-modal').click();
                        
                    } catch (error) {
                        console.error('Error in image upload or profile update:', error);
                        toast.error('Failed to update profile picture');
                        setIsUploading(false);
                    }
                };

                reader.onerror = () => {
                    toast.error('Error processing image');
                    setIsUploading(false);
                };

            } catch (error) {
                console.error('Error in canvas processing:', error);
                toast.error('Error processing image');
                setIsUploading(false);
            }
        } else {
            toast.error('No image selected for upload');
            setIsUploading(false);
        }
    };

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <div className='h-7 w-7 p-1 flex justify-center items-center rounded-full custom-glass-2 text-gray-600 dark:bg-zinc-900 dark:border-zinc-800'>
                        <Camera size={17}/>
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Upload Photo</DialogTitle>
                        <DialogDescription>
                            Upload your profile picture here.
                        </DialogDescription>
                    </DialogHeader>
                    <input 
                        className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2' 
                        type="file" 
                        accept="image/*" 
                        aria-describedby="file_input_help" 
                        onChange={onSelectFile} 
                    />
                    {image && 
                        <Cropper
                            ref={cropperRef}
                            src={image}
                            className="cropper"
                            aspectRatio={aspectRatio}
                            resizeCoordinates={false}
                        />
                    }
                    
                    <DialogFooter className="">
                        <DialogClose asChild className='lg:mt-0 md:mt-0 mt-2'>
                            <Button id="close-modal" className="dark:bg-zinc-800 text-white">Close</Button>
                        </DialogClose>
                        <Button 
                            className="dark:bg-zinc-800 text-white flex gap-2" 
                            onClick={uploadImage} 
                            disabled={isUploading}
                        >
                            {isUploading ? <div className='animate-spin'><LoaderIcon/></div> : <Upload size={18}/>} 
                            {isUploading ? `Uploading... ${uploadProgress.toFixed(0)}%` : "Upload Image"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default PhotoUpload;

PhotoUpload.propTypes = {
    aspectRatio: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
};