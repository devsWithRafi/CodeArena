import { Skeleton } from '@/components/ui/skeleton';

const TestCaseLoader = () => {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="h-[25px] w-[100px] rounded-sm" />
      <div className="flex gap-3 items-center justify-start w-full">
        <Skeleton className="h-[30px] w-20 rounded-sm" />
        <Skeleton className="h-[30px] w-20 rounded-sm" />
        <Skeleton className="h-[30px] w-20 rounded-sm" />
      </div>
      <div className="flex flex-col gap-3 mt-4">
        <span className="flex flex-col gap-2">
          <Skeleton className="h-[20px] w-20 rounded-sm" />
          <Skeleton className="h-[30px] w-full rounded-sm" />
        </span>
        <span className="flex flex-col gap-2">
          <Skeleton className="h-[20px] w-20 rounded-sm" />
          <Skeleton className="h-[30px] w-full rounded-sm" />
        </span>
        <span className="flex flex-col gap-2">
          <Skeleton className="h-[20px] w-20 rounded-sm" />
          <Skeleton className="h-[30px] w-full rounded-sm" />
        </span>
      </div>
    </div>
  );
};

export default TestCaseLoader;
