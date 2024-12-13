import Link from "next/link";
import React from "react";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";
import { LogInIcon, LogOutIcon } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href={"/"}>
          <Image src="/energize.jpeg" alt="logo" width={50} height={50} />
        </Link>

        <div className="flex items-center gap-5 align-middle">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="text-black border hover:bg-pink-200 px-5 py-2 rounded-md transition-all duration-1000">
                  Create
                </span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit" className="text-black">
                  <span>
                    <LogOutIcon className="size-6 text-red-800" />
                  </span>
                </button>
              </form>

              <Link href={`/user/${session.id}`}>
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image}
                    alt={session?.user?.name}
                  />
                </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit" className="text-black">
                <span>
                  <LogInIcon className="size-6 text-green-600 " />
                </span>
              </button>
            </form>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
