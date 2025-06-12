---
title: Déposer ses données sur Cartes.gouv.fr
tags:
    - Entrepôt
    - Stockage
    - Dépôt
eleventyNavigation:
    key: Déposer ses données sur Cartes.gouv.fr
    parent: Publier des données via Cartes.gouv.fr
    order: 1
    nav: producteur
pictogram: document/document-add.svg
---

## Créer une fiche de données

Dans l’espace **« Découverte »** ou dans votre entrepôt, cliquez sur **« Créer une fiche de données »**. Cela ouvrira une page associée, dans laquelle vous pourrez définir le nom de votre fiche de données.
![Image décrivant la première étape de création d’une fiche de données](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/deposer-donnees-sur-cartes-gouv/01_creer-fiche.png){.fr-responsive-img .frx-border-img .frx-img-contained}

:::info
Prenez soin de définir un titre pertinent. En effet dans l’offre découverte _bac à sable_, cette information a peu d’importance car elle ne sera pas visible dans le catalogue, toutefois en mode « Essentielle » (c’est-à-dire si vous travaillez dans votre propre espace de travail) ce titre est celui qui apparaitra dans le catalogue général de cartes.gouv.

Prenez ainsi l’habitude de renseigner un titre informatif et évocateur, tous les caractères sont autorisés ainsi que les espaces.
:::

Téléversez votre fichier en cliquant sur **« Parcourir »**. Le format de fichier autorisé est _Geopackage_ (ou archive zip contenant un _Geopackage_). La projection de votre donnée est détectée automatiquement.
Avant de cliquer sur **« Déposer votre fichier »**, vous pouvez, si besoin, modifier deux champs identifiés dans votre donnée : le **« Nom technique de votre donnée »** et la **« Projection de vos données »** (projection des données d’origine) :
![Image décrivant les informations complémentaires à renseigner lors de la création d’une fiche de données](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/deposer-donnees-sur-cartes-gouv/02_creer-fiche.png){.fr-responsive-img .frx-border-img .frx-img-contained}
Le processus **« Vos données vecteur sont en cours de dépôt »** se met en route. Voici en quatre étapes son fonctionnement côté API :

- Chargement du fichier
- Vérifications standard
- Vérification vecteur
- Intégration en base de données

![Image décrivant le processus de dépôt de la donnée](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/deposer-donnees-sur-cartes-gouv/03_depot.png){.fr-responsive-img .frx-border-img .frx-img-contained}

:::info
Ce processus peut prendre quelques minutes. Des travaux d’amélioration des performances sont en cours.
:::

La fiche de données est désormais stockée et classée en **« Non publié »**, dans l’onglet **« Données Découvertes »**.
![Image décrivant la fiche de données ainsi créée](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/deposer-donnees-sur-cartes-gouv/04_fiche-donnees.png){.fr-responsive-img .frx-border-img .frx-img-contained}
À partir de ce moment, si vous quittez Cartes.gouv.fr, vous pourrez éventuellement revenir à votre fiche de données et cliquer sur **« reprendre l’intégration »**.

Vos données sont stockées avec d’autres données de test dans le *bac à sable* :
![Données publiées](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/deposer-donnees-sur-cartes-gouv/05_liste.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Vos données sont maintenant stockées sur la Géoplateforme ! Rendez-vous à la page suivante pour créer des services à partir de ces données.
