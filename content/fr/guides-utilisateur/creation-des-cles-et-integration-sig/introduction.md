---
title: Introduction
description: Introduction au fonctionnement de l’API Entrepôt de l’IGN
tags:
    - API
    - Entrepôt
    - Permissions
    - Accès
    - Clés
    - Géoplateforme
eleventyNavigation:
    key: Introduction
    parent: Création et intégration des clés cartes.gouv.fr dans un SIG
    order: 1
    nav: guides-utilisateur
---

L’API **Entrepôt** de la **Géoplateforme de l’IGN** structure l’accès aux données autour de trois composantes : **permissions**, **accès** et **clés**.

- Les **permissions**, créées par le propriétaire d’une offre, attribuent des droits à des utilisateurs ou à des communautés pour une ou plusieurs offres.
- Les **accès** établissent le lien entre une permission et une clé. Cette clé est ensuite utilisée dans les requêtes vers les services de diffusion.
- Les **clés** existent sous plusieurs formes : **clé hash**, **OAuth2** ou **BASIC** (identifiant : mot de passe en HTTP Basic). Elles peuvent être associées à des règles de filtrage ou de contrôle.

Ce modèle permet aux producteurs de **gérer finement les accès**, tout en offrant aux utilisateurs le **choix du mode d’authentification** le plus adapté, **BASIC** compris, à condition d’utiliser **HTTPS**.

Ce tutoriel détaille pas à pas la création et l’intégration d’une clé.
