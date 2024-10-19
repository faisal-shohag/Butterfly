
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const SkeletonCard = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
    </div>
  )
}

export default SkeletonCard
