import Link from "next/link";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  console.log("User from session:", user); // Debugging user data

  if (!user) {
    console.log("No user found in session");
  } else {
    console.log("User found:", user);
    console.log("User email:", user.email);
  }

  return (
    <nav className="flex items-center justify-between flex-wrap pb-5">
      <div className="flex items-center justify-between gap-6">
        <Link href={"/"}>
          <h1 className="text-black text-3xl font-bold">
            Blog<span className="text-blue-600">Christine</span>
          </h1>
        </Link>

        <div className="hidden sm:flex items-center space-x-4 flex-wrap">
          <Link
            href={"/"}
            className="text-sm font-medium hover:text-blue-500 transition duration-200"
          >
            Home
          </Link>
          <Link
            href={"/dashboard"}
            className="text-sm font-medium hover:text-blue-500 transition-colors"
          >
            Dashboard
          </Link>
        </div>
      </div>

      {user ? (
        <div className="flex items-center gap-4">
          <p className="font-bold text-sm">{user.given_name}</p>
          <div className="relative size-8 h8 overflow-hidden rounded-full">
            <Image
              src={user.picture ?? "/default-avatar.png"}
              alt={user.email ?? "User"}
              fill
              className="object-cover"
            />
          </div>

          <LogoutLink className={buttonVariants({ variant: "secondary" })}>
            {" "}
            LogOut{" "}
          </LogoutLink>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <LoginLink className={buttonVariants()}>Sign in</LoginLink>
          <RegisterLink className={buttonVariants({ variant: "secondary" })}>
            Sign up
          </RegisterLink>
        </div>
      )}
    </nav>
  );
}
