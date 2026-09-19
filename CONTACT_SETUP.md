# Configuration du Formulaire de Contact

## Setup Web3Forms (Gratuit, 5 minutes)

### 1. Créer un compte Web3Forms
1. Va sur **https://web3forms.com**
2. Clique sur "Sign Up" (gratuit)
3. Crée un compte avec ton email personnel

### 2. Créer un nouveau formulaire
1. Dans le dashboard Web3Forms, clique sur "New Form"
2. Donne un nom: "Portfolio Contact Form"
3. Configure l'email de réception (où tu veux recevoir les messages)
4. Clique sur "Create"

### 3. Obtenir ta clé d'accès
1. Tu verras une **Access Key** (ressemble à: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)
2. Copie cette clé

### 4. Configurer localement pour tester

**Option A: Variable d'environnement (recommandé)**

1. Dans le dossier portfolio, crée un fichier `.env.local`:
```bash
NEXT_PUBLIC_WEB3FORMS_KEY=ta_clé_web3forms_ici
```

2. Sauvegarde le fichier
3. Redémarre le serveur: `npm run dev`
4. Teste le formulaire sur http://localhost:3000#contact

**Option B: Mettre la clé directement dans le code (non recommandé)**

Modifie `components/Contact.tsx` et remplace:
```javascript
access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
```
par:
```javascript
access_key: 'ta_clé_web3forms_ici',
```

### 5. Tester le formulaire

1. Va sur http://localhost:3000
2. Scroll jusqu'à la section "Entrez en contact"
3. Remplis le formulaire avec des données de test
4. Clique sur "Envoyer le message"
5. Vérifie que tu reçois l'email dans ta boîte mail

### ✅ Points importants

- ✅ Ta clé Web3Forms n'expose PAS ton adresse email réelle
- ✅ Les messages sont envoyés via Web3Forms (service gratuit et sécurisé)
- ✅ Le `.env.local` n'est PAS uploadé sur GitHub (dans .gitignore)
- ✅ La clé est "publique" mais sécurisée par Web3Forms (impossible d'accéder aux emails depuis le code)
- ✅ Aucune donnée sensible dans le code source

### 🚀 Quand tu es prêt à push

1. Vérifie que `.env.local` n'est PAS dans git:
```bash
git status
```

2. Commit et push:
```bash
git add components/Contact.tsx .env.example
git commit -m "feat: Add contact form with Web3Forms"
git push origin main
```

### ❓ Besoin d'aide?

- Web3Forms Docs: https://docs.web3forms.com
- Pricing: Gratuit jusqu'à 250 soumissions/mois
