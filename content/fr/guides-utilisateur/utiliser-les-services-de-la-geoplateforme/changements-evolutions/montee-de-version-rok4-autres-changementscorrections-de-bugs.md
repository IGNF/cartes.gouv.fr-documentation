---
title: Montée de version ROK4 + autres changements/corrections de bugs
description: Montée de version de rok4/fullgeneration en 5.0.3
tags:
    - ROK4
    - Orchestrateur
    - Document
    - Offre
    - Entrepôt
    - Recherche
eleventyNavigation:
    key: Montée de version ROK4 + autres changements/corrections de bugs
    order: 9
---

## Changements

Cette montée de version va améliorer la robustesse du calcul des pyramides vecteurs. Les changements de comportement sont :

    Limitation des données à l'étendue fournie (et pas aux dalles contenant l'étendue fournie)
    Forçage des géométries en 2D et en multi si une l'est
    Passe d'une validation des géométries
    Détection des données vides sans bugger
    Correction de la lecture des TIFF compressés en JPEG
    Correction de la mauvaise écriture du préfixe des images dans le descripteur S3 dans le cas d'une mise à jour par référence
    Correction et généralisation de l'optimisation de la détection de tuiles avant le passage en dalle

Document : Faire une erreur dès que la taille de fichier limite est atteinte

Une erreur 409 est renvoyé dès de le fichier téléversé sera trop grand
Dépréciation du paramètre available des offres

Ce paramètre ne fonctionnait pas correctement et est donc supprimé le temps que son comportement soit retravaillé (en amont toutes les offres en available=false ont été converti en available=true pour faire la suppression du paramètre)
Ajout du format application/atom+xml pour les routes d'activités

Les routes concernées sont : - /communities/{technical_name}/activity - /communities/{community}/permissions/activity - /communities/{community}/users/activity - /datastores/{datastore}/stored_data/activity - /datastores/{datastore}/configurations/activity - /datastores/{datastore}/uploads/activity

## Correction de bugs

- [Offre] Correction de l'impossibilité de dépublier une offre lorsqu'une permission et un accès sont définis pour cette offre
- [Orchestrateur] Correction d'une erreur de connexion avec la base de donnée pour le calcul de données itinéraires
- [Orchestrateur] Lors d'un moissonage vecteur, ajout d'une ligne d'erreur dans les logs dans le cas où la donnée vecteur se trouve en privé et que le paramètre "harvest_extra" est manquant
- [Entrepot] Suppression, dans le filtrage des cles par type, du "header" qui n'existe pas
- [Entrepot] Ajout dans le filtrage des stored data visibles par un utilisateur celles qui sont visibles via les communautés
- [Recherche] Correction de l'impossibilité de faire une requête suggest_autocomplete pour un index custom
