"use server";
import { auth } from "@/auth";
import UserAvatar from "@/components/common/UserAvatar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";



const Profile =  async () => {
  const {user} = await auth()

  return (
    <div className="mx-auto mt-[-20px]">
        <div
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
          <Avatar className="h-[100px] w-[100px] shimmer">
            <AvatarImage src={user.image} className="object-cover" />
            <AvatarFallback className="text-5xl font-bold">
              {user.name?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="absolute left-32 -bottom-16">
          <div className="text-2xl font-bold">{user.name}</div>
          <div className="font-semibold">{user.email}</div>
        </div>
      </div>
         
    </div>
  );
};

export default Profile;
