"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>();

  return (
    <div className="flex min-h-screen justify-center items-center ">
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "darkred",
                brandAccent: "darkred",
              },
            },
          },
        }}
        theme="dark"
        redirectTo="/sdf"
      />
    </div>
  );
}
