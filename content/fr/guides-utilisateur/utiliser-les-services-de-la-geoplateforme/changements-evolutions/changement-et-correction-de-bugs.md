---
title: Des changements dans Keycloak et corrections de bugs
description: Changement des e-mails automatiques envoyés par le Keycloak et correction de problèmes itinéraire et orchestrateur
tags:
    - Keycloak
    - itinéraire
    - Orchestrateur
eleventyNavigation:
    key: Des changements dans Keycloak et corrections de bugs
    order: 27
---

## Changements

Changement des e-mails automatiques envoyés par le Keycloak

   - Changement du contenu et de l'objet de tous les e-mails automatiques
   - Changement de l'adresse d'envoi en "geoplateforme@ign.fr" et nom d'envoi en "Support Géoplateforme"
   - Changement du style pour appliquer le DSFR

## Correction de bugs

- [Itinéraire] Correction de problèmes observés lors de la génération d'un graph itinéraire PGRouting
- [Orchestrateur] Correction du traitement gpu-update-status où la perte de connexion avec la base de données ne renvoyait pas en erreur l'execution de traitement