import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Skeleton } from "@/components/ui/skeleton";

const PostLoading = ({count=3}) => {
  return (
    <>
      {[...Array(count)].map((_, index) =><Card key={index+48735} className="mb-4 font-kalpurush max-w-2xl mx-auto relative">
          <CardHeader className="flex flex-row justify-between items-start">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
            <Skeleton className="h-8 w-8 rounded-full" />
          </CardHeader>
          <CardContent className="p-0">
            <div className='px-6'>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2" />
            </div>
            <Skeleton className="h-48 w-full mt-4" /> {/* Placeholder for image */}
          </CardContent>
          <CardFooter className="flex justify-between mt-2">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-24" />
          </CardFooter>
        </Card>
      )}
    </>
  );
};



export default PostLoading;