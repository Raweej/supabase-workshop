import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import React from "react";
import NewPost from "./newPost";
import SetClaim from "./setClaim";

const Profile = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data } = await supabase.from("profiles").select("*, post(*)");

  return (
    <div>
      <SetClaim />
      <NewPost />
      <div>JSON</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Profile;
