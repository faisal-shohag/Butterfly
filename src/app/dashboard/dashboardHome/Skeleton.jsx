
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

export function SkeletonTable() {
    return (
        <div>
            <div className="flex items-center mb-3 space-x-10">
                <Skeleton className="h-24 w-16 " />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[300px]" />
                    <Skeleton className="h-4 w-[250px]" />
                </div>
            </div>
            <div className="flex items-center mb-3 space-x-10">
                <Skeleton className="h-24 w-16 " />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[300px]" />
                    <Skeleton className="h-4 w-[250px]" />
                </div>
            </div>
            <div className="flex items-center mb-3 space-x-10">
                <Skeleton className="h-24 w-16 " />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[300px]" />
                    <Skeleton className="h-4 w-[250px]" />
                </div>
            </div>
            <div className="flex items-center mb-3 space-x-10">
                <Skeleton className="h-24 w-16 " />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[300px]" />
                    <Skeleton className="h-4 w-[250px]" />
                </div>
            </div>
        </div>
    )
}
