import { prisma } from "@/app/utils/db";
import { updatePost } from "@/app/action";
import { notFound } from "next/navigation";
import { UpdateButton } from "@/app/components/general/Submitbutton";

export const dynamicParams = false;

export default async function EditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = await prisma.blogPost.findUnique({
    where: { id },
  });

  if (!post) return notFound();

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Edit Blog Post</h1>
      <form action={updatePost} className="space-y-4">
        <input type="hidden" name="id" value={post.id} />

        <div>
          <label className="block mb-1">Title</label>
          <input
            placeholder="Title"
            type="text"
            name="title"
            defaultValue={post.title}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Content</label>
          <textarea
            placeholder="Content"
            name="content"
            defaultValue={post.content}
            rows={6}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Image URL</label>
          <input
            placeholder="Image URL"
            type="text"
            name="url"
            defaultValue={post.imageUrl}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <UpdateButton />
      </form>
    </div>
  );
}
