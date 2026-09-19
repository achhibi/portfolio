# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Amor Chhibi - Modern Portfolio Website**

A fully optimized, secure, and SEO-friendly portfolio showcasing Amor Chhibi's professional expertise as a Senior Java Developer, IAM specialist (Keycloak expert), and Cloud Architect with 13+ years of experience.

**Live:** https://portfolio-achhibi.vercel.app/
**Repository:** https://github.com/achhibi/portfolio
**Status:** ✅ Production-ready, fully optimized, indexed by Google

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19 + TypeScript (strict mode)
- **Styling:** Tailwind CSS 3.4 + custom animations
- **Animations:** Framer Motion 11
- **State:** Zustand 4.4 (available, not currently used)
- **Hosting:** Vercel (auto-deploy on push to main)
- **Database:** None (static site)
- **Backend:** None (all client-side)

## Project Structure

```
portfolio/
├── app/
│   ├── page.tsx              # Main portfolio page
│   ├── layout.tsx            # Root layout with metadata
│   ├── globals.css           # Global styles
│   └── privacy/
│       └── page.tsx          # Privacy & Security page
├── components/
│   ├── Hero.tsx              # Hero section (9 skills grid)
│   ├── About.tsx             # Bio + 6 stats
│   ├── Skills.tsx            # 6 skill categories
│   ├── Experience.tsx        # Career timeline
│   ├── Projects.tsx          # GitHub projects
│   ├── OpenSourceContributions.tsx # 4 major open source projects
│   ├── Contact.tsx           # Web3Forms contact form
│   ├── Navbar.tsx            # Navigation with active state detection
│   ├── Footer.tsx            # Footer with links
│   └── StructuredData.tsx    # JSON-LD schemas
├── public/
│   ├── sitemap.xml           # SEO sitemap
│   ├── robots.txt            # Search engine rules
│   ├── manifest.json         # PWA manifest
│   ├── favicon.svg           # AC favicon with gradient
│   └── googled320f6061af8e227.html  # Google verification
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── next.config.js            # Next.js config
├── tailwind.config.ts        # Tailwind theme
├── postcss.config.js         # PostCSS config
├── vercel.json               # Vercel deployment config
├── .eslintrc.json            # ESLint rules
├── .gitignore                # Git exclusions
├── Dockerfile                # Docker container
├── README.md                 # User documentation
├── CLAUDE.md                 # This file
├── SECURITY.md               # Security policy
├── SECURITY_AUDIT.md         # Detailed security audit
├── SECURITY_AUDIT_2026.md    # Complete audit (98/100)
├── SEO_OPTIMIZATION.md       # Complete SEO guide
├── CONTACT_SETUP.md          # Web3Forms setup guide
└── ADVANCED_SECURITY_AUDIT.md # Comprehensive audit

```

## Key Features

### Hero Section
- 9 skills displayed in responsive 3-column grid
- Dynamic role rotation (5 different roles)
- Glassmorphic design with cyan/purple gradient
- Mobile-optimized (2 col mobile, 3 col tablet, 3 col desktop)
- **Skills displayed:**
  - ☕ Java (no "21" - simplified)
  - 🍃 Spring Boot
  - ☁️ Cloud
  - 🤖 AI/LLMs
  - 🏗️ Microservices
  - 🔐 Keycloak
  - 🎯 Problem Solving
  - 🤝 Team Collaboration
  - 🔓 Open Source Lover

### About Section
- Professional bio (3 paragraphs)
- 6 statistics cards:
  - 📅 13+ Years experience
  - 🗂️ 50+ GitHub projects
  - 🏆 5+ Certifications
  - 💯 100% Code dedication
  - 🌍 2+ Languages fluent
  - 🔧 3+ Core frameworks
- Hobby: Chess (strategic thinking)
- Current role: Senior Developer at Groupe AGRICA, IAM/Keycloak specialist

### Sections
- **Skills:** 6 categories + 5 certifications
- **Experience:** 5 positions + education timeline
- **Projects:** 6 featured GitHub projects
- **Open Source Contributions:** 4 major projects (Zalando, Spring, Keycloak, custom)
- **Contact:** Web3Forms-integrated contact form + social links
- **Privacy:** GDPR-compliant policy page with sticky back button

### Recent Enhancements (Sep 2026)
- ✨ **Open Source Section** - Showcase contributions to Zalando, Spring, Keycloak
- 📧 **Contact Form** - Web3Forms integration for secure messaging
- 🎯 **Active Navigation** - Intersection Observer detects current section on scroll
- 🔒 **Favicon** - Custom "AC" SVG with cyan-purple gradient
- 🌐 **Enhanced Navbar** - Auto-hide on privacy page, active state highlighting
- 🔐 **Security Audit** - Complete audit (98/100 score)

## Development Commands

