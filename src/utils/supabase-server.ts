import { Database } from "@/lib/database.types";
import {
  createPagesBrowserClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const createClient = () =>
  createServerComponentClient<Database>({ cookies });
