---
title: Créer une clé d'accès
description: Créez une clé d’accès et configurez son mode d’authentification (BASIC, HASH, OAuth2)
tags:
    - BASIC
    - HASH
    - OAuth2
    - Permission
    - Accès
    - Clé
eleventyNavigation:
    key: Créer une clé d'accès
    parent: Création et intégration des clés cartes.gouv.fr dans un SIG
    order: 2
    nav: guides-utilisateur
summary:
    visible: true
    depth: 2
pictogram: "document/conclusion.svg"
---

## Initier la création de clé et définir les services accessibles 

Dans votre tableau de bord, cliquez sur l’onglet **« Mes clés d’accès »**, puis sélectionnez **« Créer une clé d’accès »** :

![Image décrivant le tableau de bord](/img/guides-utilisateur/creation-des-cles-et-integration-sig/creer-une-cle-d-acces/01_tableau-de-bord.png){.fr-responsive-img .frx-img-contained}

![image décrivant comment créer une nouvelle clé d’accès](/img/guides-utilisateur/creation-des-cles-et-integration-sig/creer-une-cle-d-acces/02_ajouter-une-cle.png){.fr-responsive-img .frx-img-contained}

:::info
Si le bouton est grisé, comme ici, alors cela signifie que vous n’avez aucune permission accordée. Contactez le responsable de la donnée en lui fournissant votre identifiant utilisateur pour qu’il vous accorde une permission.
:::

Dans cette première étape, saisissez un nom explicite dans le champ **« Nom de la clé »**, puis cochez la case correspondant à la ressource privée que vous souhaitez rendre accessible.

![image décrivant la première étape de création de clé](/img/guides-utilisateur/creation-des-cles-et-integration-sig/creer-une-cle-d-acces/03_premiere-etape.png){.fr-responsive-img .frx-img-contained}

---

## Configurer les options de sécurisation

Choisissez le type d’authentification adapté à votre usage parmi les trois protocoles disponibles :

### BASIC

Définissez un **nom d’utilisateur** et un **mot de passe**. Ce type de clé est particulièrement adapté pour un usage dans un **SIG** :

![Image décrivant l’option BASIC](/img/guides-utilisateur/creation-des-cles-et-integration-sig/creer-une-cle-d-acces/04_securisation-basic.png){.fr-responsive-img .frx-img-contained}

### HASH

Une **chaîne de hachage** est générée automatiquement. Elle devra être transmise comme paramètre supplémentaire dans vos requêtes. Ce mode est bien adapté aux **intégrations sur un site web** :

![Image dércivant l’option HASH](/img/guides-utilisateur/creation-des-cles-et-integration-sig/creer-une-cle-d-acces/05_securisation-hash.png){.fr-responsive-img .frx-img-contained}

### OAuth2

:::info
Pour le protocole **OAuth2**, votre SIG ou application doit accepter une **URL de redirection personnalisée** (`redirect_url`). Cette URL est obligatoire pour recevoir le code d’autorisation après l’authentification.
:::

Ce mode utilise votre **compte Géoplateforme**. Une seule clé **OAuth2** est autorisée par compte. Il convient aux usages nécessitant une **authentification forte** (SIG ou outils tiers) :

![Image décrivant l’option OAuth2](/img/guides-utilisateur/creation-des-cles-et-integration-sig/creer-une-cle-d-acces/06_securisation-oauth2.png){.fr-responsive-img .frx-img-contained}

:::callout
Vous avez terminé les étapes obligatoire. Si vous le souhaitez, vous pouvez paramétrer des options supplémentaires de filtrage par IP en suivant les indications page suivante.
:::