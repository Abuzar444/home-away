"use client";

import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return <Skeleton className='h-[300px] md:h-[400px] rounded w-full' />;
};
export default loading;
