import React from 'react';
import SkeletonCard from './SekeletonCard';
import { Skeleton } from '@/components/ui/skeleton';


const StoreListSkeleton = () => {
  return (
    <div className="container mx-auto px-4 mt-10">
      <Skeleton className="h-6 w-32 mb-3" />
      <div className="flex space-x-4 mb-6">
        <Skeleton className="h-10 w-[180px]" />
        <Skeleton className="h-10 w-[180px]" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {[...Array(12)].map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default StoreListSkeleton;