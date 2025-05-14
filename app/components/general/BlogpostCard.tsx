import Image from "next/image";
import Link from "next/link";
import { deletePost } from "@/app/action"; // siguraduhing tamang path
import { DeleteButton } from "@/app/components/general/Submitbutton";
interface IappProps {
  data: {
    title: string;
    content: string;
    id: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    authorImage: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

type BlogpostCardProps = {
  data: any;
  showDelete?: boolean; // optional prop
};

export function BlogpostCard({ data, showDelete = true }: BlogpostCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <Link href={`/post/${data.id}`} className="block w-full">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={data.imageUrl}
            alt="Image"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            {data.title}
          </h2>
          <p className="text-sm text-gray-700 mb-4 line-clamp-2">
            {data.content}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative size-8 h-8 overflow-hidden rounded-full">
                <Image
                  src={data.authorImage}
                  alt={data.authorName}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-medium text-gray-600">
                {data.authorName}
              </p>
            </div>
            <time className="text-xs text-gray-500">
              {new Intl.DateTimeFormat("en-us", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }).format(data.createdAt)}
            </time>
          </div>
        </div>
      </Link>
      {showDelete && (
        <div className="p-4 flex justify-between items-center space-x-2">
          <form action={deletePost}>
            <input type="hidden" name="id" value={data.id} />
            <DeleteButton />
          </form>

          <Link
            href={`/edit/${data.id}`}
            className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Edit
          </Link>
        </div>
      )}
    </div>
  );
}
