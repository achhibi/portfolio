# Security Policy

## Overview

This portfolio website is a static site with no backend, database, or sensitive data processing. Security is maintained through best practices and configuration.

## Security Features

### Infrastructure
- **HTTPS/TLS**: All connections encrypted
- **Content Delivery**: Vercel CDN with built-in DDoS protection
- **No Server-side Code**: Static site eliminates server vulnerabilities

### Headers & Protection
- **Content Security Policy (CSP)**: Strict policy for script execution
- **X-Frame-Options**: SAMEORIGIN to prevent clickjacking
- **X-Content-Type-Options**: nosniff to prevent MIME sniffing
- **Strict-Transport-Security**: Forces HTTPS connections
- **Referrer-Policy**: Controls referrer information
- **Permissions-Policy**: Disables unnecessary APIs (camera, microphone, geolocation)

### Code Security
- **Dependency Management**: Minimal dependencies, all from npm registry
- **Dependencies**:
  - `next@^15.0.0` - Latest version, actively maintained
  - `react@^19.0.0` - Latest version, actively maintained
  - `framer-motion@^11.0.0` - Stable animation library
  - `tailwindcss@^3.4.0` - CSS framework
  - `zustand@^4.4.0` - State management (optional, not used currently)

### Data & Privacy
- **No Data Collection**: No cookies, analytics, or tracking
- **No Forms**: Direct links to external services
- **No Sensitive Data**: All public contact information is intentionally shared
- **CV Excluded**: Local CV file excluded from git repository

### File Security
- **`.gitignore`**: Sensitive files excluded from version control
  - `.claude/` - Local configuration
  - `CLAUDE.md` - Development documentation
  - `*.pdf` - Local CV files
  - `.env` files - Environment variables

## Reporting Security Issues

### Responsible Disclosure
If you discover a security vulnerability, please report it responsibly:

1. **Do NOT** create public GitHub issues
2. Use **GitHub Security Advisory** feature:
   - Go to: https://github.com/achhibi/portfolio/security/advisories
   - Click "Report a vulnerability"
   - Provide details confidentially

3. **Email Method**:
   - Contact via GitHub private message
   - Link from profile: https://github.com/achhibi

### What to Include
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested remediation (if any)

### Response Time
- Initial response: 24-48 hours
- Resolution timeline: Depends on severity

## Supported Versions

| Version | Supported |
|---------|-----------|
| Latest  | ✅ Yes    |
| Older   | ⚠️ No     |

Always keep your browser updated for latest security patches.

## Security Best Practices

### For Users
1. Use latest browser version
2. Keep JavaScript enabled for full functionality
3. Clear browser cache if experiencing issues
4. Report suspicious behavior

### For Developers
1. Dependencies are pinned to compatible versions
2. Regular updates checked via dependabot (if enabled)
3. No credentials in code or git history
4. HTTPS enforced for all connections

## External Dependencies Security

### Direct Dependencies
- **next**: Web framework - https://nextjs.org/security
- **react**: UI library - https://react.dev/
- **framer-motion**: Animation - https://www.framer.com/motion/
- **tailwindcss**: Styling - https://tailwindcss.com/
- **zustand**: State (optional) - https://github.com/pmndrs/zustand

All dependencies:
- ✅ From official npm registry
- ✅ Regularly updated
- ✅ No known vulnerabilities
- ✅ Actively maintained

### Development Only
- **typescript**: Type checking
- **autoprefixer**: CSS processing
- **postcss**: CSS transformation

## Compliance

### Standards
- ✅ OWASP Top 10 considerations
- ✅ GDPR compliant (no data collection)
- ✅ No third-party tracking
- ✅ Accessibility (WCAG 2.1)

### Tools
- Vercel's built-in security features
- Next.js security best practices
- Tailwind CSS secure defaults

## Changelog

### 2026-09-18
- Initial security policy
- Headers hardening
- Privacy page added
- Security.txt file
- Removed exposed location data

## Contact

- **GitHub**: https://github.com/achhibi
- **LinkedIn**: https://www.linkedin.com/in/chhibiamor/
- **Stack Overflow**: https://stackoverflow.com/users/2867361/chhibi-amor

---

Last Updated: 2026-09-18