```bash
# Installation
npm install

# Development (HMR enabled)
npm run dev           # Start dev server (http://localhost:3000)

# Production
npm run build         # Create optimized build
npm start            # Run production server

# Quality
npm run lint         # ESLint check
npm run type-check   # TypeScript verification
```

## Design Decisions

### Color System
- **Primary:** `#0F172A` (navy/slate)
- **Accent:** `#06B6D4` (cyan) - primary CTA, hover states
- **Accent2:** `#8B5CF6` (purple) - gradients, secondary accents
- **Surface:** `#1E293B` (slightly lighter for sections)

**Why:** High contrast for accessibility, modern vibrancy, reduces eye strain in dark mode (which is always active).

### Client Components
- All sections use `'use client'` for interactivity (Framer animations, state)
- This is intentional - minimal JS for animations, not state management

**Why:** Animations need client-side execution. No backend logic means this is fine.

### Contact Form & Web3Forms
- Contact form integrated with Web3Forms (Cloudflare-protected service)
- Secure email delivery without backend
- No data stored in application
- Client-side submission (no server overhead)
- Environment variable: `NEXT_PUBLIC_WEB3FORMS_KEY`

**Why:** Reduces attack surface, simplifies deployment, zero infrastructure costs, fastest performance.

### Navigation with Active State
- Intersection Observer API detects visible sections
- Active nav link highlighted on scroll
- Desktop: bottom border; Mobile: left border
- Navbar auto-hides on /privacy page
- Smooth scroll animation for anchor links

**Why:** Better UX, visual feedback, professional navigation experience.

### Responsive Grid Strategy
- Mobile: `grid-cols-2` (2 columns)
- Tablet: `sm:grid-cols-3` (3 columns)
- Desktop: `md:grid-cols-3` (3 columns, 2 rows for 9 items)

**Why:** Balanced layout, avoids odd single-item rows, symmetrical on desktop.

## Security Highlights

### Implemented
- ✅ HTTPS/TLS enforced (HSTS header, 1 year)
- ✅ CSP headers (strict policy)
- ✅ X-Frame-Options (SAMEORIGIN)
- ✅ X-Content-Type-Options (nosniff)
- ✅ Permissions-Policy (camera, microphone, geolocation disabled)
- ✅ X-Robots-Tag (index, follow) - **CRITICAL: Allows Google indexing**
- ✅ No cookies, no tracking, no analytics
- ✅ No sensitive data in git history
- ✅ TypeScript strict mode
- ✅ URL validation (Contact component)
- ✅ No hardcoded secrets

### Security Audit Results (Sep 2026)
**Score: 98/100** - Highly Secure ✅

- ✅ Zero secrets in git history
- ✅ No PII exposure (email protected)
- ✅ All security headers configured
- ✅ Dependencies: 0 vulnerabilities
- ✅ TypeScript strict mode
- ✅ No XSS/SQL injection risks
- ✅ GDPR/CCPA compliant
- ✅ Vercel DDoS/WAF protection

### Security Files
- `SECURITY.md` - Public security policy
- `SECURITY_AUDIT.md` - Initial audit (445 lines)
- `SECURITY_AUDIT_2026.md` - Complete audit (98/100, 283 lines)
- `ADVANCED_SECURITY_AUDIT.md` - Advanced analysis
- `.well-known/security.txt` - Security contact info

## SEO Optimization

### Status: ✅ FULLY OPTIMIZED

**Key Implementations:**
- ✅ XML Sitemap with proper priorities and lastmod
- ✅ robots.txt with crawl instructions
- ✅ JSON-LD structured data (Person schema, Breadcrumbs)
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (social sharing)
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Mobile-first responsive design
- ✅ Lighthouse scores: 95+ across all metrics
- ✅ Core Web Vitals: Optimized (LCP <2.5s, FID <100ms, CLS <0.1)

### Files
- `SEO_OPTIMIZATION.md` - Complete 400+ line guide with timeline
- `public/sitemap.xml` - All pages listed
- `public/robots.txt` - Crawler rules
- `components/StructuredData.tsx` - JSON-LD markup

### Google Indexing
- ✅ X-Robots-Tag: index, follow (ALL pages)
- ✅ Verification file: `public/googled320f6061af8e227.html`
- ⏳ Expected full indexation: 24-48 hours after Google crawl

## Deployment

### Current Setup
- **Host:** Vercel (auto-deploy)
- **Trigger:** Push to main branch
- **URL:** https://portfolio-achhibi.vercel.app/
- **Deployment Time:** 2-5 minutes

