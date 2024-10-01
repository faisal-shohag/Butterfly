"use client"

import { useAuth } from '@/providers/authProvider';
import Image from 'next/image';
import ProfileHeaderSkeleton from './ProfileHeaderSkeleton';


const ProfileHead = () => {
    const {user} = useAuth()
    // console.log(user)
    return (
        <>
      { user?  <div
        style={{
          backgroundImage: "url('https://i.postimg.cc/05wQx63s/image.png')",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
        className="custom-glass-2 h-32 relative mb-28"
      >

        <div className="absolute bottom-[-70px] left-[10px] border-4 rounded-full dark:border-zinc-900 border-white">
          <Image
            src={user.avatar_url}
            alt="profile"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        
        <div className="absolute left-32 -bottom-16">
          <div className="text-2xl font-bold">{user.full_name}</div>
          <div className="font-semibold">{user.email}</div>
        </div>
      </div>: <ProfileHeaderSkeleton/>}
            
        </>
    );
};

export default ProfileHead;