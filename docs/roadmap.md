# Roadmap

## Phase 0 – Marketing site (DONE)
- Static landing page deployed on Nginx + HTTPS via Let's Encrypt
- CTA funnels for cohorts, readiness quiz, contact form

## Phase 1 – Learner portal MVP
- Auth: email + magic link (Supabase/Auth0) and role-based access
- Dashboard: study plan, progress chart, certificate tracker
- Question bank: internal authoring tool (original PMI-aligned items only) + MCQ simulator with explanations
- Content hosting: modular lessons, downloadables, office-hour recordings

## Phase 2 – CRM & Ops
- Lightweight CRM to track leads → cohort seats → alumni
- Industry tagging (construction, IT, finance, energy) for messaging + analytics
- Automations: reminder emails, prep sprints, renewal nudges

## Phase 3 – Community & Career
- Mentor pods, roundtable scheduling, job board integration
- Career runway tooling (resume feedback, interview mock scheduling)
- Alumni portal + referral tracking

## Phase 4 – Mobile / native app
- Responsive PWA first, optional native shell if needed
- Offline quiz mode + spaced repetition notifications

## Technical considerations
- Stack candidates: Next.js + Supabase/Postgres + Tailwind + tRPC; or Remix + Prisma
- Infra: GitHub Actions → Fly.io/Render/Vercel; S3/R2 for assets
- Security: SSO-ready, audit logging, PII encryption at rest
- Question bank workflow: SME review queue, metadata tagging, A/B testing on question difficulty
