import { MdOutlineHive } from "react-icons/md";
import CreatePostSection from "./CreatePostSection";
import PostList from "./PostList";

export default function Hive() {
  return (
    <>
      <div className="">
        <div className="max-w-3xl mx-auto">
        <div className="logo text-3xl mb-5 flex"><b className="flex gap-2 items-center"><MdOutlineHive size={40} /> H<span>i</span>v<span>e</span>!</b></div>
        <div className="logo text-xl mb-5">Create your own <b>V<span>i</span>b<span>e</span>!</b></div>

        </div>
        <div className="mt-5">
          <CreatePostSection />
          <PostList/>
        </div>
      </div>
    </>
  );
}
