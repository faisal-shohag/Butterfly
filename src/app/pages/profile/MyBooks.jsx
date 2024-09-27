"use client"

// import BookCard from "@/components/Books/BookCard";
import Loading from "@/components/common/Loading";
import { useAuth } from "@/providers/authProvider";
import ProfileBookCard from "./ProfileBookCard";

const MyBooks = () => {
  const {user} = useAuth()
    return (
        <>
       <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
        {
            user? <ProfileBookCard user={user}/>: <Loading/>
        }
            </div>
        </>
        
    );
};

export default MyBooks;