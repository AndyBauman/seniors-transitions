# Senior Transitions Group — Infrastructure & Operations
> Last updated: 2026-08-13 · Owner: Andy Bauman · Status: Live

## 1. Snapshot
| Field | Value |
|---|---|
| Purpose | Marketing site + password-gated CRM for Senior Transitions Group — senior living placement, downsizing, and move coordination in the Portland, OR / Vancouver, WA metro |
| Primary domain | seniors-transitions.com |
| Additional domains / redirects | www.seniors-transitions.com (Vercel alias; **serves 200, no 301 to apex**). Brand domain `seniortransitionsgroup.com` is a **separate** Duda site (not this repo) — see §2 |
| Live URL | https://seniors-transitions.com |
| Staging URL | https://seniors-transitions.vercel.app · https://seniors-transitions-balcodesign-gmailcoms-projects.vercel.app · per-deploy `*.vercel.app` |
| Stack | Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4 + Supabase (Postgres, contacts CRM) |
| Repo URL | https://github.com/AndyBauman/seniors-transitions (**public**) |
| Default branch | main |
| Criticality | Supporting (client lead-gen + CRM) |

## 2. Domains & Registrar
| Domain | Registrar | Account | Auto-renew | Expires | Annual cost | Privacy |
|---|---|---|---|---|---|---|
| seniors-transitions.com | GoDaddy.com, LLC (IANA 146) | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | 2027-03-18 | ⚠️ UNKNOWN — TODO | Yes (public WHOIS shows no registrant) |
| seniortransitionsgroup.com (brand / legacy site — **not this Next.js app**) | ⚠️ UNKNOWN — TODO (NS `ns21`/`ns22.domaincontrol.com` = GoDaddy) | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |

- Transfer lock: Yes on `seniors-transitions.com` (`clientDeleteProhibited`, `clientRenewProhibited`, `clientTransferProhibited`, `clientUpdateProhibited`)
- Auth/EPP code location: GoDaddy → Domain → Transfer (⚠️ UNKNOWN — TODO which login)
- Nameservers: `ns1.vercel-dns.com`, `ns2.vercel-dns.com` (DNS is **Vercel**, registrar is GoDaddy)
- Registered: 2026-03-18 · Updated: 2026-03-19

Related (not this deploy): `seniortransitionsgroup.com` A → `162.159.140.166` (Cloudflare), www CNAME → `sites.ludicrous.cloud` (Duda), MX → `smtp.google.com`. Marketing copy in `stg-marketing-framework.md` still links here.

## 3. DNS
DNS is managed at: Vercel DNS — https://vercel.com/balcodesign-gmailcoms-projects/seniors-transitions/settings/domains (login: ⚠️ UNKNOWN — TODO which Vercel/GitHub identity)

| Type | Host/Name | Value | TTL | Proxied | Purpose |
|---|---|---|---|---|---|
| A | @ | `76.76.21.21` | 60 | Vercel edge (not Cloudflare) | Apex → Vercel |
| CNAME | www | `cname.vercel-dns.com` | 60 | Vercel edge | www → Vercel |
| MX | @ | *(none)* | — | — | **No inbound mail on this domain** |
| TXT | @ | *(none)* | — | — | No SPF / Google / Vercel verify at apex |
| TXT | _dmarc | `v=DMARC1; p=quarantine; adkim=r; aspf=r; rua=mailto:dmarc_rua@onsecureserver.net;` | ⚠️ UNKNOWN — TODO | No | DMARC (GoDaddy-style default rua) |
| TXT | {selector}._domainkey | *(none — checked `selector1`, `selector2`, `google`, `default`, `resend`)* | — | — | DKIM not published |
| TXT | @ | *(none)* | — | — | Domain verification |

- Email deliverability status (SPF/DKIM/DMARC valid?): **Broken for this domain.** DMARC exists, but **no MX, no SPF, no DKIM**. Site advertises `info@seniors-transitions.com` — that mailbox almost certainly does not receive mail here. Brand-domain mail (if any) lives on `seniortransitionsgroup.com` (Google Workspace MX).
- SSL: Let's Encrypt via Vercel, auto-renew yes. Live cert: CN `*.seniors-transitions.com`, issued 2026-07-19, expires **2026-10-17**. HSTS `max-age=63072000`.
- CDN / WAF: Vercel Edge Network (observed `X-Vercel-Id: pdx1`). No Cloudflare in front of this hostname.

