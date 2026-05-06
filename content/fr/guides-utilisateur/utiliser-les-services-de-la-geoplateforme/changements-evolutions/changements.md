---
title: Changements dans l’entrepôt et le géocodage
description: Correction de bugs dans l’entrepôt et suppression du remplissage automatique de tous les champs sur le Swagger de Géocodage
tags:
    - Entrepôt
    - Géocodage
eleventyNavigation:
    key: Changements dans l’entrepôt et le géocodage
    order: 4
---

## Changements

**Ajout du paramètre « fields » pour la liste des documents personnels.**

Sur la route « GET /⁠users/me/documents », ajout du paramètre de requête « fields » qui permettra de ne renvoyer que les champs d’un document souhaités parmi la liste suivante (à l’exception de « id » qui est retourné dans tous les cas) :
- id
- name
- description
- size
- mime_type
- labels
- public_url

<br>

Par défaut (si « fields » est vide), on retourne les valeurs suivantes :
- id
- name
- size
- mime_type

<br>

**Ajout du type de métadonnée <span lang="en">_StyleSheet_</span> dans la configuration pour les styles**

Ce style n’est utilisable que pour les configurations <span lang="en">_WMS Raster_</span>.

Limitation à 99 caractères du nom des organismes dans l’entrepôt.

## Correction de bugs

- [Géocodage] Sur le Swagger, suppression du remplissage automatique de tous les champs des routes « /⁠search/csv » et « /⁠reverse/csv ».
- [Entrepôt] Retour en erreur 422 quand on tente de pousser une métadonnée mal formée par la route « POST /⁠datastores/{datastores}/metadata ».