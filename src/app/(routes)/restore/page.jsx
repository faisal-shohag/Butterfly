"use client"
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Upload, ImagePlus } from 'lucide-react';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !prompt) return;

    setLoading(true);
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
    <div className="container mx-auto py-8 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Gemini Vision Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
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

          {result && (
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Analysis Result:</h3>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="whitespace-pre-wrap">{result}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default GeminiVisionPage;