## 4. Hosting & Deployment
| Field | Value |
|---|---|
| Host | Vercel |
| Account / team | `balcodesign-gmailcom's projects` (`team_K718LQ4ow7ZHfsLc2zOuollB`) · project `seniors-transitions` (`prj_UP1y8Va5YvskWHCA4v2bSzlMMJKT`) |
| Plan & monthly cost | ⚠️ UNKNOWN — TODO (Hobby vs Pro; this team hosts many sites) |
| Region | Edge: **pdx1** (live HTML). Serverless functions built to **iad1** (inspect output) |
| Build command | `next build` (`npm run build`) |
| Output directory | Next.js default (`.next`) — not a static export |
| Install command | `npm install` |
| Node/runtime version | Vercel: **24.x** · local: v24.11.1 · no `.nvmrc` · README says Node 18+ (stale; Next 16 wants **20.9+**) |
| Deploy trigger | ⚠️ UNKNOWN — TODO whether GitHub auto-deploy is on. Last **production** deploy observed: **2026-05-20** (`dpl_5iHExGCoEgughhMeLdeNz8dpZej4`). `origin/main` tip is 2026-04-11 |
| Rollback method | Vercel Dashboard → Project → Deployments → ⋮ → Promote to Production |

**Deploy manually:**
```bash
cd C:\Seniors-Transitions
npm install
npm run build
npx vercel --prod --scope balcodesign-gmailcoms-projects
```

Or: `git push origin main` **if** Git integration auto-deploy is enabled (verify in Vercel → Project → Settings → Git).

Dashboard: https://vercel.com/balcodesign-gmailcoms-projects/seniors-transitions

## 5. Environment Variables
🔒 Values live in: Vercel → Project → Settings → Environment Variables (and a local `.env` / `.env.local` that is gitignored). Never stored in this file or in git.

| Variable | Scope | Purpose | Where the value comes from |
|---|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Development, Preview, Production (set ~124d ago) | Supabase project URL (public) | Supabase Dashboard → Project Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Development, Preview, Production (set ~124d ago) | Supabase anon/public key (public by design) | Supabase Dashboard → Project Settings → API |
| `NEXT_PUBLIC_SITE_URL` | prod/preview/local (optional) | Canonical origin. **Not set in Vercel.** Code defaults to `https://seniors-transitions.com` | `src/lib/site.ts` |
| `ADMIN_PASSWORD` | prod/preview/local | Admin CRM login. **Not set in Vercel.** Code falls back to a hardcoded default in `src/lib/admin-auth.ts` | Must be set in Vercel env; rotate the source fallback |
| `ADMIN_SESSION_SECRET` | prod/preview/local | HMAC secret for `stg_admin_session` cookie. **Not set in Vercel.** Falls back to `ADMIN_PASSWORD` | Must be a long random string in Vercel env |
| `NODE_ENV` | set by runtime | Cookie `secure` flag in production | Next.js / Vercel |

- `.env.example` present: **no**
- Local setup: copy the names above into `.env.local`, then `npm install && npm run dev`

## 6. Database & Storage
| Field | Value |
|---|---|
| Engine | PostgreSQL (Supabase) |
| Provider / project | Supabase · project URL is `NEXT_PUBLIC_SUPABASE_URL` in Vercel (⚠️ UNKNOWN — TODO dashboard project name / ref) |
| Dashboard URL | https://supabase.com/dashboard |
| Connection string location | Supabase Dashboard → Project Settings → Database (URI). **Not** in Vercel env (app uses anon key only) |
| Schema location | `supabase-schema.sql` (single `contacts` table). No Prisma / Drizzle / `supabase/migrations` |
| Migration command | Paste/run `supabase-schema.sql` in Supabase SQL Editor. No CLI migration pipeline |
| Row-level security enabled | **Yes, but open.** Policy `"Allow all for authenticated and anon"` → `USING (true) WITH CHECK (true)` |
| File/object storage | None (static assets in `public/` and `brochures/`; CRM tasks live in **browser localStorage**, not the DB) |

**Key tables:** `contacts` → CRM + contact/consultation form leads (name, email, phone, type, org, notes, pipeline `stage`, score, starred, verified).

**Not in the database:** CRM **tasks** (`stg_crm_tasks` in localStorage via `src/lib/crm-store.ts`). They vanish if the browser profile is cleared.

