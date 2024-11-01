"use client"
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Upload, ImagePlus, RotateCcw, Copy, Loader2 } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";
import { FaFilePdf } from 'react-icons/fa6';
import { PiTornadoFill } from "react-icons/pi";
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import Image from 'next/image';
import { GoArrowRight } from "react-icons/go";
import { useSession } from "next-auth/react";
import { useCoins } from "@/hooks/useCoins";
import toast from 'react-hot-toast';
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const LoadingSkeleton = () => (
  <div className="space-y-3">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-[90%]" />
    <Skeleton className="h-4 w-[95%]" />
    <Skeleton className="h-4 w-[85%]" />
  </div>
);

const GeminiVisionPage = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const resultRef = useRef(null);

  const session = useSession();
  const user = session.data?.user;
  const { remainingCoins, addCoin } = useCoins(user?.id);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setImage(null);
    setPreview('');
    setPrompt('');
    setResult('');
    setLoading(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result);
      toast.success('Text copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy text.');
      console.error('Copy failed:', error);
    }
  };

  const handleDownloadPDF = async () => {
    if (!resultRef.current) return;

    try {
      toast.loading('Generating PDF...', { id: 'pdf-generation' });
      
      // Create PDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // Add title
      pdf.setFontSize(16);
      pdf.text('Image Analysis Result', 20, 20);
      
      // Add timestamp
      pdf.setFontSize(10);
      pdf.text(`Generated on: ${new Date().toLocaleString()}`, 20, 30);
      
      // Add the image if it exists
      if (preview) {
        const imgData = preview;
        pdf.addImage(imgData, 'JPEG', 20, 40, 170, 100);
      }
      
      // Add the analysis text
      pdf.setFontSize(12);
      const splitText = pdf.splitTextToSize(result, 170);
      pdf.text(splitText, 20, preview ? 150 : 40);
      
      // Save the PDF
      pdf.save('image-analysis-result.pdf');
      toast.success('PDF downloaded successfully!', { id: 'pdf-generation' });
    } catch (error) {
      console.error('PDF generation failed:', error);
      toast.error('Failed to generate PDF.', { id: 'pdf-generation' });
    }
  };

  const handleAnalyze = async () => {
    if (remainingCoins < 100) {
      toast.error('Insufficient coins. You need 100 coins to analyze an image.');
      return;
    }

    setLoading(true);
    setResult('');
    
    try {
      // Deduct coins first
      await addCoin({
        type: 'deduction',
        reason: 'Image analysis',
        value: 100,
        userId: user.id,
      });

      const formData = new FormData();
      formData.append('image', image);
      formData.append('prompt', prompt);

      const response = await fetch('/api/gemini', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setResult(data.text);
      toast.success('Image analyzed successfully!');
    } catch (error) {
      console.error('Error:', error);
      setResult('Failed to analyze image. Please try again.');
      toast.error('Failed to analyze image. Please try again.');
    } finally {
      setLoading(false);
      setIsDialogOpen(false);
    }
  };

  // console.log(result)

  return (
    <div className="container mx-auto">
      <div className={`${loading? "g-card": "custom-glass-2 rounded-xl text-slate-500 dark:text-slate-300"}`}>
        <div className='text-left flex items-center p-2 font-semibold text-xl'>
          <PiTornadoFill size={20} className='mr-1'/> Restore Text(in seconds)
        </div>
      </div>
      <div className='custom-glass-2 p-5 mb-2 rounded-xl mt-5'>
        <div>
          <div className="flex justify-end items-center">
            {(result || loading) && (
              <div className='flex items-center gap-3'>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleCopy}
                  className="flex items-center gap-2"
                >
                  <Copy className="h-4 w-4" />
                  Copy
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleDownloadPDF}
                  className="flex items-center gap-2"
                >
                  <FaFilePdf className="h-4 w-4" />
                  PDF
                </Button>

                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleReset}
                  className="flex items-center gap-2"
                >
                  <RotateCcw className="h-4 w-4" />
                  Reset
                </Button>
              </div>
            )}
          </div>
        </div>
        <div>
          {!result ? (
            <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
              <div>
                <div className="grid w-full gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center min-h-[200px] bg-gray-50">
                        {preview ? (
                          <img src={preview} alt="Preview" className="max-h-[200px] object-contain" />
                        ) : (
                          <>
                            <ImagePlus className="h-8 w-8 mb-2 text-gray-400" />
                            <p className="text-sm text-gray-500">Click to upload image</p>
                          </>
                        )}
                      </div>
                      <Input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Textarea
                      placeholder="Enter your prompt..."
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      rows={3}
                    />
                  </div>

                  <Button 
                    onClick={() => setIsDialogOpen(true)}
                    disabled={!image || !prompt || loading}
                  >
                    Analyze Image with 100 coins
                  </Button>

                  <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Confirm Analysis</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to analyze this image? This will cost 100 coins.
                          {remainingCoins < 100 && (
                            <p className="text-red-500 mt-2">
                              Warning: Insufficient coins. You need 100 coins to analyze an image.
                            </p>
                          )}
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={handleAnalyze}
                          disabled={remainingCoins < 100}
                        >
                          Confirm
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>

              <div>
                {loading ? <LoadingSkeleton /> : 
                  <div className=''>
                    <div className='custom-glass rounded-md'>
                      <div className='flex justify-center items-center gap-5'>
                        <Image className='shimmer' height={100} width={100} src="https://i.postimg.cc/BncVDQBb/photo-2024-10-30-18-47-35.jpg" alt='page'/>
                        <GoArrowRight />
                        <Image height={100} width={100} src="https://i.postimg.cc/52Mr6FvD/photo-2024-10-30-18-47-35-2.jpg" alt='page'/>
                      </div>
                    </div>

                    <div className='custom-glass mt-2 rounded-md'>
                      <div className='flex items-center justify-center gap-5'>
                        <Image className='shimmer' height={100} width={100} src="https://i.postimg.cc/Qx7P8qBp/photo-2024-10-30-18-47-36.jpg" alt='page'/>
                        <GoArrowRight />
                        <Image height={100} width={100} src="https://i.postimg.cc/gcQQb70z/photo-2024-10-30-18-47-36-2.jpg" alt='page'/>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
              <div className="flex justify-center">
                <div className="rounded-lg overflow-hidden max-w-2xl">
                  <img 
                    src={preview} 
                    alt="Uploaded image" 
                    className="w-full h-auto object-contain gap-2"
                  />
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-zinc-950 rounded-lg p-4" ref={resultRef}>
                <p className="whitespace-pre-wrap">
                  <TextGenerateEffect
                    className="text-left font-kalpurush"
                    words={result}
                    duration={0.00000001}
                  />
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeminiVisionPage;