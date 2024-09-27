"use client"
import { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { AiFillLike, AiOutlineComment } from "react-icons/ai";
import React from "react";
import postimage from "@/_images/postimage.jpg";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import { VscShare } from "react-icons/vsc";
import { FaLink } from "react-icons/fa6";
import { RiDeleteBinLine, RiShareForward2Fill } from "react-icons/ri";
import { MdOutlineAddReaction } from "react-icons/md";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";
import { useAuth } from "@/providers/authProvider";
export default function PostCard({ postId }) {
  const { user } = useAuth();
  //For like management
  const [numberOfLike, setNumberOfLike] = useState(250);
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    if (isLiked) {
      setNumberOfLike(numberOfLike - 1);
    } else {
      setNumberOfLike(numberOfLike + 1);
    }
    setIsLiked(!isLiked);
  };
  //For delete management
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const handleToggleDeleteButton = () => {
    setShowDeleteButton(!showDeleteButton);
  };
  const handleDeleteClick = () => {
    setIsConfirmationModalOpen(true);
  };
  const closeConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
  };

  // comment management
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentCount, setCommentCount] = useState(50);
  const [comment, setComment] = useState("");

  const toggleCommentInput = () => {
    setShowCommentInput(!showCommentInput);
  };
  const handleCommentSubmit = (e) => {
    e.preventDefault();

    const authorId = user?.id;
    const images = [];
    const commentData = {
      content: comment,
      authorId: authorId,
      postId: posts.id,
      images: images,

    };
    console.log(commentData)
    fetch('https://butterfly-backend.vercel.app/posts/postId/comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((err) => {
            throw new Error(`Error: ${err.error || 'Unknown error'}`);
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log('Success:', data);
        setCommentCount(commentCount + 1);
        setComment("");
      })
      .catch((error) => console.error('Error:', error.message || error));

  };



  // For share
  const [shareCount, setShareCount] = useState(17);
  const handleShareClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check this out!',
          text: 'Here is some content I wanted to share with you.',
          url: window.location.href,
        });
        setShareCount(prevCount => prevCount + 1);
      } catch (error) {
        console.error('Error sharing:', error);
        alert('Failed to share, please try again.');
      }
    } else {
      alert('Sharing is not supported on this browser.');
    }
  };
  // for data showing
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://butterfly-backend.vercel.app/posts?limit=10&page=1');
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); 


  return (
    <div>
      {loading ? (
        <p>Loading posts...</p> 
      ) : (
        <ul className="mt-4 space-y-4">
          {posts.map((post) => (
            
              <div key={post.id} className="w-full custom-glass rounded-xl shadow-md">
                <div className="w-full flex px-4 py-2 dark:border-gray-700 justify-between items-center">
                  <div className="flex gap-2">
                    <Avatar><AvatarImage src="https://i.postimg.cc/5tqhtjwH/image.png" /></Avatar>
                    <div className="flex flex-col">
                      <strong className="dark:text-gray-200">FANTASTIC SIX</strong>
                      <small className="text-gray-600 dark:text-gray-400">
                        Book {new Date(post.createdAt).toLocaleString()}
                      </small>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={handleToggleDeleteButton}
                      className="px-8 py-4    "
                    >
                      <BsThreeDots className="dark:text-gray-300" />
                    </button>
                    {showDeleteButton && (
                      <div className="mt-1">
                        <button
                          onClick={handleDeleteClick}
                          className="px-4 py-2 text-base  bg-red-500 text-white rounded hover:bg-red-600 transition"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                    {isConfirmationModalOpen && (
                      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-gray-400 p-6 rounded-lg shadow-lg text-center min-w-[300px]">
                          <h3 className="text-lg font-semibold">Are you sure you want to delete?</h3>
                          <div className="mt-4">
                            <button
                              onClick={closeConfirmationModal}
                              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition mr-2"
                            >
                              Yes
                            </button>
                            <button
                              onClick={closeConfirmationModal}
                              className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition"
                            >
                              No
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>

                </div>
                {/* ---------------- post part ----------------  */}
                <div className="w-full pt-3 px-3 border-b dark:border-gray-700">
                  <p className="dark:text-gray-300">
                  {post.content}
                    {/* I recently finished reading &quot;The Art of Learning&quot; by Josh Waitzkin,
                    and I must say it’s a captivating read. The book takes you through
                    Waitzkin’s journey as a chess prodigy and martial artist, offering
                    deep insights into the process of learning and mastery. */}
                  </p>
                  <div className="w-full p-2">
                    <Image src={postimage} alt="post image" className="w-full" />
                  </div>
                  <div className="w-full p-2 flex justify-between items-center dark:text-gray-300">

                    {/*........... like management............*/}
                    <div className="flex justify-center items-center gap-1">
                      <button
                        onClick={handleLike}
                        style={{
                          bg: 'white',
                          text: 'black',
                          p: '10px 20px',
                          b: '1px solid black',
                          cursor: 'pointer',
                          rounded: '5px',
                          display: 'flex',
                          alignItems: 'center',
                          justify: 'center',
                        }}
                      >
                        <AiFillLike className='w-6 h-6'
                          icon={isLiked ? <SlLike /> : <AiFillLike />}
                          style={{ mr: '10px', color: isLiked ? 'blue' : 'black' }}
                        />
                        {numberOfLike}
                      </button>
                    </div>
                    {/*................ comment management........... */}
                    <div className="flex justify-center items-center gap-1">
                      <div className="w-full  rounded-xl ">
                        <div className="flex justify-between items-center p-2">
                          <AiOutlineComment
                            className='w-5 h-5'
                            onClick={toggleCommentInput}
                          /> <span>{commentCount}</span>
                        </div>
                      </div>
                    </div>

                    {/* -------------------share-------------------- */}
                    <div className="flex justify-center items-center gap-1">
                      <div className="p-4">
                        <button
                          onClick={handleShareClick}
                          className="px-4 py-2  text-black rounded  transition"
                        >
                          <div className='flex'>
                            <div className='pr-2 mt-1 w-4 h-4'>
                              <VscShare />
                            </div>
                            <div>
                              {shareCount}
                            </div>
                          </div>

                        </button>

                      </div>

                    </div>
                    {/* <div className="flex justify-center items-center gap-1">1/7/2024</div> */}
                  </div>
                </div>
                <div className="w-full flex justify-between items-center p-2">
                  <div className="flex justify-center items-center gap-2">
                    {/* <Avatar><AvatarImage src="https://i.postimg.cc/GmY0ZXtx/image.png" /></Avatar>
          <form className="flex justify-center items-center">
            <Input
              type="text"
              placeholder="Write a comment..."
              className="max-w-[130px] sm:min-w-[300px] p-1 px-2 border bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 rounded-full"
            />
            <Button
              size="icon"
              type="submit"
              className=" ml-3 rounded-full  flex justify-center items-center outline-0"
            >
              <SendHorizonal size={18} className="text-2xl" />
            </Button>
          </form> */}
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    {/* <button className="p-[6px] rounded-full border outline-0 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 flex justify-center items-center">
            <FaLink className="text-xl dark:text-gray-300" />
          </button> */}
                    {/* <button className="p-[6px] rounded-full border outline-0 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 flex justify-center items-center">
            <RiShareForward2Fill className="text-xl dark:text-gray-300" />
          </button> */}
                    {/* <button className="p-[6px] rounded-full border outline-0 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 flex justify-center items-center">
            <MdOutlineAddReaction className="text-xl dark:text-gray-300" />
          </button> */}
                  </div>
                </div>
                {showCommentInput && (
                  <div className="flex justify-center items-center gap-2 p-2">
                    <Avatar>
                      <AvatarImage src="https://i.postimg.cc/GmY0ZXtx/image.png" />
                    </Avatar>
                    <form
                      className="flex justify-center items-center"
                      onSubmit={handleCommentSubmit}
                    >
                      <Input
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                        placeholder="Write a comment..."
                        className="max-w-[130px] sm:min-w-[300px] p-1 px-2 border bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 rounded-full"
                      />
                      <Button
                        size="icon"
                        type="submit"
                        className="ml-3 rounded-full flex justify-center items-center outline-0"
                      >
                        <SendHorizonal size={18} className="text-2xl" />
                      </Button>
                    </form>
                  </div>
                )}
              </div>
            
          ))}
        </ul>
      )}

    </div>
  );
}