## 7. Backups & Recovery
| What | Method | Frequency | Retention | Location | Last verified |
|---|---|---|---|---|---|
| Code | GitHub `main` | On push | Git history | https://github.com/AndyBauman/seniors-transitions | 2026-08-13 (public) |
| Database | ⚠️ UNKNOWN — TODO (Supabase PITR / nightly backups depend on plan) | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | Supabase project | ⚠️ UNKNOWN — TODO |
| Uploads/media | Git (`public/`, `brochures/`) | On commit | Git history | Repo | n/a (no object storage) |
| Env vars | Vercel dashboard only (encrypted). **No `.env.example`.** | Manual | ⚠️ UNKNOWN — TODO | Vercel → Env | 2026-08-13 (names listed; 2 of 5 vars actually set) |
| DNS records | Vercel DNS (nameservers). No export found in repo | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | Vercel domain settings | 2026-08-13 (live query) |

**Restore the database:**
```bash
# 1. Create a new Supabase project (or open the existing one)
# 2. SQL Editor → run the repo schema:
#    supabase-schema.sql
# 3. Set NEXT_PUBLIC_SUPABASE_URL + NEXT_PUBLIC_SUPABASE_ANON_KEY in Vercel (all envs) and locally in .env.local
# 4. Optional: seed empty table from the running app (unauthenticated today — lock this down first):
curl -X POST https://seniors-transitions.com/api/contacts/seed
# 5. If you have a SQL dump from Supabase Dashboard → Database → Backups, restore from there instead of seed.
```

⚠️ UNKNOWN — TODO exact dump/restore CLI for this project’s plan (`supabase db dump` needs the project linked).

**Full rebuild from zero — ordered steps:**
1. Restore GitHub repo (or clone `https://github.com/AndyBauman/seniors-transitions.git`).
2. Recreate Vercel project under `balcodesign-gmailcoms-projects`; connect GitHub; set Node 24.x; add env vars in §5 (**including** `ADMIN_PASSWORD` and `ADMIN_SESSION_SECRET` — do not rely on the source fallback).
3. Recreate Supabase project; run `supabase-schema.sql`; copy URL + anon key into Vercel + `.env.local`. Tighten RLS and protect `/api/contacts*` before going live.
4. Point GoDaddy nameservers at `ns1.vercel-dns.com` / `ns2.vercel-dns.com` (or add A/CNAME if using GoDaddy DNS instead). Attach `seniors-transitions.com` + `www` in Vercel Domains.
5. `npm install && npm run build && npx vercel --prod --scope balcodesign-gmailcoms-projects`.
6. Recreate DMARC/SPF/MX if you want `info@seniors-transitions.com` to work. Restore Statcounter (or replace). CRM tasks cannot be restored from the DB — they were browser-only.

⚠️ Estimated recovery time: ~2–4 hours if GitHub + Vercel + Supabase accounts are reachable; longer if the Supabase project is gone and there is no DB backup.
⚠️ Known single points of failure: Andy’s Vercel team; GoDaddy registrar login; single Supabase project with open RLS; admin password fallback in a **public** repo; CRM tasks only in localStorage; no inbound email on the live domain; form UI reports success even when `/api/contacts` fails.

## 8. Third-Party Services & Integrations
| Service | Purpose | Plan / cost | Account | Dashboard | API keys stored in | Cancel impact |
|---|---|---|---|---|---|---|
| Vercel | Host, DNS, SSL, deploys | ⚠️ UNKNOWN — TODO | `balcodesign-gmailcoms-projects` | https://vercel.com/balcodesign-gmailcoms-projects/seniors-transitions | n/a (GitHub OAuth) | Site down |
| GitHub | Source | Free public repo | AndyBauman | https://github.com/AndyBauman/seniors-transitions | n/a | Cannot deploy/update |
| GoDaddy | Registrar for `seniors-transitions.com` | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | https://dcc.godaddy.com | n/a | Cannot renew/transfer domain |
| Supabase | Postgres CRM (`contacts`) | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | https://supabase.com/dashboard | `NEXT_PUBLIC_*` in Vercel | CRM + forms 503; site still renders |
| Statcounter | Traffic analytics | ⚠️ UNKNOWN — TODO | Project **13212616** · security `6136a1c0` | https://statcounter.com | Hardcoded in `src/app/layout.tsx` | Lose visit stats |
| Google Fonts | Lato + Cormorant Garamond | Free | n/a | fonts.google.com | n/a | Fonts fall back |
| Meta Pixel | Helpers exist; **script not installed** | n/a | n/a | n/a | `window.fbq` never inited | Ads optimization off |
| Google Analytics 4 | Helpers call `window.gtag`; **no GA4 snippet** | n/a | n/a | n/a | n/a | No GA4 events |
| Duda (`sites.ludicrous.cloud`) | Legacy brand site on `seniortransitionsgroup.com` | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | n/a | Old site down; this Next.js site unaffected |
| Google Workspace | MX on `seniortransitionsgroup.com` only | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | https://admin.google.com | n/a | Brand-domain mail down |

