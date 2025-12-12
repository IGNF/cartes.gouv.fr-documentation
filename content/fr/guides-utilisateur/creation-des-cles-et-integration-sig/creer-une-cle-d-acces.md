---
title: Créer une clé d'accès
description: Créer une clé d’accès et configurer son mode d’authentification (BASIC, HASH, OAuth2)
tags:
    - BASIC
    - HASH
    - OAuth2
eleventyNavigation:
    key: Créer une clé d'accès
    parent: Création et intégration des clés cartes.gouv.fr dans un SIG
    order: 2
    nav: guides-utilisateur
summary:
    visible: true
    depth: 2
---

Cliquez sur l’onglet **« Mes clés d’accès »**, puis sélectionnez **« Créer une clé d’accès »**.

![Bienvenue](/img/guides-utilisateur/creation-des-cles-et-integration-sig/01_bienvenue.png){.fr-responsive-img .frx-img-contained}

![Mes clés d'accès](/img/guides-utilisateur/creation-des-cles-et-integration-sig/02_mes-cles-dacces.png){.fr-responsive-img .frx-img-contained}


## Étape 1 : Définir les services accessibles (obligatoire)

Dans cette première étape, saisissez un nom explicite dans le champ **« Nom de la clé »**, puis cochez la case correspondant à la ressource privée que vous souhaitez rendre accessible.

![Ajout d'une clé](/img/guides-utilisateur/creation-des-cles-et-integration-sig/03_ajout-dune-cle.png){.fr-responsive-img .frx-img-contained}

## Étape 2 : Configurer les options de sécurisation (obligatoire)

Choisissez le type d’authentification adapté à votre usage parmi les trois protocoles disponibles :

### BASIC

Définissez un **nom d’utilisateur** et un **mot de passe**. Ce type de clé est particulièrement adapté pour un usage dans un **SIG**.

![Sécurisation BASIC](/img/guides-utilisateur/creation-des-cles-et-integration-sig/04_securisation-basic.png){.fr-responsive-img .frx-img-contained}

### HASH

Une **chaîne de hachage** est générée automatiquement. Elle devra être transmise comme paramètre supplémentaire dans vos requêtes. Ce mode est bien adapté aux **intégrations sur un site web**.

![Sécurisation HASH](/img/guides-utilisateur/creation-des-cles-et-integration-sig/05_securisation-hash.png){.fr-responsive-img .frx-img-contained}

### OAuth2

:::info
Pour le protocole **OAuth2**, votre SIG ou application doit accepter une **URL de redirection personnalisée** (`redirect_url`). Cette URL est obligatoire pour recevoir le code d’autorisation après l’authentification.
:::

Ce mode utilise votre **compte Géoplateforme**. Une seule clé **OAuth2** est autorisée par compte. Il convient aux usages nécessitant une **authentification forte** (SIG ou outils tiers).

![Sécurisation OAuth2](/img/guides-utilisateur/creation-des-cles-et-integration-sig/06_securisation-oauth2.png){.fr-responsive-img .frx-img-contained}
