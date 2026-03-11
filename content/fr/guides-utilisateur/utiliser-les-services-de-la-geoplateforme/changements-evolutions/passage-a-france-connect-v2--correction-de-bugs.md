---
title: Passage à France Connect V2 + correction de bugs
description: Des corrections de bugs sont aussi prévues. Ces changements auront lieu le 25 septembre 2025. 
tags:
    - Changement
    - Correction bugs
    - IAM, Keycloak
    - Statistiques
    - Altimétrie
    - Orchestrateur
    - Itineraire
    - Entrepot
eleventyNavigation:
    key: Passage à France Connect V2 + correction de bugs
    order: 12
---

# Changements

Montée de version du DependencyTarck en 4.12.7

Montée de version SonarQube 2025.1.0

Montée de version Keycloak 26.2.5

Passage à FranceConnect V2

Ajout d'un endpoint geocodage dans l'entrepot

A ne pas utiliser, utile uniquement pour les statistiques

# Correction de bugs

- [Statistiques] Ajout de l'endpoint dans logs des requêtes en 429.
- [Alti] Les API de POST/PUT/DELETE utilisées par l'agent alti sont bloquées.
- [Orchestrateur][VECTOR2PYR] Correction d'un bug où, dans le cas d'une génération VectorToPyr utilisant de la composition, une configuration non fonctionnelle était créé si des top_level dans les paramètres n'avaient pas un écart d'au moins 2.
- [Itineraire] Migration des données itinaires sur un nouveau NAS-HA (pour corriger les incidents sur le graph OSRM).
- [Orchestrateur][CHECK-PYRAMID-3D-EPT] Ajout du traitement du cas d'une pyramide 3D EPT contenant des subtree dans la vérification.
- [Entrepot] Correction du nombre de résultat variable en fonctione de la pagination demandée sur plusieurs routes APIs de l'entrepôt.
