# Amor Chhibi - Portfolio Website

Un portfolio moderne et artistique pour showcase des compétences et expériences de développeur senior Java/Spring Boot et technical leader.

## 🚀 Stack Technologique

- **Framework:** Next.js 15 + React 19
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Language:** TypeScript
- **State Management:** Zustand
- **Deployment:** Vercel, Netlify, ou Docker

## ✨ Caractéristiques

- ✅ Design moderne avec glassmorphism et gradients
- ✅ Animations fluides et interactives
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Sections: Hero, About, Skills, Experience, Projects, Contact
- ✅ Intégration GitHub (liens vers projets)
- ✅ Form de contact fonctionnel
- ✅ Mode sombre optimisé
- ✅ Performance optimisée (Lighthouse)
- ✅ SEO-friendly

## 📦 Installation

### Prérequis
- Node.js 18+
- npm ou yarn ou pnpm

### Étapes

```bash
# Cloner le repository
git clone https://github.com/achhibi/portfolio.git
cd portfolio

# Installer les dépendances
npm install
# ou
yarn install
# ou
pnpm install

# Démarrer le serveur de développement
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) pour voir le site.

## 🔨 Commandes Disponibles

```bash
# Développement
npm run dev          # Démarrer le serveur de développement

# Production
npm run build        # Créer la build pour la production
npm start           # Démarrer le serveur de production

# Quality
npm run lint        # Linter le code avec ESLint
npm run type-check  # Vérifier les types TypeScript
```

## 📁 Structure du Projet

```
portfolio/
├── app/
│   ├── layout.tsx           # Layout racine
│   ├── page.tsx            # Page principale
│   └── globals.css         # Styles globaux
├── components/
│   ├── Navbar.tsx          # Barre de navigation
│   ├── Hero.tsx            # Section hero
│   ├── About.tsx           # Section à propos
│   ├── Skills.tsx          # Section compétences
│   ├── Experience.tsx      # Section expérience
│   ├── Projects.tsx        # Section projets
│   ├── Contact.tsx         # Section contact
│   └── Footer.tsx          # Pied de page
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
└── postcss.config.js
```

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `tailwind.config.ts`:
- `primary`: #0F172A (arrière-plan principal)
- `accent`: #06B6D4 (cyan)
- `accent2`: #8B5CF6 (violet)

Modifiez ces valeurs pour adapter le design à votre marque.

### Contenu
Tous les contentsont dans les composants individuels. Modifiez directement les fichiers pour:
- Changer la bio et les descriptions
- Ajouter/retirer des compétences
- Mettre à jour l'expérience
- Ajouter de nouveaux projets

### Informations Personnelles
Pour me contacter, utilisez:
- GitHub: `https://github.com/achhibi`
- LinkedIn: `https://www.linkedin.com/in/chhibiamor/`
- Portfolio: Formulaire de contact sur le site

## 📤 Déploiement

### Vercel (Recommandé)

```bash
# Installation de Vercel CLI
npm i -g vercel

# Déployer
vercel
```

Ou connectez votre repository GitHub directement sur [Vercel.com](https://vercel.com).

### Netlify

```bash
# Installation de Netlify CLI
npm i -g netlify-cli

# Déployer
netlify deploy --prod --dir=.next
```

### Docker

```bash
# Build
docker build -t portfolio .

# Run
docker run -p 3000:3000 portfolio
```

### Domaine Personnalisé

Une fois déployé, connectez votre domaine personnalisé dans:
- Vercel: Dashboard > Settings > Domains
- Netlify: Site settings > Custom domain

## 📊 Performance

- **Lighthouse Score:** 95+
- **Core Web Vitals:** Optimisé
- **Image Optimization:** Next.js Image
- **Code Splitting:** Automatique

## 🔒 Sécurité

- CSP (Content Security Policy)
- CORS configuré
- Validation des formulaires
- Protection contre les attaques courantes

## 📝 Licence

MIT License - Libre d'utilisation

## 📞 Contact

Pour toute question ou suggestion, visitez le portfolio:
- LinkedIn: https://www.linkedin.com/in/chhibiamor/
- GitHub: https://github.com/achhibi
- Portfolio: https://portfolio-achhibi.vercel.app/

## 🎯 Roadmap

- [ ] Blog section
- [ ] Dark/Light mode toggle (actuellement en mode sombre)
- [ ] Téléchargement CV en PDF
- [ ] Animation de scroll améliorée
- [ ] Intégration avec CMS (Contentful, Strapi)
- [ ] Traduction multilingue (FR/EN)

---

Fait avec ❤️ par Amor Chhibi
