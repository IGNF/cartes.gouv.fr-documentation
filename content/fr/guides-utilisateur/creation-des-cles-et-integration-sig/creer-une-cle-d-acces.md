---
title: Créer une clé d’accès
description: Créez une clé d’accès et configurez son mode d’authentification (BASIC, HASH, OAuth2)
tags:
    - BASIC
    - HASH
    - OAuth2
    - Permission
    - Accès
    - Clé
eleventyNavigation:
    key: Créer une clé d’accès
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

![Tableau de bord utilisateur avec les accès à différents services](/img/guides-utilisateur/creation-des-cles-et-integration-sig/creer-une-cle-d-acces/01_tableau-de-bord.png){.fr-responsive-img .frx-img-contained}

![Situation du bouton pour créer une nouvelle clé d’accès sur la page de liste des clés. Ici le bouton est désactivé et l’utilisateur n’a pas de clés d’accès](/img/guides-utilisateur/creation-des-cles-et-integration-sig/creer-une-cle-d-acces/02_ajouter-une-cle.png){.fr-responsive-img .frx-img-contained}

:::info
Si le bouton est grisé, comme ici, alors cela signifie que vous n’avez aucune permission accordée. Contactez le responsable de la donnée en lui fournissant votre identifiant utilisateur pour qu’il vous accorde une permission.
:::

Dans cette première étape, saisissez un nom explicite dans le champ **« Nom de la clé »**, puis cochez la case correspondant à la ressource privée que vous souhaitez rendre accessible.

![Première étape (sur 2) de création d’une clé avec un champ texte pour nommer la clé et une liste de case à cocher par service à associer à la nouvelle clé](/img/guides-utilisateur/creation-des-cles-et-integration-sig/creer-une-cle-d-acces/03_premiere-etape.png){.fr-responsive-img .frx-img-contained}

---

## Configurer les options de sécurisation

Choisissez le type d’authentification adapté à votre usage parmi les trois protocoles disponibles :

### BASIC

Définissez un **nom d’utilisateur** et un **mot de passe**. Ce type de clé est particulièrement adapté pour un usage dans un **SIG** :

![Option BASIC avec 2 champs de formulaire](/img/guides-utilisateur/creation-des-cles-et-integration-sig/creer-une-cle-d-acces/04_securisation-basic.png){.fr-responsive-img .frx-img-contained}

:::info
Le nom d’utilisateur doit être unique à l’échelle de cartes.gouv.fr et vous serez averti si ce nom d’utilisateur est déjà utilisé lorsque vous tenterez de valider le formulaire.
:::

### HASH

Une **chaîne de hachage** est générée automatiquement. Elle devra être transmise comme paramètre supplémentaire dans vos requêtes (sous la forme **_<span lang="en">`apikey={votre hash}`</span>_**). Ce mode est bien adapté aux **intégrations sur un site web** :

![Option HASH sans champ de formulaire à renseigner](/img/guides-utilisateur/creation-des-cles-et-integration-sig/creer-une-cle-d-acces/05_securisation-hash.png){.fr-responsive-img .frx-img-contained}

### OAuth2

:::info
Pour la clé **OAuth2**, votre SIG ou application doit accepter une **URL de redirection personnalisée** (**_<span lang="en">`redirect_url`</span>_**). Cette URL est obligatoire pour recevoir le code d’autorisation après l’authentification.
:::

Ce type de sécurisation utilise votre **compte Géoplateforme**. Il convient aux usages nécessitant une **authentification forte** (SIG ou outils tiers). Il est aussi nécessaire d’utiliser cette clé si la permission qui vous a été accordé vous y contraint.

Une seule clé **OAuth2** est autorisée par compte. Si vous avez déjà créé votre clé de ce type et que vous voulez utiliser un nouveau service avec elle, il vous faut alors modifier votre clé existante.

![Option OAuth2 sans champ de formulaire supplémentaire](/img/guides-utilisateur/creation-des-cles-et-integration-sig/creer-une-cle-d-acces/06_securisation-oauth2.png){.fr-responsive-img .frx-img-contained}

:::callout
Vous avez terminé les étapes obligatoire. Si vous le souhaitez, vous pouvez paramétrer des options supplémentaires de filtrage par IP en suivant les indications page suivante.
:::