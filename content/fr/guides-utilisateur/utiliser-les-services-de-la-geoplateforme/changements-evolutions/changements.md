---
title: Changements dans l'entrepot
eleventyNavigation:
    key: Changements dans l'entrepot
    parent: Changements & évolutions
    order: 4
    nav: guides-utilisateur
pictogram: "digital/coding.svg"
description: Service WMTS
tags:
    - Entrepot
    - Geocodage
---

## Changements

Ajout du paramètre fields pour la liste des documents personnels.

Sur la route GET /users/me/documents, ajout du paramètre de requête fields qui permettra de ne renvoyer que les champs d'un document souhaités parmi la liste suivante (à l'exception de l'id qui est retourné dans tous les cas) :

    id
    name
    description
    size
    mime_type
    labels
    public_url

Par défaut (si fields est vide), on retourne les valeurs suivantes :

    id
    name
    size
    mime_type

Ajout du type de métadonnée Stylesheet dans la configuration pour les styles.

Ce style n'est utilisable que pour les configurations WMS Raster.
Limitation à 99 caractères du nom des organismes dans l'entrepôt.

## Correction de bugs

    [Geocodage] Sur le Swagger, suppression du remplissage automatique de tous les champs des routes /search/csv et /reverse/csv.
    [Entrepot] Retour en erreur 422 quand on tente de pousser une métadonnée mal formé par la route POST /datastores/{datastores}/metadata.

