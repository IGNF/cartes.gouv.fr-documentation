---
title: Montée de version du REDIS Géocodage
description: Des corrections de bugs sont prévues le 30 octobre 2025
tags:
    - Keycloak
    - Publication
    - Orchestrateur
    - Entrepôt
    - Géocodage
    - Recherche
eleventyNavigation:
    key: Montée de version du REDIS Géocodage
    order: 10
---

# Changements

Montée de version du REDIS Géocodage (suite alerte de vulnérabilité)
Harmonisation des informations des swaggers

Pour les services : altimétrie, géocodage, autocomplétion, itinéraire ,recherche, API entrepôt, API statistiques, extraction

# Correction de bugs

- [Keycloak] Remise en fonction des sondes Uptrends sur l'IAM
- [Publication] Si l'API k8s est indisponible, les publications passent en UNSTABLE (au lieu de rester bloqué)
- [Orchestrateur] Ajout d'une ligne de log dans le cas d'une exécution pas lancée
- [Entrepôt] Pouvoir changer le stockage des livraisons une fois toutes les livraisons suprimées
- [Entrepôt] Uniformisation de la sensibilité à la casse pour le filtrage sur chaîne
- [Geocodage] Correction d'un bug où le résultat retourné par le Géocodage pour une même requête n'était pas constant
- [Recherche] Possibilité de créer un index custom avec des champs de type "object"
