---
title: Changements dans Keycloak et corrections de bugs
description: Changement des courriels automatiques envoyés par le Keycloak et correction de problèmes d’itinéraire et d’orchestrateur
tags:
    - Keycloak
    - Itinéraire
    - Orchestrateur
eleventyNavigation:
    key: Changements dans Keycloak et corrections de bugs
    order: -20260415
date: 2026-04-15
---

## Changements

**Changement des courriels automatiques envoyés par le Keycloak**
- Changement du contenu et de l’objet de tous les courriels automatiques
- Changement de l’adresse d’envoi en « geoplateforme@ign.fr » et nom d’envoi en « Support Géoplateforme »
- Changement du style pour appliquer le DSFR

<br>

## Correction de bugs

- [Itinéraire] Correction de problèmes observés lors de la génération d’un graph itinéraire PGRouting
- [Orchestrateur] Correction du traitement gpu-update-status où la perte de connexion avec la base de données ne renvoyait pas en erreur l’exécution de traitement