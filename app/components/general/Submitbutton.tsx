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
<<<<<<< HEAD

export function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <Button variant="destructive" type="submit" disabled={pending}>
      {pending ? "Deleting..." : "Delete"}
    </Button>
  );
}
=======
>>>>>>> 00d0f72f23883e23e3178aeaa32c42baabcc5ccd
