import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL as string;
const key = process.env.SUPABASE_KEY as string;

const bucket = "home-away-2";

export const supabase = createClient(url, key);

export const uploadImage = async (image: File) => {
  const timestamps = Date.now();
  const newName = `${timestamps}-${image.name}`;
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(newName, image, {
      cacheControl: "3600",
    });
  if (!data) throw new Error("Image upload failed.");
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};
