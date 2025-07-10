# 🎸 Wet Leg – Site Officiel & Back‑Office (Projet Étudiant)

Ce projet a été réalisé dans le cadre d’un module de développement web. Il s’agit du site événementiel pour le groupe *Wet Leg* à l’occasion de la sortie de leur album Moisturizer, incluant une interface *front* pour les fans et un back‑office *admin* pour la gestion des dates de tournée.

---

## 🔗 Lien GitHub

https://github.com/liz244/wetleg-moisturizer.git

## 🧩 Choix Technologiques

### 🖥 Site Web (Front)

- *React.js + Vite* – pour un démarrage rapide et des performances optimisées
- *Styled‑Components* – pour un style modulaire scoped dans chaque composant
- *React Router DOM* – pour la navigation entre pages (Home, Tournée, Mentions légales, etc.)
- *Firebase Firestore* – pour stocker les dates de tournée en base NoSQL
- *React Icons* – pour styliser les icônes réseaux sociaux
- *Responsive Design (mobile / desktop)* – entièrement géré via Media Queries

### ⚙ Admin (Back‑Office)

- *React.js (CRA)* – structure simple et rapide à maintenir
- *Firebase Firestore* – connexion en temps réel avec le site principal
- *Bootstrap & Styled‑Components* – pour une interface claire et fonctionnelle
- **Routing protégé (/admin)** – espace réservé à l'équipe

---

## 🔐 Sécurité (Back‑Office)

### Sur les formulaires

- Champs requis obligatoires
- Validation locale côté client (ex. champ vide interdit)
- Sélection du statut : Disponible, Épuisé (Sold Out)

### Sur l’application

- Aucune donnée sensible exposée côté client
- Firebase sécurisé par des règles (rules_version = '2')
- Pages back‑office non visibles dans la navigation publique

---

## 🚀 Déploiement (Admin)

### Prérequis

- Node.js ≥ v16
- npm ≥ v9

### Installation

```bash
git clone https://github.com/liz244/wetleg-moisturizer.git
cd wetleg-admin
npm install
npm start