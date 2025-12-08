---
title: Octroyer des permissions sur mon flux
tags:
    - Flux
    - Permission
    - Accès
    - Clé
    - Utilisateur
    - Communauté
eleventyNavigation:
    key: Octroyer des permissions sur mon flux
    parent: Publier des données via cartes.gouv.fr
    order: 8
    nav: guides-producteur
pictogram: system/padlock.svg
description: Donner des droits d’accès sur ses flux
summary:
    visible: true
    depth: 1
---

## Différence entre clé d’accès et permission

Les permissions sont des droits donnés par les responsables de données restreintes à un utilisateur ou une communauté.

Tandis que les clés d’accès sont construites par l’utilisateur à partir des permissions qui lui sont accordées.

L’utilisateur peut ainsi regrouper plusieurs permissions, parfois de producteurs différents, en une seule clé d’accès.

---

## Paramétrer les permissions sur un flux

En tant que responsable des données restreintes que vous diffusez, vous pouvez octroyer des permissions à des utilisateurs spécifiques ou à des communautés d’utilisateurs.

Une fois le service publié en accès restreint, cliquez sur l’option **« Gérer les permissions d’accès »** :

![Image décrivant comment accéder aux permissions d’un service](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/octroyer-des-permissions/01_gerer-les-permissions-d-acces.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Vous pourrez alors consulter, modifier et supprimer des permissions existantes :

![Image décrivant comment consulter, modifier ou supprimer une permission existante](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/octroyer-des-permissions/02_modifier-des-permissions-existantes.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Et vous pouvez également ajouter une permission à un utilisateur ou une communauté en cliquant sur le bouton **« Ajouter une permission »** :

![Image décrivant comment ajouter une nouvelle permission](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/octroyer-des-permissions/03_ajouter-une-permission.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Donnez alors un nom à la permission et choisissez les bénéficiaires en renseignant l’identifiant de l’utilisateur ou de la communauté à ajouter, puis en cliquant sur **« Ajouter »** :

![Image décrivant comment ajouter des bénéficiaires](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/octroyer-des-permissions/04_ajouter-un-beneficiaire.png){.fr-responsive-img .frx-border-img .frx-img-contained}

:::info
Vous pouvez ajouter en une seule permission autant de bénéficiaires que vous le souhaitez.
:::

Pour finir, choisissez une date d’expiration pour la permission (optionnel) et les services concernés par la permission :

![Image décrivant comment finaliser la création de la permission](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/octroyer-des-permissions/05_date-et-ressource.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Cliquez sur **« Ajouter »** en fin de formulaire pour finaliser la création de la permission.

---

## Formulaire de demande d’accès

Un utilisateur peut demander l’accès à un flux restreint de deux façon différentes :
- Contacter le responsable de la donnée indiqué sur la fiche produit pour lui octroyer l’accès (il devra alors transmettre alors son identifiant utilisateur avec sa demande)
- Utilise le formulaire de demande d’accès

Chaque fiche produit (ou fiche de données) possède un identifiant unique que vous pouvez retrouver dans l’url de la page. Par exemple pour la BD TOPO® : **« IGNF_BD-TOPO »**

![Image décrivant l’identifiant unique d’une fiche produit](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/octroyer-des-permissions/06_identifiant-unique.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Vous retrouvez cet identifiant à l’étape **« Description de la ressource »** lors de la création ou modification d’un service :

![Image décrivant l’identifiant unique d’une fiche produit lors de la modification des métadonnées](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/octroyer-des-permissions/07_identifiant-unique-dans-les-metadonnees.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Si vous publiez des données restreintes, vous pouvez mettre à disposition des utilisateurs un lien vers un formulaire de demande d’accès :

![Image décrivant le formulaire de demande d’accès](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/octroyer-des-permissions/08_formulaire-de-demande-d-acces.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Vous pouvez indiquer le lien **« https://cartes.gouv.fr/demande-acces/{ID-DE-VOTRE-PRODUIT} »** dans votre fiche produit via les métadonnées, dans la partie **« Résumé »** ou la partie **« Liens »** :

![Image décrivant comment ajouter le lien dans la partie résumé](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/octroyer-des-permissions/09_mettre-la-demande-d-acces-dans-le-resume.png){.fr-responsive-img .frx-border-img .frx-img-contained}

![Image décrivant comment ajouter le lien dans la partie liens](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/octroyer-des-permissions/10_mettre-la-demande-d-acces-dans-les-liens.png){.fr-responsive-img .frx-border-img .frx-img-contained}

---

:::callout
Présentez votre offre de données et de service dans votre propre espace de documentation partenaire en suivant l’aide pour [créer des pages de documentation](../../creer-des-pages-de-documentation/)
:::