import PostCard from "../forum/PostCard";

export default function UsersPosts() {
  return (
    <div className="container mx-auto px-2">
      {/* Posts header section */}
      <div className="w-full border my-3 rounded-md custom-glass flex justify-center items-center p-2">
        <h3 className="font-bold opacity-70">Posts</h3>
      </div>

      <div className="w-full flex gap-3">
        {/* Sidebar with category buttons (All Posts, Reviews, Exchange, Feedback) */}
        <div className="w-full sm:w-[250px] mb-3 flex sm:flex-col gap-3">
          <button className="w-full custom-glass rounded-md py-1 font-bold opacity-70 ">
            All Posts
          </button>
          <button className="w-full custom-glass rounded-md py-1 font-bold opacity-70 ">
            Reviews
          </button>
          <button className="w-full custom-glass rounded-md py-1 font-bold opacity-70 ">
            Exchange
          </button>
          <button className="w-full custom-glass rounded-md py-1 font-bold opacity-70 ">
            Feedback
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
