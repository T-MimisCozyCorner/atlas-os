# ATLAS OS Sprint 2.3 Setup

## What this adds
- AI Product Factory page at `/product-factory`
- Rule-based product generation
- Generated description, SEO, Pinterest titles, TikTok script, Facebook post, email copy, and image prompt
- Save generated product through the existing Product form
- More product database columns

## Step 1: Run SQL
In Supabase → SQL Editor, run:

`supabase/sprint_2_3_products_columns.sql`

## Step 2: Upload code
Upload/replace these files inside your existing GitHub `atlas-os` folder.

## Step 3: Deploy
Vercel should redeploy automatically. If not, redeploy manually.

## Step 4: Test
Visit `/product-factory`, generate a product, send it to the save form, then save.
