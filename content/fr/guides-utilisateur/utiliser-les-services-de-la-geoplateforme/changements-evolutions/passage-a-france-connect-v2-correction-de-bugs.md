---
title: Passage à FranceConnect V2 + correction de bugs
description: Des corrections de bugs sont aussi prévues
tags:
    - Correction de bugs
    - IAM
    - Keycloak
    - Statistiques
    - Altimétrie
    - Orchestrateur
    - Itinéraire
    - Entrepôt
eleventyNavigation:
    key: Passage à FranceConnect V2 + correction de bugs
    order: -20250925
date: 2025-09-25
---

## Changements

- Montée de version du DependencyTrack en 4.12.7
- Montée de version SonarQube 2025.1.0
- Montée de version Keycloak 26.2.5
- Passage à FranceConnect V2
- Ajout d’un endpoint géocodage dans l’entrepôt
- À ne pas utiliser, utile uniquement pour les statistiques

<br>

## Correction de bugs

- [Statistiques] Ajout de l’endpoint dans logs des requêtes en 429.
- [Alti] Les <span lang="en">_API_</span> de POST/PUT/DELETE utilisées par l’agent alti sont bloquées.
- [Orchestrateur][VECTOR2PYR] Correction d’un bug où, dans le cas d’une génération VectorToPyr utilisant de la composition, une configuration non fonctionnelle était créée si des top_level dans les paramètres n’avaient pas un écart d’au moins 2.
- [Itineraire] Migration des données itinéraires sur un nouveau NAS-HA (pour corriger les incidents sur le graph OSRM).
- [Orchestrateur][CHECK-PYRAMID-3D-EPT] Ajout du traitement du cas d’une pyramide 3D EPT contenant des subtree dans la vérification.
- [Entrepot] Correction du nombre de résultat variable en fonction de la pagination demandée sur plusieurs routes <span lang="en">_API_</span> de l’entrepôt.