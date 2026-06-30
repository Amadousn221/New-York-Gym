# Clone Target — Dashboard NY Gym

## Projet
Next.js 16 + Tailwind v4 + TypeScript strict  
Design system : violet `rgb(86, 20, 150)` / jaune `rgb(255, 230, 0)`  
Fonts : Barlow (corps), Barlow Condensed (titres)  
Dossier CRM : `src/app/crm/`  
Layout shell déjà existant : `src/app/crm/layout.tsx` (sidebar + topbar — NE PAS RECLONER)

## Règles globales pour tous les clones

- NE PAS inclure sidebar, topbar, header nav global — déjà dans layout.tsx
- Contenu uniquement : page header (titre + breadcrumb) + contenu principal
- Renommer EN → FR (voir tableau ci-dessous)
- Branding : rouge `#E41F07` → violet `rgb(86, 20, 150)`
- Route cible indiquée dans chaque section ci-dessous
- Données mockées acceptées pour l'instant (arrays typés TypeScript)

## Renommage EN → FR

| Anglais | Français |
|---|---|
| Contacts | Membres |
| Payments | Paiements |
| Deals | Adhésions |
| Leads | Prospects / Leads |
| Membership Plans | Plans d'abonnement |
| Membership Addons | Modules complémentaires |
| Membership Transactions | Transactions |
| Companies | (NE PAS CLONER) |
| Campaigns | (NE PAS CLONER) |
| Projects | (NE PAS CLONER) |
| Completed | Complété |
| Cancel / Cancelled | Annulé |
| Pending | En attente |
| Active | Actif |
| Inactive | Inactif |
| Add | Ajouter |
| Edit | Modifier |
| Delete | Supprimer |
| Search | Rechercher |
| Filter | Filtrer |

---

## Pages à cloner (dans cet ordre)

### 1. Dashboard — Vue d'ensemble
**URL :** https://crms.dreamstechnologies.com/react/dashboard/deals-dashboard  
**Route cible :** `src/app/crm/dashboard/page.tsx`  
**Scope :**
- 4 KPI cards : Total membres, Revenus ce mois, Taux de renouvellement, Nouveaux membres
- Graphique barres : revenus sur 6 mois
- Tableau des 5 derniers paiements (condensé)
- Widgets statuts (Actifs / Expirés / En attente)

### 2. Leads
**URL :** https://crms.dreamstechnologies.com/react/dashboard/leads-dashboard  
**Route cible :** `src/app/crm/leads/page.tsx`  
**Scope :**
- 5 stat cards : Nouveaux, Contactés, Qualifiés, Convertis, Perdus
- Tableau leads récents avec colonnes Nom, Source, Statut (badge), Date, Action
- Filtres par source et statut
- Bouton "+ Ajouter un lead"

### 3. Paiements (REMPLACER l'existant)
**URL :** https://crms.dreamstechnologies.com/react/crm/payments  
**Route cible :** `src/app/crm/paiements/page.tsx` (remplacer)  
**Scope :**
- Table : Date, Membre, Type, Montant, Méthode, Statut
- Date range picker en haut
- Filtres : Complété / Annulé / En attente
- Action menu (3 points) : Voir détails, Modifier, Supprimer
- Pagination (10/25/50/100 entries)
- Bouton "Ajouter un paiement"
- Total Amount Due en résumé

### 4. Membres — Grid (REMPLACER l'existant)
**URL :** https://crms.dreamstechnologies.com/react/crm/contact-grid  
**Route cible :** `src/app/crm/membres/page.tsx` (remplacer)  
**Scope :**
- Vue GRID de cards (photo/avatar, nom, email, téléphone, badge statut)
- Barre de recherche + filtres statut
- Toggle vue Grid / Liste
- Badge : Actif (vert), Inactif (gris), En attente (orange)
- Pagination
- Action rapide par card (Modifier, Voir, Supprimer)

### 5. Plans d'abonnement
**URL :** https://crms.dreamstechnologies.com/react/membership-plans  
**Route cible :** `src/app/crm/abonnements/plans/page.tsx`  
**Scope :**
- Toggle Mensuel / Annuel
- 3 cards de plans : Classique (15$/mois), NY Gym Black Card® (25$/mois — badge "Populaire"), Entreprise (50$/mois)
- Features list avec ✓ inclus / barré non inclus
- Compteur "X plans actifs" en haut
- Bouton "Sélectionner" par plan

### 6. Modules complémentaires (Addons)
**URL :** https://crms.dreamstechnologies.com/react/membership-addons  
**Route cible :** `src/app/crm/abonnements/addons/page.tsx`  
**Scope :**
- Grid de cards addons : nom, description, prix/mois, toggle actif/inactif
- Résumé : X modules actifs — Y $/mois total
- Bouton "+ Nouveau module"

### 7. Transactions d'abonnement
**URL :** https://crms.dreamstechnologies.com/react/membership-transactions  
**Route cible :** `src/app/crm/abonnements/transactions/page.tsx`  
**Scope :**
- 3 cards résumé en haut : Total Crédité, Total Débité, Solde
- Filtres : type (Rechargement/Achat/Remboursement), statut, date range
- Table : ID, Type (badge +/-), Montant, Date, Méthode paiement, Statut
- Statuts : Complété (vert), Annulé (rouge)
- Pagination

---

## NE PAS CLONER

Companies, Campaigns, Projects, Tasks, Pipeline, Proposals, Contracts,
Estimations, Invoices, Analytics, Reports, Settings, Auth pages.
