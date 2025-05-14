import { prisma } from "@/app/utils/db";
import { updatePost } from "@/app/action";
import { notFound } from "next/navigation";

interface EditPageProps {
  params: {
    id: string;
  };
}

export default async function EditPage({ params }: EditPageProps) {
  const post = await prisma.blogPost.findUnique({
    where: { id: params.id },
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

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Post
        </button>
      </form>
    </div>
  );
}
