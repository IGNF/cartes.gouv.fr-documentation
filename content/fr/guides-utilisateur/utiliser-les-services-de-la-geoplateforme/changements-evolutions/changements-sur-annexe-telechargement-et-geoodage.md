---
title: Changements sur Annexe, Téléchargement et Géocodage
description: Amélioration de la gestion des fichiers et des API avec ajout du header ETag, ajout des types MIME pour les fichiers Géoparquet, optimisation des filtres de géocodage et d’autocomplétion, ajout du filtre « city-code » pour l’autocomplétion et augmentation du rate limiting pour l’itinéraire
tags:
    - Téléchargement
    - Annexe
    - Géocodage
    - itinéraire
eleventyNavigation:
    key: Changements sur Annexe, Téléchargement et Géocodage
    order: -20260506
date: 2026-05-06
---

## Changements

**Ajout d’un header ETag au téléchargement des annexes et documents personnels**

L’ajout du header ETag dans les réponses permettra aux applications clientes de gérer plus proprement le cache. Les routes concernées sont :
- GET /documents/{public name}
- GET /annexes/{technical name}/{path}

<br>

**Ajout du bon <span lang="en">_MIME type_</span> sur les fichiers Géoparquet dans le descripteur d’archive**

Les nouvelles archives contenant des fichiers Géoparquet auront maintenant le <span lang="en">_MIME type_</span> « application/vnd.apache.parquet » dans le descripteur d’archive (au lieu de « application/octet-stream » actuellement).

**Augmentation du nombre de valeurs pour le filtre « city-code » pour Géocodage et ajout du filtre « city-code » pour l’autocomplétion**

Pour le Géocodage, le nombre de valeurs maximum du filtre « city-code » passe de 50 à 200 (pour tenir compte de certains EPCI composés de plus de 50 communes).

Pour l’autocomplétion, le filtre « city-code » est ajouté avec un maximum de valeurs maximum de 200.

**Augmentation du <span lang="en">_rate limiting_</span> pour l’itinéraire**

La limite d’usage par IP du calcul itinéraire passe de 5 à 10 requêtes par seconde.