import CreatePostSection from "./CreatePostSection";
import PostCard from "./PostCard";

export default function Hive() {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex justify-center">
        <div className="w-[700px] flex flex-col  justify-start items-center gap-5">
          <CreatePostSection />
          {Array.from({ length: 10 }).map((_, index) => (
            <PostCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
