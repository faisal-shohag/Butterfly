"use client"
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Upload, ImagePlus, RotateCcw } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !prompt) return;

    setLoading(true);
    setResult('');
    try {
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
    } catch (error) {
      console.error('Error:', error);
      setResult('Failed to analyze image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto">
      <div  className='custom-glass-2 p-5 rounded-xl'>
        <div>
          <div className="flex justify-between items-center">
            <div className='mb-5 text-xl'>Wing Repair</div>
            {(result || loading) && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleReset}
                className="flex items-center gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </Button>
            )}
          </div>
        </div>
        <div>
          {!result ? (
            <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
              <form onSubmit={handleSubmit}>
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

                  <Button type="submit" disabled={!image || !prompt || loading}>
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <Upload className="h-4 w-4 animate-spin" />
                        Analyzing...
                      </span>
                    ) : (
                      'Analyze Image'
                    )}
                  </Button>
                </div>
              </form>

              <div>
                {loading && <LoadingSkeleton />}
              </div>
            </div>
          ) : (
            <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                <div className="flex justify-center">
                <div className="rounded-lg overflow-hidden max-w-2xl">
                  <img 
                    src={preview} 
                    alt="Uploaded image" 
                    className="w-full h-auto object-contain gap-2"
                  />
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-zinc-950 rounded-lg p-4">
                <p className="whitespace-pre-wrap">
                  {/* {result} */}
                  <TextGenerateEffect
        className="text-left font-kalpurush"
        words={result}
        duration={0.0001}
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