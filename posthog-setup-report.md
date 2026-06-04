<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into your personal portfolio site (Next.js 16.2.6, App Router). PostHog is initialized via `instrumentation-client.ts` (the recommended approach for Next.js 15.3+), with a reverse proxy configured through Next.js rewrites to improve ad-blocker resilience and performance. Session replay, error tracking, and automatic exception capture are all enabled out of the box.

Environment variables (`NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST`) have been written to `.env.local` and are gitignored.

| Event | Description | File |
|---|---|---|
| `contact_email_clicked` | User clicks the email CTA button | `components/Hero.tsx`, `components/sections/Contact.tsx` |
| `hero_cta_work_clicked` | User clicks the "See my work" button in the hero | `components/Hero.tsx` |
| `hero_role_tab_changed` | User switches role tabs (Designer, Developer, Product, AI) | `components/Hero.tsx` |
| `social_link_clicked` | User clicks a social link (LinkedIn, GitHub, Instagram, Threads) | `components/TopNav.tsx`, `components/sections/Contact.tsx` |
| `nav_link_clicked` | User clicks a navigation link | `components/TopNav.tsx` |
| `mobile_menu_opened` | User opens the mobile navigation drawer | `components/TopNav.tsx` |
| `side_project_link_clicked` | User clicks an external link on a side project card | `components/sections/SideProjects.tsx` |
| `language_changed` | User switches the site language (EN ↔ DE) | `components/sections/Footer.tsx` |
| `footer_link_clicked` | User clicks a link in the footer (imprint, CV, website) | `components/sections/Footer.tsx` |

## Cookie consent

Analytics uses PostHog with `cookieless_mode: "on_reject"`. Visitors see a consent banner; declining keeps cookieless tracking, accepting enables cookies and full analytics.

**Required:** In your PostHog EU project, go to **Settings → Web analytics** and enable **Cookieless server hash mode**. Without this, declined/cookieless events may be ignored.

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](https://eu.posthog.com/project/194012/dashboard/725807)
- [Contact CTA Clicks](https://eu.posthog.com/project/194012/insights/DPSzWd3r) — unique visitors clicking your email button per day
- [Social Link Clicks by Platform](https://eu.posthog.com/project/194012/insights/yYSIcM0b) — which social platform drives the most clicks
- [Nav Link Engagement](https://eu.posthog.com/project/194012/insights/9l94hKwz) — which sections of your site visitors navigate to most
- [Side Project Link Clicks](https://eu.posthog.com/project/194012/insights/0RMTqyj0) — which side projects attract the most interest
- [Overall Engagement Overview](https://eu.posthog.com/project/194012/insights/jpVR34su) — all key engagement events on one chart

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
