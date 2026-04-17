---
title: Des changements dans l’entrepôt et le géocodage
description: Correction de bugs dans l’entrepôt et suppression du remplissage automatique de tous les champs sur le swagger de Géocodage
tags:
    - Entrepôt
    - Geocodage
eleventyNavigation:
    key: Correction de bugs dans l’entrepôt et suppression du remplissage automatique de tous les champs sur le swagger de Géocodage
    order: 4
---

## Changements
Ajout du paramètre _fields_ pour la liste des documents personnels.

Sur la route GET /⁠users/me/documents, ajout du paramètre de requête _fields_ qui permettra de ne renvoyer que les champs d’un document souhaités parmi la liste suivante (à l’exception de l’_id_ qui est retourné dans tous les cas) :
- id
- name
- description
- size
- mime_type
- labels
- public_url


Par défaut (si _fields_ est vide), on retourne les valeurs suivantes :
- id
- name
- size
- mime_type


Ajout du type de métadonnée Stylesheet dans la configuration pour les styles.

Ce style n’est utilisable que pour les configurations WMS Raster.

Limitation à 99 caractères du nom des organismes dans l’entrepôt.

## Correction de bugs
- [Geocodage] Sur le Swagger, suppression du remplissage automatique de tous les champs des routes /⁠search/csv et /⁠reverse/csv.
- [Entrepôt] Retour en erreur 422 quand on tente de pousser une métadonnée mal formée par la route POST /⁠datastores/{datastores}/metadata.