import CreatePostSection from "./CreatePostSection";
import PostCard from "./PostCard";
import UsersImage from "./UsersImage";

export default function FeedBackPage() {
  return (
    <div className="w-full min-h-screen">
      {/* ------------------- main content start from here --------------  */}
      <div className="w-full flex justify-center">
        <div className="w-[700px] flex flex-col  justify-start items-center gap-5">
          <CreatePostSection />
          {/* <UsersImage /> */}
          {Array.from({ length: 10 }).map((_, index) => (
            <PostCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
