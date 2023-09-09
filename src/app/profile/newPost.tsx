import { createClient } from "@/utils/supabase-server";
import { revalidatePath } from "next/cache";
import React from "react";

const NewPost = () => {
  const addPost = async (formData: FormData) => {
    "use server";
    const title = formData.get("title") as string;
    const supabase = createClient();
    await supabase.from("post").insert({ title: title, profile_id: 1 });
    revalidatePath("/");
  };

  return (
    <div>
      <form action={addPost}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          className="text-black"
        />
      </form>
    </div>
  );
};

export default NewPost;
