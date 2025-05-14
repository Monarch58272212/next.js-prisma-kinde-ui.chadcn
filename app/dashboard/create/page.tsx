import { handleSubmission } from "@/app/action";
import { Submitbutton } from "@/app/components/general/Submitbutton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CreateBlogroute() {
  return (
    <div>
      <Card className=" max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>
            Create a new post to share with friends
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="flex flex-col gap-4" action={handleSubmission}>
            <div className="flex flex-col gap-2">
              <label>Title</label>
              <Input name="title" required placeholder="Title" type="text" />
            </div>

            <div className="flex flex-col gap-2">
              <label>Content</label>
              <Textarea name="content" required placeholder="Content" />
            </div>

            <div className="flex flex-col gap-2">
              <label>Image URL</label>
              <Input name="url" required type="url" placeholder="Image URL" />
            </div>

            <Submitbutton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
