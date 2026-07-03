-- ATLAS OS Sprint 2.1 Database Schema
-- Run this in Supabase SQL Editor.

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  business text not null default 'Mimi''s Cozy Corner',
  status text not null default 'Idea',
  price text,
  next_step text,
  created_at timestamptz not null default now()
);

alter table public.products enable row level security;

drop policy if exists "Users can read own products" on public.products;
create policy "Users can read own products" on public.products
for select to authenticated using (auth.uid() = user_id);

drop policy if exists "Users can insert own products" on public.products;
create policy "Users can insert own products" on public.products
for insert to authenticated with check (auth.uid() = user_id);

drop policy if exists "Users can update own products" on public.products;
create policy "Users can update own products" on public.products
for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "Users can delete own products" on public.products;
create policy "Users can delete own products" on public.products
for delete to authenticated using (auth.uid() = user_id);
