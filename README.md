# PM Intelligence Hub

Repo for the PMI Training venture: marketing site + future learning platform.

## Structure

```
PMITraining/
├── landing/          # current static marketing site
└── docs/             # product specs, roadmap, requirements
```

## Landing site
- Tech: pure HTML/CSS/JS (no build step).
- Preview locally: open `landing/index.html` in any browser.
- Deploy: sync the `landing/` contents to your web root (currently `/var/www/pmintelligencehub`).

## Roadmap highlights
1. Custom learner portal (auth + progress tracking)
2. Built-in CRM basics (lead capture → cohort mgmt)
3. Adaptive question bank + exam simulator (original PMI-aligned content)
4. Industry-tailored messaging (construction, IT, finance, energy)

Details live in `docs/roadmap.md`.

## Next steps
- Flesh out the portal architecture + data model.
- Stand up a modern web app stack (likely Next.js + Supabase/Postgres) for the learner portal.
- Hook CI/CD to deploy both the marketing site and app automatically.
