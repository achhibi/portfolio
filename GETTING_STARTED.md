# 🎯 Démarrage Rapide

Voici comment démarrer avec votre portfolio en 5 minutes!

## 1️⃣ Installation

```bash
# Cloner le repository (si vous l'avez en remote)
git clone https://github.com/achhibi/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Ou avec yarn
yarn install

# Ou avec pnpm
pnpm install
```

## 2️⃣ Lancer en Développement

```bash
npm run dev
```

Ouvrir **http://localhost:3000** dans votre navigateur.

Le site se rechargera automatiquement quand vous modifiez les fichiers (Hot Module Replacement).

## 3️⃣ Explorer le Code

```
portfolio/
├── app/page.tsx              ← Page principale (importe les sections)
├── components/               ← Tous les composants visuels
│   ├── Hero.tsx             ← Section hero/landing
│   ├── About.tsx            ← À propos + stats
│   ├── Skills.tsx           ← Compétences + certifications
│   ├── Experience.tsx       ← Expérience professionnelle
│   ├── Projects.tsx         ← Projets GitHub
│   ├── Contact.tsx          ← Formulaire contact
│   ├── Navbar.tsx           ← Navigation
│   └── Footer.tsx           ← Pied de page
└── app/globals.css          ← Styles globaux
```

## 4️⃣ Personnaliser le Contenu

### Modifier la section "À propos"
Ouvrir `components/About.tsx`:
- Changer la biographie dans la section `<p>`
- Ajouter/retirer des statistiques dans le grid

### Ajouter/modifier les compétences
Ouvrir `components/Skills.tsx`:
- Modifier le tableau `skillCategories`
- Ajouter une nouvelle catégorie ou compétence

### Mettre à jour l'expérience
Ouvrir `components/Experience.tsx`:
- Modifier le tableau `experiences`
- Ajouter une nouvelle position

### Ajouter des projets
Ouvrir `components/Projects.tsx`:
- Modifier le tableau `projects`
- Ajouter les liens GitHub réels

### Changer les couleurs
Ouvrir `tailwind.config.ts`:
```typescript
colors: {
  primary: '#0F172A',    // Couleur de fond
  accent: '#06B6D4',     // Cyan
  accent2: '#8B5CF6',    // Violet
}
```

## 5️⃣ Vérifier la Qualité du Code

```bash
# Linter
npm run lint

# Vérifier les types TypeScript
npm run type-check

# Les deux
npm run lint && npm run type-check
```

## 6️⃣ Builder pour la Production

```bash
npm run build

# Tester localement en production
npm start
```

Votre site sera prêt à être déployé dans le dossier `.next`.

## 🚀 Déployer

### Option Simple: Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Ou connecter directement sur https://vercel.com
# → Import Project → Sélectionner votre repo GitHub
```

### Autres Options
- **Netlify:** https://netlify.com (connect GitHub)
- **AWS Amplify:** https://aws.amazon.com/amplify
- **Docker:** `docker build -t portfolio .`

Voir [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) pour plus de détails.

## 📝 Structure des Composants

Tous les composants suivent ce pattern:

```typescript
'use client'  // Client component pour les animations

import { motion } from 'framer-motion'

export default function MySection() {
  return (
    <section id="my-section" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Contenu avec Tailwind */}
      </motion.div>
    </section>
  )
}
```

## 🎨 Tips de Personnalisation

### Ajouter une image
```typescript
// Dans un composant
<img 
  src="/images/monimage.jpg" 
  alt="Description"
  className="w-full rounded-lg"
/>

// Ou avec Next.js Image (optimisé)
import Image from 'next/image'
<Image 
  src="/images/monimage.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

### Modifier les animations
Dans n'importe quel composant Framer Motion:
```typescript
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}      // État initial
  whileInView={{ opacity: 1, scale: 1 }}    // Quand visible
  transition={{ duration: 0.8, delay: 0.2 }} // Timing
>
  Contenu animé
</motion.div>
```

### Ajouter des liens
```typescript
// Lien interne (ancre)
<a href="#skills">Mes compétences</a>

// Lien externe
<a href="https://github.com" target="_blank" rel="noopener noreferrer">
  GitHub
</a>

// Bouton
<button onClick={() => alert('Coucou!')} className="...">
  Cliquer
</button>
```

## 🐛 Déboguer

### Dev Tools
Ouvrir Chrome DevTools (`F12`):
- **Console:** voir les logs/erreurs
- **Network:** vérifier les requêtes
- **Lighthouse:** auditer la performance
- **React DevTools:** explorer les composants (extension)

### Common Issues

| Problème | Solution |
|----------|----------|
| Les changements ne s'affichent pas | Actualiser la page (Ctrl+R) ou redémarrer le serveur |
| Build fails | `rm -rf .next && npm run build` |
| Styles bizarres | Vérifier les classes Tailwind et faire `npm install` |
| TypeScript errors | Regarder terminal, corriger les erreurs, sauvegarder |

## 📚 Documentation

- **Next.js:** https://nextjs.org/docs
- **React:** https://react.dev
- **Tailwind:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/

## ✅ Checklist Avant Déploiement

- [ ] Code poussé sur GitHub
- [ ] `npm run lint` passe
- [ ] `npm run build` réussit
- [ ] Site testé localement (`npm start`)
- [ ] Tous les liens cliquables marchent
- [ ] Formulaire contact fonctionne
- [ ] Mobile-responsive (testée sur téléphone)

## 💬 Questions Fréquentes

**Q: Comment ajouter un blog?**
A: Créer un dossier `app/blog` avec des fichiers `.mdx`.

**Q: Puis-je ajouter une base de données?**
A: Oui! Ajouter une API route dans `app/api/` et utiliser Prisma/Supabase.

**Q: Comment ajouter un formulaire de contact backend?**
A: Ajouter une route API dans `app/api/contact/route.ts` qui envoie un email.

**Q: Peut-on ajouter un mode sombre?**
A: Oui! Ajouter un toggle dans la Navbar et utiliser `dark:` classes Tailwind.

---

**Prêt? Lancez `npm run dev` et créez votre portfolio! 🎉**

Pour toute question: [CLAUDE.md](./CLAUDE.md) ou la documentation des outils ci-dessus.
