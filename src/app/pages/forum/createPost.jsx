"use client"
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Textarea } from "@/components/ui/textarea";
import { ImageIcon, SendHorizonal, X, Loader2 } from "lucide-react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { IKContext } from "imagekitio-react";
import ImageKit from "imagekit";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { useAuth } from "@/providers/authProvider";


const CreatePost = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [content, setContent] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [isPosting, setIsPosting] = useState(false);

  const handleImageSelect = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages((prevImages) => [...prevImages, ...files]);
  };

  const handleImageUpload = async () => {
    setIsPosting(true);
    const imageKit = new ImageKit({
      publicKey: "public_Vh5nLR3Jrm4T8zA+77I+lh7nZSY=",
      privateKey: "private_NmXzE7tSS12GF17YPjVqGuEolgM=",
      urlEndpoint: "https://ik.imagekit.io/britto",
    });

    const uploadPromises = selectedImages.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          imageKit.upload({
            file: reader.result,
            fileName: file.name,
          }).then(response => {
            console.log(response);
            resolve({ url: response.url, fileId: response.fileId });
          }).catch(error => {
            console.error("Error uploading image:", error);
            reject(error);
          });
        };
        reader.readAsDataURL(file);
      });
    });

    try {
      return await Promise.all(uploadPromises);
    } catch (error) {
      console.error("Image upload failed:", error);
      return [];
    }
  };

  const handleRemoveImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const createPostMutation = useMutation(
    async (postData) => {
      const response = await axiosSecure.post("/posts", postData);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('posts');
        setContent("");
        setSelectedImages([]);
        toast.success("Post created successfully!");
        setIsPosting(false);
      },
      onError: (error) => {
        setIsPosting(false);
        console.error("Error creating post:", error);
        toast.error("Failed to create post. Please try again.");
      }
    }
  );

  const handleSubmit = async () => {
    setIsPosting(true);
    if (!content && selectedImages.length === 0) {
      toast.error("Please add some content or images to your post.");
      return;
    }

    try {
      let uploadedImages = [];
      if (selectedImages.length > 0) {
        uploadedImages = await handleImageUpload();
      }

      const postData = {
        content,
        images: uploadedImages,
        authorId: user.id,
      };

      createPostMutation.mutate(postData);
    } catch (error) {
      setIsPosting(false);
      console.error("Error in handleSubmit:", error);
      toast.error("An error occurred while creating your post.");
    }
  };

  return (
    <IKContext 
      publicKey="public_Vh5nLR3Jrm4T8zA+77I+lh7nZSY="
      urlEndpoint="https://ik.imagekit.io/britto"
      className=""
    >
      <>
        <div className="shadow-sm border dark:bg-[#141414]  px-4 py-4 rounded-2xl max-w-3xl mx-auto">
          <div></div>
          <div className="flex items-start gap-4 font-kalpurush">
            <Image
            height={10} width={10} 
              src={user.avtar_url} 
              alt={user.full_name} 
              className="w-10 h-10 rounded-full object-cover border-2 border-zinc-400"
            />
            <div className="flex-grow relative rounded-xl border-2 shadow-sm pb-5 dark:bg-zinc-900">
              <Textarea 
                placeholder="Whats on your mind..." 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-[50px] p-3 rounded-lg transition-colors duration-200 ease-in-out border-0 focus:border-0 focus:outline-none dark:bg-zinc-900 dark:border-zinc-800 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              {selectedImages.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2 px-3">
                  {selectedImages.map((file, index) => (
                    <div key={index} className="relative">
                      <Image
                        height={20}
                        width={20} 
                        src={URL.createObjectURL(file)}
                        alt={`Selected ${index}`}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <button
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <div className="absolute right-3 bottom-2 flex items-center justify-center gap-2">
                <label className="px-2 py-2 bg-gray-200 rounded-sm shadow-sm cursor-pointer dark:bg-gray-800">
                  <ImageIcon size={18}/>
                  <input
                    type="file"
                    multiple
                    onChange={handleImageSelect}
                    className="hidden"
                    accept="image/*"
                  />
                </label>
                <button
                  onClick={handleSubmit}
                  disabled={isPosting}
                  className={`px-2 py-2 rounded-full transition-colors duration-200 ease-in-out ${
                    isPosting ? 'bg-gray-400 cursor-not-allowed' : 'bg-black text-white dark:bg-zinc-700'
                  }`}
                >
                  {isPosting ? (
                    <Loader2 size={15} className="animate-spin" />
                  ) : (
                    <SendHorizonal size={15} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
      
    </IKContext>
  );
};

export default CreatePost;