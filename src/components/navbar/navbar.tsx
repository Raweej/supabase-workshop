"use client";
import { Database } from "@/lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  const handleSignIn = async () => {
    router.push("/login");
  };

  return (
    <div className="h-16 p-2 bg-blue-400 flex w-full justify-between items-center ">
      <Link href="/">
        <div className="p-2 cursor-pointer ">Home</div>
      </Link>
      <div className="flex gap-2">
        <button onClick={handleSignIn} className="p-2 bg-gray-700">
          SignIn
        </button>
        <button onClick={handleSignOut} className="p-2 bg-gray-700">
          SignOut
        </button>
      </div>
    </div>
  );
};

export default Navbar;
