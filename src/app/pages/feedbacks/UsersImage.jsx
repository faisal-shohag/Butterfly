"use client";

import Image from "next/image";
import user from "@/_images/user.jpg";

export default function UsersImage() {
  return (
    <div className="bg-white w-full rounded-md shadow-md flex p-3 gap-2 overflow-x-auto">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="min-w-[60px] h-[60px] rounded-full overflow-hidden"
        >
          <Image
            src={user}
            alt="user image"
            className="rounded-full min-w-full min-h-full border-2"
          />
        </div>
      ))}
    </div>
  );
}
