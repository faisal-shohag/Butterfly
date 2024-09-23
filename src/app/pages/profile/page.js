"use client"

import Image from "next/image";

const Profile = () => {

  return (
    <div className="mx-auto mt-[-20px]">
      <div style={{backgroundImage: "url('https://i.postimg.cc/05wQx63s/image.png')", backgroundPosition: 'bottom', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}} className="custom-glass-2 h-32 relative mb-28">
      <div className="absolute bottom-[-70px] left-[10px] border-4 rounded-full dark:border-zinc-900 border-white">
        <Image src="https://i.postimg.cc/5tqhtjwH/image.png" alt="profile" width={100} height={100} className="rounded-full" fit/>
      </div>
       <div className="absolute left-32 -bottom-16">
        <div className='text-2xl font-bold'>Jabir Ibn Haiyan</div>
        <div className="font-semibold">jabir.haiyan@gmail.com</div>
       </div>
      </div>
    </div>
  );
};

export default Profile;