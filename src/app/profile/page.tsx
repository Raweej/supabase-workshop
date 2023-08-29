"use client";
import { useSupabase } from "@/components/providers/supabase-provider";
import React from "react";

const Profile = async () => {
  const { supabase } = useSupabase();
  const { data } = await supabase.from("profiles").select("*, post(*)");

  return (
    <div>
      <div>JSON</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Profile;
