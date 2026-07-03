-- ATLAS OS Sprint 2.3 Product Factory Columns
-- Run this in Supabase SQL Editor.

alter table public.products
add column if not exists description text,
add column if not exists seo_title text,
add column if not exists seo_description text,
add column if not exists keywords text,
add column if not exists pinterest_titles text,
add column if not exists tiktok_script text,
add column if not exists facebook_post text,
add column if not exists email_copy text,
add column if not exists image_prompt text;
