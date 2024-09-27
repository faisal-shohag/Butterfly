'use client'
import { Skeleton } from "@/components/ui/skeleton";

const ProfileHeaderSkeleton = () => {
  return (
    <div className="relative mb-28">
      {/* Background image skeleton */}
      <Skeleton className="h-32 w-full rounded-b-lg" />

      {/* Profile picture skeleton */}
      <div className="absolute bottom-[-70px] left-[10px] border-4 rounded-full dark:border-zinc-900 border-white">
        <Skeleton className="w-[100px] h-[100px] rounded-full" />
      </div>
      
      {/* Name and email skeletons */}
      <div className="absolute left-32 -bottom-16 space-y-2">
        <Skeleton className="h-8 w-48" /> {/* Name skeleton */}
        <Skeleton className="h-6 w-36" /> {/* Email skeleton */}
      </div>
    </div>
  );
};

export default ProfileHeaderSkeleton;