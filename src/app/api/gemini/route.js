// app/api/gemini/route.ts
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyB8V-OiZxgrx2BchZaoHU-UlmE1t-hd2dE');

export async function POST(request) {
  try {
    const data = await request.formData();
    const image = data.get('image');
    const prompt = data.get('prompt');

    // Convert image to bytes
    const imageBytes = await image.arrayBuffer();

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-002', });
    
    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          data: Buffer.from(imageBytes).toString('base64'),
          mimeType: image.type
        }
      }
    ]);

    const response = await result.response;
    return NextResponse.json({ text: response.text() });
  } catch (error) {
    console.error('Error processing image:', error);
    return NextResponse.json({ error: 'Failed to process image' }, { status: 500 });
  }
}