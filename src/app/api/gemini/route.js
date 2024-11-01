// app/api/gemini/route.ts
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyB8V-OiZxgrx2BchZaoHU-UlmE1t-hd2dE');
const text = `
  - CHAPTER ONE -

**The Boy who Lived**

Mr and Mrs Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much. They were the last people you’d expect to be involved in anything strange or mysterious, because they just didn’t hold with such nonsense.

Mr Dursley was the director of a firm called Grunnings, which made drills. He was a big, beefy man with hardly any neck, although he did have a very large moustache. Mrs Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbours. The Dursleys had a small son called Dudley and in their opinion there was no finer boy anywhere.

The Dursleys had everything they wanted, but they also had a secret, and their greatest fear was that somebody would discover it. They didn’t think they could bear it if anyone found out about the Potters. Mrs Potter was a sister, because her husband was a for-nothing husband. The Dursleys shuddered to think what people would say if the Potters arrived in the street. They had never even seen him. This boy was another good reason for keeping the Potters away; they didn’t want Dudley mixing with a child like that.

When Mr and Mrs Dursley woke up on the dull, grey Tuesday our story starts, there was nothing about the cloudy sky outside to suggest that strange and mysterious things would soon be happening all over the country. Mr Dursley hummed as he picked out his most boring tie for work and Mrs Dursley gossiped away 
`

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
    return NextResponse.json({ text: text });
  }
}