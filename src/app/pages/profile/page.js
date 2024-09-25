"use server"
import Image from "next/image";
import { createClient } from '@/utils/supabase/server'

const Profile = async () => {
  const supabase = createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  console.log(user);
  
  return (
    <div className="mx-auto mt-[-20px]">
      <div style={{backgroundImage: "url('https://i.postimg.cc/05wQx63s/image.png')", backgroundPosition: 'bottom', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}} className="custom-glass-2 h-32 relative mb-28">
      <div className="absolute bottom-[-70px] left-[10px] border-4 rounded-full dark:border-zinc-900 border-white">
        <Image src="https://i.postimg.cc/5tqhtjwH/image.png" alt="profile" width={100} height={100} className="rounded-full" fit/>
      </div>
       <div className="absolute left-32 -bottom-16">
        <div className='text-2xl font-bold'>{user.user_metadata.full_name}</div>
        <div className="font-semibold">{user.email}</div>
       </div>
      </div>
    </div>
  );
};

export default Profile;