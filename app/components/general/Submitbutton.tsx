"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export function Submitbutton() {
  const { pending } = useFormStatus();
  return (
    <Button className="w-fit" type="submit" disabled={pending}>
      {pending ? "Submitting.." : "Submit"}
    </Button>
  );
}

export function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <Button variant="destructive" type="submit" disabled={pending}>
      {pending ? "Deleting..." : "Delete"}
    </Button>
  );
}

export function UpdateButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="bg-blue-900 text-amber-50"
      type="submit"
      disabled={pending}
    >
      {pending ? "Updating..." : "Update"}
    </Button>
  );
}
