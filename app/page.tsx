import { Suspense } from "react";
import { BlogpostCard } from "./components/general/BlogpostCard";
import { prisma } from "./utils/db";
import { Skeleton } from "@/components/ui/skeleton";

export const revalidate = 60;

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await prisma.blogPost.findMany({
<<<<<<< HEAD
    orderBy: {
      createdAt: "desc", // ayusin ayon sa date mula pinakabago
    },
=======
>>>>>>> 00d0f72f23883e23e3178aeaa32c42baabcc5ccd
    select: {
      id: true,
      title: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      content: true,
      createdAt: true,
      updatedAt: true,
      authorId: true,
    },
  });

  return data;
}

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold tracking-tight mb-8">Latest Post</h1>
      <Suspense fallback={<SkeletonCard />}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}

async function BlogPosts() {
  const data = await getData();
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
<<<<<<< HEAD
        <BlogpostCard data={item} key={item.id} showDelete={false} />
=======
        <BlogpostCard data={item} key={item.id} />
>>>>>>> 00d0f72f23883e23e3178aeaa32c42baabcc5ccd
      ))}
    </div>
  );
}

function SkeletonCard() {
  return (
<<<<<<< HEAD
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="space-y-2" key={index}>
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        ))}
      </div>
=======
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
      {Array.from({ length: 6 }).map((_, index) => (
        <div className="space-y-2" key={index}>
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      ))}
>>>>>>> 00d0f72f23883e23e3178aeaa32c42baabcc5ccd
    </div>
  );
}
