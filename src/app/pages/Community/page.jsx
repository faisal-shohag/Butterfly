import CreatePostSection from "./CreatePostSection";
import PostCard from "./PostCard";
import UsersImage from "./UsersImage";

export default function FeedBackPage() {
  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 px-2">
      {/* ---------- Title field ---------------  */}
      <div className="w-full p-2 mb-2 bg-white dark:bg-gray-800 rounded-md px-3 shadow-md">
        <h3 className="text-2xl font-bold text-center dark:text-gray-200">
          Your <span className="text-[#f02e53] dark:text-red-400">Opinion</span>{" "}
          Counts!
        </h3>
      </div>
      {/* ------------------- main content start from here --------------  */}
      <div className="w-full flex justify-center">
        <div className="w-[700px] flex flex-col overflow-y-auto h-[calc(100vh-50px)] scrollnone justify-start items-center gap-2">
          <CreatePostSection />
          <UsersImage />
          {Array.from({ length: 10 }).map((_, index) => (
            <PostCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
