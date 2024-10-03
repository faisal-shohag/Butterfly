"use server"
import { auth } from "@/auth";
import CreatePostSection from "./CreatePostSection";
import PostList from "./PostList";
import Menu from "./sidebars/Menu";
import TrendsSidebar from "./sidebars/Trending";

export default async function Hive() {
  const {user} = await auth()
  return (
    <>
       
        <div >
        <div className="lg:block hidden">
          <Menu className="fixed dark:bg-zinc-900 border left-[5.25rem] top-[5.25rem] hidden h-fit flex-none space-y-3 rounded-2xl bg-card px-3 py-5 shadow-sm sm:block lg:px-5 xl:w-80" />
        </div>
        </div>

        <div className="lg:block hidden">
          <TrendsSidebar className="fixed dark:bg-zinc-900 right-[5.25rem] top-[5.25rem] hidden h-fit flex-none  sm:block lg:px-5 xl:w-80" />
      </div>
      

    
       {/* <div className="block md:hidden lg:hidden">
       <Menu className="fixed border dark:bg-zinc-900 bottom-0 flex  justify-center gap-5 border-t bg-card p-3 sm:hidden" />
       </div> */}
          <CreatePostSection user={user}/>
          <PostList user={user}/>
        
    </>
  );
}
