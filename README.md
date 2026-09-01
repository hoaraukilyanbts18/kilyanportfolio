# Portfolio de Kilyan Hoarau

## Structure des fichiers

```
portfolio/
├── index.html              → page d'accueil
├── cv.html                 → CV en ligne
├── lettre.html              → lettre de motivation en ligne
├── veille.html              → veille technologique (IA & développement)
├── assets/
│   ├── css/style.css        → tous les styles du site (une seule fois)
│   └── js/
│       ├── main.js          → menu mobile
│       └── veille-data.js   → LA LISTE DES ACTUALITÉS DE VEILLE
└── fichier/
    ├── cv.pdf                → dépose ici ton CV en PDF
    └── lettre-motivation.pdf → dépose ici ta lettre en PDF
```

Chaque page a son propre fichier `.html`, sans espace dans les noms
(les espaces dans les noms de fichiers posent des problèmes de liens
sur GitHub Pages — c'était le cas de l'ancien "lettre de motivation.html").

## Comment modifier chaque partie

- **Changer le texte de l'accueil, du CV ou de la lettre** : ouvre le
  fichier `.html` correspondant, le texte est directement dedans.
- **Mettre à jour la veille technologique** : n'ouvre pas `veille.html`.
  Ouvre `assets/js/veille-data.js` : c'est une simple liste d'actualités.
  Copie un bloc `{ ... }` pour en ajouter une, supprime-en un pour en
  retirer une. La page se met à jour toute seule.
- **Changer les couleurs ou les polices** : tout est centralisé en haut
  de `assets/css/style.css`, dans les variables `:root { --bg: ...; }`.
- **Remplacer le CV / la lettre en PDF** : remplace les fichiers dans
  `fichier/` en gardant exactement les noms `cv.pdf` et
  `lettre-motivation.pdf` (ou renomme-les et mets à jour les liens
  `href="fichier/..."` dans `index.html`, `cv.html` et `lettre.html`).

## À propos de la veille technologique

Le site étant hébergé sur GitHub Pages (un hébergement de fichiers
statiques, sans serveur), il ne peut pas aller chercher des actualités
"en temps réel" tout seul comme le prétendait l'ancienne page. La liste
dans `veille-data.js` est donc à relire et mettre à jour à la main de
temps en temps (par exemple une fois par semaine) — c'est en fait ce
qu'on attend d'une vraie veille technologique en BTS SIO : une sélection
et une analyse personnelle des sources, pas un flux automatique.
