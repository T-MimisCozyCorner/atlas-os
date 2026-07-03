# ATLAS OS Sprint 2.1 Setup

## What this adds
- Supabase login/signup
- Protected routes
- Logout button
- Products table in Supabase
- New Product form
- Delete Product action
- Dashboard product count from database

## Step 1: Create a Supabase project
Go to supabase.com and create a new project.

## Step 2: Run the SQL
Supabase Dashboard → SQL Editor → paste `supabase/schema.sql` → Run.

## Step 3: Get API values
Supabase Dashboard → Project Settings → API:
- Project URL
- anon/public publishable key

## Step 4: Add Vercel environment variables
Vercel → atlas-os → Settings → Environment Variables:

NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

Add them to Production, Preview, and Development.

## Step 5: Upload code
Upload/replace these files inside your GitHub repo's existing `atlas-os` folder.

## Step 6: Redeploy
Vercel → Deployments → Redeploy without build cache.

## Step 7: Test
- Visit `/auth/signup`
- Create account
- Visit `/products/new`
- Save a product
- Confirm it appears at `/products`
