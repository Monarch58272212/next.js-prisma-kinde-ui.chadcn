"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function handleSubmission(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/register");
  }

  const title = formData.get("title");
  const content = formData.get("content");
  const url = formData.get("url");

  if (!user || !title || !content || !url) {
    throw new Error("Incomplete data submitted.");
  }

  await prisma.blogPost.create({
    data: {
      title: title as string,
      content: content as string,
      imageUrl: url as string,
      authorId: user.id,
      authorImage: user?.picture as string,
      authorName: user?.given_name as string,
    },
  });

  revalidatePath("/");

  return redirect("/dashboard");
}
<<<<<<< HEAD

export async function deletePost(formData: FormData) {
  const id = formData.get("id") as string;

  if (!id) throw new Error("Missing post ID");

  await prisma.blogPost.delete({
    where: { id },
  });

  revalidatePath("/");
  return redirect("/dashboard");
}

export async function updatePost(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const url = formData.get("url") as string;

  // ✅ Basic validation
  if (!user || !id || !title || !content || !url) {
    throw new Error("Incomplete data submitted.");
  }

  // ✅ Update post using Prisma
  await prisma.blogPost.update({
    where: { id },
    data: {
      title,
      content,
      imageUrl: url,
    },
  });

  // ✅ Clear cache and redirect
  revalidatePath("/");
  return redirect("/dashboard");
}
=======
>>>>>>> 00d0f72f23883e23e3178aeaa32c42baabcc5ccd
