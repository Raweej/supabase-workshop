"use client";

import { createContext, use, useContext, useEffect, useState } from "react";
import type { Session, SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";
import { createClient } from "@/utils/supabase-browser";
import { useRouter } from "next/navigation";

interface ContextI {
  supabase: SupabaseClient<Database>;
  session?: Session | null;
}

type SupabaseContext = {
  supabase: SupabaseClient<Database>;
};

const Context = createContext<ContextI | undefined>(undefined);

export default function SupabaseProvider({
  serverSession,
  children,
}: {
  serverSession: Session | null;
  children: React.ReactNode;
}) {
  const [supabase] = useState(() => createClient());
  const router = useRouter();
  const [session] = useState(serverSession);

  // Refresh the Page to Sync Server and Client
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== serverSession?.access_token) {
        router.refresh();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase, serverSession?.access_token]);

  const exposed: ContextI = {
    supabase,
    session,
  };
  return (
    <Context.Provider value={exposed}>
      <>{children}</>
    </Context.Provider>
  );
}

export const useSupabase = () => {
  let context = useContext(Context);
  if (context === undefined) {
    throw new Error("useSupabase must be used inside SupabaseProvider");
  } else {
    return context;
  }
};
