import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/app/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { BlogpostCard } from "../components/general/BlogpostCard";

async function getData(userId: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export default async function Dashboard() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return <div>Error: User not found.</div>;
  }

  const data = await getData(user?.id);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Your Blog Articles</h2>

        <Link
          href={"/dashboard/create"}
          className={buttonVariants({ variant: "default" })}
        >
          Create Post
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <BlogpostCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