## 9. Email
| Field | Value |
|---|---|
| Inbox provider | ⚠️ UNKNOWN — TODO. **Not** on `seniors-transitions.com` (no MX). Likely Google Workspace on `seniortransitionsgroup.com` |
| Sending / transactional provider | **None in this repo.** No Resend/SendGrid/SES. Forms do not send email |
| From addresses | Site publishes `info@seniors-transitions.com` (schema, footer, privacy/terms) |
| Forwarding rules | ⚠️ UNKNOWN — TODO |
| Marketing/CRM tool | In-app CRM at `/admin` (Supabase `contacts`). No Mailchimp/HubSpot in code |

## 10. Analytics, SEO & Tracking
| Tool | ID / property | Installed where | Login |
|---|---|---|---|
| Google Analytics 4 | *(not installed)* — `src/lib/analytics.ts` calls `gtag` if present | n/a | n/a |
| Google Search Console | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
| Google Business Profile | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
| Google Tag Manager | *(not installed)* | n/a | n/a |
| Meta Pixel | *(not installed)* — `fbq` helpers in `src/lib/analytics.ts` | Contact form / phone click would fire **if** pixel were inited | n/a |
| Call tracking | None (direct `tel:5037558555` + `trackPhoneClick`) | `TrackedPhoneLink`, `StickyPhoneBar` | n/a |
| Rank tracking | ⚠️ UNKNOWN — TODO | n/a | n/a |
| Statcounter | Project `13212616` | `src/app/layout.tsx` (all pages) | https://statcounter.com |

- Sitemap URL: https://seniors-transitions.com/sitemap.xml (`src/app/sitemap.ts` — present locally; confirm it is on production if last deploy predates the file)
- robots.txt notes: `src/app/robots.ts` allows `/`, disallows `/admin/` and `/admin/login/`, points sitemap at `SITE_URL`. `public/llms.txt` also disallows `/admin/`
- Schema markup in use: `Organization`, `Service`, `FAQPage`, `LocalBusiness` (`src/components/SchemaMarkup.tsx`). Social: Facebook `/SeniorTransitionsGroup`, LinkedIn `/company/senior-transitions-group`, Instagram `/seniortransitionsgroup`

## 11. Payments & Forms
| Field | Value |
|---|---|
| Processor | None |
| Account | n/a |
| Live vs test mode | n/a |
| Webhook endpoints | none |
| Webhook secret location | n/a |
| Products / price IDs | n/a |
| Form handler | `src/app/contact/page.tsx` and `src/app/free-family-consultation/page.tsx` → `POST /api/contacts` → Supabase `contacts` insert. **No email notify.** Contact form shows success even if the API fails |
| Lead notification goes to | CRM only (`/admin`). Nobody is emailed |

## 12. Scheduled Jobs & Automations
| Job | Schedule | Trigger | Code location | Failure alert |
|---|---|---|---|---|
| *(none)* | — | — | No cron, no Vercel Cron, no queue workers | — |
| CRM seed | once, if table empty | `POST /api/contacts/seed` (also auto-called from admin UI) | `src/app/api/contacts/seed/route.ts` | None |
| UTM capture | on page load | client cookies | `src/components/marketing/UTMCapture.tsx` | None |

## 13. Monitoring & Alerts
| Check | Tool | Alerts to | Threshold |
|---|---|---|---|
| Uptime | ⚠️ UNKNOWN — TODO (none in repo) | — | — |
| Error tracking | none (no Sentry) | — | — |
| SSL expiry | Vercel / Let's Encrypt auto-renew | ⚠️ UNKNOWN — TODO Vercel account email | Current cert expires 2026-10-17 |
| Domain expiry | GoDaddy | ⚠️ UNKNOWN — TODO | Expires 2027-03-18 |

