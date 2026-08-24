create table public.blog_view_counts (
  slug text primary key,
  view_count bigint not null default 0,
  updated_at timestamptz not null default now(),
  constraint blog_view_counts_slug_length check (char_length(slug) between 1 and 200),
  constraint blog_view_counts_view_count_non_negative check (view_count >= 0)
);

alter table public.blog_view_counts enable row level security;

create or replace function public.increment_blog_view(p_slug text)
returns table(view_count bigint)
language sql
security definer
set search_path = public
as $$
  insert into public.blog_view_counts as counts (slug, view_count)
  values (p_slug, 1)
  on conflict (slug)
  do update
    set view_count = counts.view_count + 1,
        updated_at = now()
  returning counts.view_count;
$$;

revoke all on table public.blog_view_counts from anon, authenticated;
revoke all on function public.increment_blog_view(text) from public;
grant execute on function public.increment_blog_view(text) to service_role;
