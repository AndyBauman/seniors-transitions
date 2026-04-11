-- Run this in your Supabase SQL Editor to create the contacts table.
-- Dashboard: https://supabase.com/dashboard → your project → SQL Editor

create table if not exists contacts (
  id            uuid primary key default gen_random_uuid(),
  name          text not null default '',
  email         text not null default '',
  phone         text not null default '',
  type          text not null default 'other',
  organization  text not null default '',
  title         text not null default '',
  notes         text not null default '',
  website       text not null default '',
  city          text not null default '',
  state         text not null default '',
  placement_targets text not null default '',
  stage         text not null default 'new-lead',
  last_contacted date,
  next_follow_up date,
  created_at    timestamptz not null default now(),
  score         integer not null default 50,
  starred       boolean not null default false,
  verified      boolean not null default false,
  verified_date date
);

-- Allow the anon key to read/write (adjust RLS to your needs)
alter table contacts enable row level security;

create policy "Allow all for authenticated and anon"
  on contacts for all
  using (true)
  with check (true);

-- Useful indexes
create index if not exists idx_contacts_type on contacts (type);
create index if not exists idx_contacts_stage on contacts (stage);
create index if not exists idx_contacts_state on contacts (state);
create index if not exists idx_contacts_verified on contacts (verified);
