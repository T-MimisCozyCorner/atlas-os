import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { generateProduct } from "@/lib/ai/product-generator";

export async function POST(request: Request) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();

  if (!body.idea || String(body.idea).trim().length < 3) {
    return NextResponse.json({ error: "Please enter a product idea." }, { status: 400 });
  }

  const result = await generateProduct({
    idea: String(body.idea),
    business: body.business ? String(body.business) : undefined,
    audience: body.audience ? String(body.audience) : undefined,
    productType: body.productType ? String(body.productType) : undefined,
  });

  return NextResponse.json(result);
}
