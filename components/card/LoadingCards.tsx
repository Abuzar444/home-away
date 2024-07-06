"use client";
import { Skeleton } from "../ui/skeleton";

const LoadingCards = () => {
  return (
    <div className='mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
};

export const SkeletonCard = () => {
  return (
    <div>
      <Skeleton className='h-[300px] rounded-md' />
      <Skeleton className='h-4 w-3/2 mt-2' />
      <Skeleton className='h-4 w-1/2 mt-2' />
    </div>
  );
};
export default LoadingCards;
