---
title: Statistiques d’utilisation
tags:
    - Statistiques
    - API
    - Géoplateforme
eleventyNavigation:
    key: Statistiques d’utilisation
    parent: Utiliser les services de la Géoplateforme
    order: 10
    nav: guides-utilisateur
summary:
    visible: true
    depth: 2
pictogram: "digital/data-visualization.svg"
description: Tous les détails sur le service de statistiques de la Géoplateforme
---

## Présentation

L’API de statistiques d’utilisation de la Géoplateforme permet d’obtenir, entre deux dates, le nombre de requêtes (_hits_) ayant sollicité la Géoplateforme et le volume de données (octets) que la Géoplateforme a émis en réponse.

Les nombres de hits et d’octets sont agrégés par mois. Des agrégats par pas de 5 minutes sont également disponibles mais uniquement sur les 30 derniers jours par rapport à la date du jour.

L’API propose des requêtes destinées aux producteurs de données (qui diffusent leurs données depuis leurs datastores) et aux utilisateurs (qui accèdent aux données via les géoservices).

Elle est interrogeable en méthode GET en étant authentifié via son compte <span style="white-space:nowrap;">Géoplateforme/cartes.gouv.fr</span>.

Son swagger est accessible ici : [swagger des statistiques d'utilisation](https://data.geopf.fr/api/stats/swagger-ui/index.html).

## En tant que producteur, consulter les statistiques d’utilisation de ses données

L’API propose au producteur des requêtes, présentes dans les modules **Organismes**, **Communautés** et **Entrepôts** du Swagger, pour connaître la consommation des données associées à ces concepts.

### Statistiques par organisme

Dans la Géoplateforme, un **organisme** est défini comme une entité regroupant des communautés, avec des informations globales telles que le numéro SIRET.

Au grain d'un organisme, l’API propose les requêtes suivantes : 
- Statistiques de l’ensemble des offres détenues par une organisation
- Statistiques des offres associées à une permission produite par une des communautés d’une organisation
- Statistiques d’une offre détenue par une organisation
- Statistiques d’un endpoint pour toutes les offres publiées sur ce endpoint par l’ensemble des communautés d’une organisation
- Statistiques de l’ensemble des offres détenues par une des communauté d’une organisation

### Statistiques par communauté

Dans la Géoplateforme, une **communauté** est définie comme un groupe d'utilisateurs avec certains droits sur la communauté en elle-même et sur son éventuel entrepôt associé.

Au grain d’une communauté, l’API propose les requêtes suivantes : 
- Statistiques de l’ensemble des offres d’une communauté
- Statistiques des offres associées à une permission produite par une communauté

### Statistiques par entrepôt

Dans la Géoplateforme, un **entrepôt** est défini comme un ensemble de données, fichiers statiques, configurations.

Au grain d’un entrepôt, l’API propose les requêtes suivantes : 
- Statistiques des offres associées à une permission produite sur un entrepôt 
- Statistiques d’une offre produite sur un entrepôt
- Statistiques de l’ensemble des offres d’un endpoint pour un entrepôt

## En tant qu'utilisateur des géoservices, consulter ses statistiques de consommation des données en accès restreint

Pour l’utilisateur des géoservices, l’API propose des requêtes, présentes dans le module **Utilisateur** du Swagger, pour connaître les hits et octets de consommation de données en accès restreint.

Les agrégats proposés sont : 
- **Utilisateur** pour connaître la consommation globale du compte concernant les données en accès restreint
- **Permission** pour connaître la consommation d’une permission de l’utilisateur (la possibilité d’accéder à une offre pour un utilisateur ou une communauté)
- **Clé** pour connaître la consommation d’une clé de l’utilisateur (l’information d’identification à ajouter aux requêtes de consultation des services à accès restreint)
- **Accès** pour connaître la consommation d’un accès de l’utilisateur (l’autorisation d’une clé à consommer une offre)
