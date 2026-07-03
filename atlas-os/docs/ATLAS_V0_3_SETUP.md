# ATLAS OS v0.3 AI Generation Engine Setup

## What this adds
- Reusable AI prompt layer
- OpenAI-backed backend API route at `/api/ai/generate`
- Product Factory UI that calls the API
- Fallback generator if no OpenAI key exists
- More product fields for generated copy

## Step 1: Run SQL
In Supabase SQL Editor, run:

`supabase/v0_3_ai_generation_engine_columns.sql`

## Step 2: Upload code
Upload/replace these files inside your existing GitHub `atlas-os` folder.

## Step 3: Add OpenAI key in Vercel
Vercel → atlas-os → Settings → Environment Variables:

OPENAI_API_KEY = your OpenAI API key
OPENAI_MODEL = gpt-5.5-mini

Important:
- Do NOT prefix OPENAI_API_KEY with NEXT_PUBLIC.
- Never put the OpenAI key in frontend code.
- Redeploy after adding the variables.

## Step 4: Test
Visit `/product-factory`.
Type a product idea.
Click `Generate With ATLAS AI`.
If your OpenAI key is configured correctly, source will show `OpenAI API`.
If not, it will use the fallback generator.
