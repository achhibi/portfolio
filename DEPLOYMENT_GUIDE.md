# 🚀 Guide de Déploiement - Portfolio Amor Chhibi

## Vue d'ensemble

Ce guide explique comment déployer votre portfolio sur différentes plateformes cloud.

## Option 1: Vercel (Recommandé) ⭐

**Avantages:**
- Déploiement le plus simple (NextJS créateur officiel de Vercel)
- CDN global automatique
- Déploiement continu via GitHub
- Free tier généreux
- Analytics inclus

### Étapes:

1. **Créer un compte Vercel**
   - Aller sur https://vercel.com/signup
   - S'enregistrer avec GitHub

2. **Connecter votre repository**
   - Vercel > Import Project
   - Sélectionner votre repo GitHub
   - Configuration auto-détectée (Next.js)

3. **Déployer**
   - Cliquer "Deploy"
   - Vercel build et déploie automatiquement
   - Votre site est live en ~2 min

4. **Ajouter votre domaine**
   - Vercel Dashboard > Settings > Domains
   - Ajouter votre domaine personnalisé
   - Suivre les instructions DNS

**Avantages supplémentaires:**
- Déploiements automatiques lors de chaque push sur `main`
- Preview deployments pour les branches
- Environment variables via dashboard
- Serverless functions (si besoin futur)

---

## Option 2: Netlify

**Avantages:**
- Très simple à utiliser
- Déploiement continu avec GitHub
- Free tier complet
- Form handling built-in

### Étapes:

1. **Créer un compte Netlify**
   - Aller sur https://app.netlify.com
   - Sign up with GitHub

2. **Connecter votre repo**
   - New site from Git > GitHub
   - Sélectionner votre repository

3. **Configuration Build**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

4. **Déployer**
   - Cliquer "Deploy site"
   - Netlify build et déploie
   - URL automatique générée

5. **Ajouter domaine personnalisé**
   - Site settings > Domain management
   - Ajouter votre domaine
   - Mettre à jour les DNS

---

## Option 3: Docker + Cloud Run (Google Cloud)

**Avantages:**
- Production-grade infrastructure
- Scalabilité automatique
- Pay-as-you-go pricing
- Flexible et puissant

### Étapes:

1. **Créer un compte Google Cloud**
   - https://cloud.google.com

2. **Installer Google Cloud CLI**
   ```bash
   # Windows
   choco install google-cloud-sdk
   
   # Mac
   brew install google-cloud-sdk
   ```

3. **Authentification**
   ```bash
   gcloud auth login
   gcloud config set project YOUR_PROJECT_ID
   ```

4. **Build et Déployer**
   ```bash
   # Build l'image Docker
   docker build -t gcr.io/YOUR_PROJECT_ID/portfolio:latest .
   
   # Push vers Google Container Registry
   docker push gcr.io/YOUR_PROJECT_ID/portfolio:latest
   
   # Deploy sur Cloud Run
   gcloud run deploy portfolio \
     --image gcr.io/YOUR_PROJECT_ID/portfolio:latest \
     --platform managed \
     --region europe-west1 \
     --allow-unauthenticated
   ```

5. **Ajouter domaine personnalisé**
   - Cloud Run > Services > Manage custom domains
   - Ajouter votre domaine
   - Configurer les records DNS

---

## Option 4: AWS + Amplify

**Avantages:**
- Intégration Git continue
- Global CDN (CloudFront)
- Scalabilité AWS
- Free tier pour un site personnel

### Étapes:

1. **Créer un compte AWS**
   - https://aws.amazon.com

2. **AWS Amplify**
   - Aller sur AWS Amplify console
   - Connect your repository
   - Select GitHub

3. **Configuration Build**
   - Build settings auto-détectés pour Next.js
   - Cliquer "Save and deploy"

4. **Déploiement Automatique**
   - Chaque push déclenche un build
   - Amplify s'en charge automatiquement

5. **Domaine Personnalisé**
   - Amplify > Domain management
   - Connecter votre domaine Route53 ou externe

---

## Option 5: Heroku (Déprécié mais possible)

**Note:** Heroku a fermé son free tier en novembre 2022.
Pour Heroku, vous devrez payer à partir de maintenant.

---

## Comparaison Rapide

| Plateforme | Facilité | Prix | Performance | Recommandé |
|-----------|----------|------|-------------|-----------|
| Vercel | ⭐⭐⭐⭐⭐ | Gratuit | Excellent | ✅ OUI |
| Netlify | ⭐⭐⭐⭐ | Gratuit | Très bon | ✅ OUI |
| Cloud Run | ⭐⭐⭐ | $0.20/M | Excellent | Si budget |
| AWS Amplify | ⭐⭐⭐ | Gratuit | Excellent | ✅ OUI |

---

## Configuration du Domaine Personnalisé

### Acheter un domaine

Options recommandées:
- **Namecheap** (https://namecheap.com) - Bon marché
- **Google Domains** (https://domains.google.com) - Simple
- **OVH** (https://ovh.com) - Français, fiable

### Configurer les DNS

Exemple pour Vercel:
1. Chez votre registrar, aller à DNS settings
2. Ajouter les records NS que Vercel fournit
3. Attendre propagation (24-48h)

---

## Checklist Avant Déploiement

- [ ] Code poussé sur GitHub
- [ ] Variables d'environment configurées (si besoin)
- [ ] `npm run build` fonctionne localement
- [ ] `npm run lint` passe sans erreurs
- [ ] Tests manuels faits (tous les liens, formulaires)
- [ ] Lighthouse score vérifié (90+)
- [ ] Domaine personnalisé choisi

---

## Troubleshooting

### Build échoue sur Vercel
```bash
# Nettoyer et rebuild localement
rm -rf .next node_modules
npm install
npm run build
```

### Site 404 après déploiement
- Vérifier que `outputDirectory` est `.next`
- Vérifier que `buildCommand` est `npm run build`
- Attendre propagation DNS (5-60 min)

### Domaine n'affiche pas le site
- Vérifier DNS records (peut prendre 24-48h)
- Vérifier SSL certificate (auto-généré généralement)
- Vérifier redirect HTTP → HTTPS

### Performance lente
- Vérifier Lighthouse
- Vérifier Network dans DevTools
- Vérifier si CDN actif

---

## Monitoring Post-Déploiement

### Outils recommandés:
1. **Vercel/Netlify Analytics** - Inclus gratuitement
2. **Google Analytics** - Ajouter tracking code
3. **Sentry** - Error monitoring
4. **Uptime Robot** - Monitoring d'uptime

---

## Mise à Jour du Site

Après chaque modification:

```bash
# Commit et push
git add .
git commit -m "Update: description"
git push origin main

# Vercel/Netlify se mettront à jour automatiquement
# Attend ~2-5 min pour propagation globale
```

---

## Support

Pour plus d'aide:
- **Vercel:** https://vercel.com/docs
- **Netlify:** https://docs.netlify.com
- **Google Cloud:** https://cloud.google.com/docs
- **AWS:** https://docs.aws.amazon.com

---

Bon déploiement! 🎉
