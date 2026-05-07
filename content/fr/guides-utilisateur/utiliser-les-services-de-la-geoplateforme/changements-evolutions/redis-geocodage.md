---
title: Montée de version du REDIS Géocodage
description: Corrections de bugs du REDIS Géocodage
tags:
    - Keycloak
    - Publication
    - Orchestrateur
    - Entrepôt
    - Géocodage
    - Recherche
eleventyNavigation:
    key: Montée de version du REDIS Géocodage
    order: -20260114
date: 2026-01-14
---

## Changements

- Montée de version du REDIS Géocodage (suite à une alerte de vulnérabilité)
- Harmonisation des informations des swaggers
- Pour les services :
    - altimétrie
    - géocodage
    - autocomplétion
    - itinéraire
    - recherche
    - <span lang="en">_API_</span> Entrepôt
    - <span lang="en">_API_</span> statistiques
    - extraction

<br>

## Correction de bugs

- [Keycloak] Remise en fonction des sondes Uptrends sur l’IAM
- [Publication] Si l’<span lang="en">_API_</span> k8s est indisponible, les publications passent en « UNSTABLE » (au lieu de rester bloquées)
- [Orchestrateur] Ajout d’une ligne de log dans le cas d’une exécution pas lancée
- [Entrepôt] Pouvoir changer le stockage des livraisons une fois toutes les livraisons supprimées
- [Entrepôt] Uniformisation de la sensibilité à la casse pour le filtrage sur chaînes
- [Geocodage] Correction d’un bug où le résultat retourné par le Géocodage pour une même requête n’était pas constant
- [Recherche] Possibilité de créer un index <span lang="en">custom</span> avec des champs de type « object »