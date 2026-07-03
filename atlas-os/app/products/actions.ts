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
  });

  if (error) redirect(`/products/new?message=${encodeURIComponent(error.message)}`);
  revalidatePath("/products");
  redirect("/products");
}

export async function deleteProduct(formData: FormData) {
  const supabase = createClient();
  await supabase.from("products").delete().eq("id", String(formData.get("id")));
  revalidatePath("/products");
}
