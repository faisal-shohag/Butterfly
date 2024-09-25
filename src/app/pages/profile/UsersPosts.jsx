import PostCard from "../forum/PostCard";
import { BsFileEarmarkPostFill } from "react-icons/bs";
import { MdOutlineRateReview, MdOutlineFeedback } from "react-icons/md";
import { GiCardExchange } from "react-icons/gi";

export default function UsersPosts() {
  return (
    <div className="container mx-auto px-2">
      {/* Posts header section */}
      <div className="w-full border my-3 rounded-md custom-glass flex justify-center items-center p-2">
        <h3 className="font-bold opacity-70">Posts</h3>
      </div>

      <div className="w-full flex flex-col sm:flex-row gap-3">
        {/* Sidebar with category buttons (All Posts, Reviews, Exchange, Feedback) */}
        <div className="w-full sm:w-[250px] mb-3 flex sm:flex-col gap-3">
          <button className="w-full custom-glass flex justify-center items-center gap-1 rounded-md py-1 font-bold opacity-70 ">
            <BsFileEarmarkPostFill />
            <p className="hidden sm:block">All Posts</p>
          </button>
          <button className="w-full custom-glass flex justify-center items-center gap-1 rounded-md py-1 font-bold opacity-70 ">
            <MdOutlineRateReview />
            <p className="hidden sm:block">Reviews</p>
          </button>
          <button className="w-full custom-glass flex justify-center items-center gap-1 rounded-md py-1 font-bold opacity-70 ">
            <GiCardExchange />
            <p className="hidden sm:block">Exchange</p>
          </button>
          <button className="w-full custom-glass flex justify-center items-center gap-1 rounded-md py-1 font-bold opacity-70 ">
            <MdOutlineFeedback />
            <p className="hidden sm:block">Feedback</p>
          </button>
        </div>

        {/* Main content area for displaying post cards */}
        <div className="w-full">
          <div className="max-w-[750px] mx-auto flex flex-col gap-3">
            {/* Render multiple PostCard components to display user posts */}
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </div>
    </div>
  );
}
