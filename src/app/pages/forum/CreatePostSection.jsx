"use client"
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Image, SendHorizonal } from "lucide-react";
import ImageN from "next/image";
import { useAuth } from "@/providers/authProvider";

export default function CreatePostSection() {
  const { user } = useAuth();
  const [postContent, setPostContent] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePostSubmit = () => {

    // post
    const images = uploadedImage;
    const postData = {
      content: postContent,
      authorId: user?.id,
      type: "text",
      images: images || [],


    };

    console.log(postData);

    fetch("https://butterfly-backend.vercel.app/post", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => {
            throw new Error(`Error: ${err.error || 'Unknown error'}`);
          });
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        setPostContent("");
      

        setUploadedImage(null);
        setIsModalVisible(true);
      })
      .catch(error => console.error('Error:', error.message || error));
  };



  


  return (
    <div className="w-full p-3 custom-glass rounded-md shadow-md">
      <div className="flex items-center gap-4 mb-4">
        <ImageN
          src={user?.image || 'https://i.postimg.cc/GmY0ZXtx/image.png'}
          alt='avatar'
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover border-2 border-zinc-400"
        />
        <div>
          <h3 className="font-bold">{user?.user_metadata.full_name}</h3>
        </div>
      </div>

      <div className="flex items-start w-full gap-4 font-kalpurush">
        <div className="flex-grow relative rounded-xl border-2 shadow-sm pb-5 dark:bg-zinc-900">
          <Textarea
            placeholder="What's on your mind?"
            required
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            className="w-full h-[50px] p-3 rounded-lg transition-colors duration-200 ease-in-out border-0 focus:border-0 focus:outline-none dark:bg-zinc-900 dark:border-zinc-800 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <div className="absolute right-3 bottom-2 flex items-center justify-center gap-2">
            <label className="px-2 py-2 bg-gray-200 rounded-sm shadow-sm cursor-pointer dark:bg-gray-800">
              <Image size={18} />
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setUploadedImage(reader.result); 
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </label>
            <button
              onClick={handlePostSubmit}
              className={`px-2 py-2 rounded-full transition-colors duration-200 ease-in-out bg-black text-white dark:bg-zinc-700`}
            >
              <SendHorizonal size={15} />
            </button>
          </div>
        </div>
      </div>

      {errorMessage && (
        <div className="mt-4 text-red-500 text-sm">{errorMessage}</div>
      )}

      {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 ">
          <div className="bg-gray-300 dark:bg-zinc-900 p-6 rounded-lg shadow-lg text-center w-60 h-28">
            <h2 className="text-lg font-bold text-white">Post Successful!</h2>
            <button
              onClick={() => setIsModalVisible(false)}
              className="mt-4 px-4 py-2 text-gray-500 bg-white rounded-full "
            >
              Close
            </button>
          </div>
         </div>
        
      )}
    </div>
  );
}