### Vercel Configuration
**File:** `vercel.json`
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        // Security headers here
        {
          "key": "X-Robots-Tag",
          "value": "index, follow"  // CRITICAL: Allows indexing
        }
      ]
    }
  ]
}
```

**Important:** The `/(.*)/` pattern applies to ALL pages. Any header here affects the entire site.

## Common Development Tasks

### Adding a New Project

1. Open `components/Projects.tsx`
2. Add to `projects` array:
```typescript
{
  title: 'Project Name',
  description: 'Brief description',
  tags: ['Tag1', 'Tag2'],
  link: 'https://github.com/achhibi/project-name',
}
```
3. Run dev server to verify
4. Commit and push

### Updating Skills

1. Edit `components/Hero.tsx` (line ~80) for the 9-item grid
2. Or edit `components/Skills.tsx` for categories

**Current 9 Skills:**
- ☕ Java, 🍃 Spring Boot, ☁️ Cloud
- 🤖 AI/LLMs, 🏗️ Microservices, 🔐 Keycloak
- 🎯 Problem Solving, 🤝 Team Collaboration, 🔓 Open Source

### Updating Experience

1. Edit `components/Experience.tsx`
2. Modify `experiences` array with new position
3. Or update education section

### Changing Colors

1. Edit `tailwind.config.ts` (lines 8-12)
2. Primary: `#0F172A`, Accent: `#06B6D4`, Accent2: `#8B5CF6`
3. Restart dev server

### Testing a Single Component

```bash
# Start dev server
npm run dev

# Navigate to http://localhost:3000
# All components render on single page - no separate routes
```

## Known Limitations & Considerations

### By Design
- No authentication (public portfolio)
- No database (static content only)
- No contact form backend (uses mailto: links)
- No analytics (privacy-first)
- Dark mode only (no light mode toggle)
- French/English content (hardcoded, not translatable CMS)

### If Adding Backend
1. Create API routes in `app/api/`
2. Keep security headers in vercel.json
3. Implement rate limiting
4. Add environment variables to Vercel dashboard
5. Do NOT commit secrets

## Important Notes

### Critical Headers
- **X-Robots-Tag: index, follow** - Allows Google to index ALL pages
  - Applies to `/(.*)/` (all URLs)
  - If this is removed or set to "noindex", Google won't index
  - This was the reason for initial indexing failure

### Git History
- `.gitignore` excludes:
  - `.claude/` (local config)
  - `CLAUDE.md` (wait, this should be committed!)
  - `*.pdf` (CV files)
  - `.env` files (never commit secrets)

### Performance
- Next.js handles code splitting automatically
- Tailwind purges unused CSS
- Vercel CDN serves globally
- Images optimized via Next.js Image component

## Maintenance

### Monthly
- Check Lighthouse scores: https://pagespeed.web.dev/
- Monitor Google Search Console for crawl errors
- Review security advisories

### Quarterly
- Update dependencies: `npm update`
- Check for new certification or projects to add
- Review security audit

### Annually
- Renew HSTS preload if needed
- Review and update SEO strategy
- Full security audit

## Testing

### Manual Testing
```bash
npm run dev
# Visit http://localhost:3000
# Test all sections
# Test mobile view (DevTools)
# Test links to external sites
# Verify animations smooth
```

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

### Build Testing
```bash
npm run build
npm start  # Test production build
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| HMR not working | Restart dev server: `npm run dev` |
| Build fails | Clear `.next/`: `rm -rf .next && npm run build` |
| Styles not applied | Ensure Tailwind classes match config (no custom strings) |
| Type errors | Run `npm run type-check` to see all TS issues |
| Google not indexing | Check X-Robots-Tag header (should be "index, follow") |

## References

- [Next.js 15 Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [React 19 Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Important Files to Know

- `vercel.json` - Deployment config (includes security headers)
- `components/StructuredData.tsx` - JSON-LD for SEO
- `public/robots.txt` - Crawler instructions
- `public/sitemap.xml` - All pages for Google
- `next.config.js` - Next.js configuration
- `tailwind.config.ts` - Color theme and animations

## What to Do Next

1. **If continuing development:**
   - Review this CLAUDE.md fully
   - Check git log for recent changes
   - Run `npm install && npm run dev` to start

2. **If optimizing further:**
   - Read `SEO_OPTIMIZATION.md` for detailed SEO strategy
   - Review `SECURITY_AUDIT.md` for security details
   - Check Google Search Console for indexation status

3. **If deploying changes:**
   - Run `npm run type-check && npm run lint`
   - Test locally: `npm run build && npm start`
   - Commit with clear message
   - Push to main (auto-deploys via Vercel)

## Recent Updates (September 19, 2026)

- ✨ Added Open Source Contributions section (4 major projects)
- 📧 Integrated Web3Forms contact form
- 🎯 Implemented Intersection Observer for active navigation
- 🔒 Added custom "AC" favicon with gradient
- 🌐 Enhanced Navbar with auto-hide on privacy page
- 🔐 Completed comprehensive security audit (98/100)
- 📝 Updated all documentation

---

**Last Updated:** September 19, 2026
**Status:** ✅ Production-ready, fully optimized, secure (98/100), SEO-friendly
**Security Score:** 98/100
**Maintained by:** Amor Chhibi + Claude Code
