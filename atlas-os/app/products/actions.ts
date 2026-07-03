"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProduct(formData: FormData) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login");

  const { error } = await supabase.from("products").insert({
    user_id: user.id,
    name: String(formData.get("name")),
    business: String(formData.get("business")),
    status: String(formData.get("status")),
    price: String(formData.get("price")),
    next_step: String(formData.get("next_step")),
    description: String(formData.get("description") || ""),
    seo_title: String(formData.get("seo_title") || ""),
    seo_description: String(formData.get("seo_description") || ""),
    keywords: String(formData.get("keywords") || ""),
    pinterest_titles: String(formData.get("pinterest_titles") || ""),
    pinterest_descriptions: String(formData.get("pinterest_descriptions") || ""),
    tiktok_script: String(formData.get("tiktok_script") || ""),
    facebook_post: String(formData.get("facebook_post") || ""),
    instagram_caption: String(formData.get("instagram_caption") || ""),
    email_copy: String(formData.get("email_copy") || ""),
    image_prompt: String(formData.get("image_prompt") || ""),
    pdf_outline: String(formData.get("pdf_outline") || ""),
    launch_checklist: String(formData.get("launch_checklist") || ""),
  });

  if (error) redirect(`/products/new?message=${encodeURIComponent(error.message)}`);
  revalidatePath("/products");
  revalidatePath("/dashboard");
  redirect("/products");
}

export async function deleteProduct(formData: FormData) {
  const supabase = createClient();
  await supabase.from("products").delete().eq("id", String(formData.get("id")));
  revalidatePath("/products");
  revalidatePath("/dashboard");
}
