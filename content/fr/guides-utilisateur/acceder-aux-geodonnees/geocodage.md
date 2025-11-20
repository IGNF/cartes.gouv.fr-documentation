---
title: Géocodage
tags:
    - Géocodage
eleventyNavigation:
    key: Géocodage
    parent: Accéder aux géodonnées
    order: 4
    nav: guides-utilisateur
summary:
    visible: true
---

## Présentation

L’API de géocodage de la Géoplateforme a pour but de fournir des coordonnées à partir d’une adresse ou d’une parcelle cadastrale (ou à l’inverse de fournir le localisant le plus proche à partir de coordonnées).

Son usage est limité à 50 requêtes par seconde depuis une même adresse IP.

Elle s’appuie sur des données BAN, BD TOPO® et Parcellaire Express (PCI).

Son swagger est accessible ici : [swagger du géocodage](https://data.geopf.fr/geocodage/openapi).

## Capacités de l’API (getCapabilities)

La requête **getCapabilities** permet de découvrir les capacités de l’API : les opérations possibles, les ressources disponibles et les options proposées.

Elle est accessible via l’URL suivante : 

```plain
https://data.geopf.fr/geocodage/getCapabilities
```

Cette requête ne requiert aucun paramètre.

## Géocodage direct (search) et inverse (reverse)

Le géocodage **direct** permet de récupérer les coordonnées géographiques d’une adresse, d’un lieu ou d’une parcelle cadastrale.

Pour facilité la saisie, un service d’autocomplétion est intégré par défaut dans le service de géocodage. Ce service d’autocomplétion est également proposé en utilisation distincte et directe, pour le cas d’usage de remplissage de formulaires par exemple.

Le géocodage **inverse** a pour but de retourner, à partir d’un ou plusieurs points géographiques indiqués en latitude/longitude, la ou les entités géolocalisées les plus proches correspondantes, parmi les adresses, toponymes, parcelles cadastrales, et/ou unités administratives.

Le géocodage s’appuie sur plusieurs sources de données :

 * L’index des adresses est actualisé chaque semaine à partir des adresses de la [Base Adresse Nationale (BAN)](https://adresse.data.gouv.fr/decouvrir-la-BAN).
 * Les lieux nommés proviennent de la couche des « points d’intérêt » (POI) de la [BD TOPO®](https://cartes.gouv.fr/catalogue/dataset/IGNF_BD-TOPO), qui est actualisée tous les trimestres.
 * Les parcelles cadastrales proviennent du [Parcellaire Express (PCI)](https://cartes.gouv.fr/catalogue/dataset/IGNF_PARCELLAIRE-EXPRESS-PCI), actualisé tous les trimestres.

Le service de géocodage est disponible au travers des URLs suivantes :

Le géocodage direct est accessible via l’URL suivante : (les paramètres sont précisés dans le [swagger du géocodage](https://data.geopf.fr/geocodage/openapi))

```plain
https://data.geopf.fr/geocodage/search
```

Le géocodage inverse est accessible via l’URL suivante :  (les paramètres sont précisés dans le [swagger du géocodage](https://data.geopf.fr/geocodage/openapi))

```plain
https://data.geopf.fr/geocodage/reverse
```

Ces deux types de géocodage se déclinent sous la forme d’appels unitaires en méthode GET ou regroupés par fichiers (géocodage en masse de fichiers csv) en méthode POST.

## Géocodage par lot synchrone (batch) et asynchrone (batch-async)

Pour géocoder un grand nombre d’adresses, la possibilité est offerte de passer par un traitement par lot, dit « batch », pour la recherche directe ou inverse.

Les fichiers doivent être encodés en UTF8 et faire moins de 50 Mo ou 200000 lignes.

Le site national de l’adresse propose une [interface intuitive](https://adresse.data.gouv.fr/outils/csv) pour la gestion des opérations de géocodage **direct** par fichiers.

Enfin pour un usage expert récurrent et notamment le besoin de gérer des fichiers volumineux (jusqu’à 1 Go), il est possible de configurer des **projets de géocodage** qui seront traités de façon asynchrone (Cf. section « Géocodage par lot asynchrone » dans le [swagger du géocodage](https://data.geopf.fr/geocodage/openapi)).

