import CreatePostSection from "./CreatePostSection";
import PostCard from "./PostCard";
import UsersImage from "./UsersImage";

export default function FeedBackPage() {
  return (
    <div className="w-full min-h-screen bg-gray-100 px-2">
      {/* ---------- Title field ---------------  */}
      <div className="w-full p-2 mb-2 bg-white rounded-md px-3 shadow-md">
        <h3 className="text-2xl font-bold text-center">
          Your <span className="text-[#f02e53]">Opinion</span> Counts!
        </h3>
      </div>
      {/* ------------------- main content start from here --------------  */}
      <div className="w-full flex justify-center">
        <div className="w-[700px] flex flex-col overflow-y-auto h-[calc(100vh-50px)]  scrollnone justify-start items-center gap-2 ">
          <CreatePostSection></CreatePostSection>
          <UsersImage></UsersImage>
          {Array.from({ length: 10 }).map((_, index) => (
            <PostCard key={index}></PostCard>
          ))}
        </div>
      </div>
    </div>
  );
}