## 14. Cost Summary
| Item | Vendor | Cost | Billing cycle | Renews | Card on file |
|---|---|---|---|---|---|
| Domain seniors-transitions.com | GoDaddy | ⚠️ UNKNOWN — TODO | Annual | 2027-03-18 | ⚠️ UNKNOWN — TODO |
| Domain seniortransitionsgroup.com (legacy) | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | Annual | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
| Hosting | Vercel | ⚠️ UNKNOWN — TODO (likely $0 on Hobby if shared) | Monthly | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
| Database | Supabase | ⚠️ UNKNOWN — TODO | Monthly | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
| Analytics | Statcounter | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
| Legacy site | Duda | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
| Brand email | Google Workspace (on `seniortransitionsgroup.com`) | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
| **TOTAL** | | **⚠️ UNKNOWN — TODO** | | | |

## 15. Access & Accounts
🔒 Credentials live in: ⚠️ UNKNOWN — TODO (password manager). This table lists WHERE, never WHAT.

| System | Login email | 2FA method | Recovery codes stored | Who else has access |
|---|---|---|---|---|
| Vercel | ⚠️ UNKNOWN — TODO (team `balcodesign-gmailcoms-projects`) | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
| GitHub | AndyBauman | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO (public repo — anyone can read) |
| GoDaddy | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
| Supabase | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
| Statcounter | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |
| Site admin `/admin` | password only (no user accounts) | n/a | n/a | ⚠️ UNKNOWN — TODO (client staff?) |
| Google Workspace / Duda (brand domain) | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO | ⚠️ UNKNOWN — TODO |

## 16. Local Development
```bash
git clone https://github.com/AndyBauman/seniors-transitions.git
cd seniors-transitions
npm install
# create .env.local (gitignored):
#   NEXT_PUBLIC_SUPABASE_URL=...
#   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
#   ADMIN_PASSWORD=...          # required; do not use the source fallback
#   ADMIN_SESSION_SECRET=...    # long random string
#   NEXT_PUBLIC_SITE_URL=http://localhost:3000
npm run dev
# open http://localhost:3000
# admin: http://localhost:3000/admin/login
npm run build
npm start
```
- Required local tools: Node **20.9+** (24.x matches Vercel), npm, git
- Common gotchas:
  - No `.env.example`. Without Supabase env, `/api/contacts` returns 503 and the CRM falls back to localStorage.
  - Admin middleware only wraps `/admin/*`, **not** `/api/contacts*`.
  - Contact form still shows the success screen if the API errors (`contact/page.tsx` catch).
  - Working tree often has uncommitted page/SEO edits; production last seen 2026-05-20.

## 17. Known Issues & Tech Debt
| Issue | Impact | Priority | Notes |
|---|---|---|---|
| Admin password fallback committed; repo is **public**; Vercel env `ADMIN_PASSWORD` unset | Anyone can log into `/admin` in production | **P0** | Also named in git commit `3ade0f6`. Set env, rotate, make repo private |
| `/api/contacts` GET/POST/PATCH/DELETE and `/api/contacts/seed` have **no auth** | Public read/write/delete of CRM + PII | **P0** | Middleware matcher is `/admin` only |
| Supabase RLS policy allows all anon | Anon key in the browser can dump/alter `contacts` | **P0** | `supabase-schema.sql` lines 29–33 |
| No MX/SPF/DKIM on live domain; site lists `info@seniors-transitions.com` | Inbound mail to published address fails | **P0** | Point MX or stop advertising that address |
| Form reports success on API failure | Lost leads with no signal | **P1** | `src/app/contact/page.tsx` |
| CRM tasks only in localStorage | Tasks not backed up / not shared across devices | **P1** | `src/lib/crm-store.ts` |
| www and apex both 200 | Duplicate-content SEO | **P2** | Add 301 www → apex (or reverse) |
| GA4 / Meta Pixel helpers with no snippets | Tracking code is dead | **P2** | `stg-marketing-framework.md` still TODO |
| Production deploy 84d old vs later git | Live site may lag local/GitHub | **P2** | Last prod 2026-05-20 |
| No `.env.example`, no CI, no uptime/error monitoring | Restore and regressions are manual | **P2** | |
| README Node 18+ / Inter+Playfair fonts | Docs stale (Next 16; live fonts are Lato + Cormorant) | P3 | |

## 18. Change Log
| Date | Change | By |
|---|---|---|
| 2026-08-13 | Initial documentation | Andy |
