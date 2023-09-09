"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";
import React from "react";

const SetClaim = () => {
  const options = {
    db: {
      schema: "public",
    },
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  };
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE as string,
    options
  );
  const setClaim = "set_claim";

  const test = async () => {
    const { data, error } = await supabase.rpc(setClaim, {
      uid: "a04ae484-fa0d-47e8-b83f-1b2b282d0333",
      claim: "userrole",
      value: "tee",
    });
    console.log("setClaim", data);
    console.log("error", error);
  };

  return <button onClick={test}>setClaim</button>;
};

export default SetClaim;
