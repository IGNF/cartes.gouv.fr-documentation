---
title: Multiples modifications dans l'entrepôt + corrections de bugs Téléchargement et Keycloak
description: Ajout d'un type de métadonnées pour les configurations, ajout d'un traitement, prises en compte des fichiers FlatGeoBuf et Géoparquet et correction de bugs Téléchargement et Keycloak
tags:
    - Entrepôt
    - Orchestrateur
    - Métadonnées
    - Vecteur
    - Téléchargement
    - Keycloak
eleventyNavigation:
    key: Multiples modifications dans l'entrepôt + corrections de bugs Téléchargement et Keycloak
    order: -20260729
date: 2026-07-29
---

## Changements

**Ajout du type de métadonnées StyleSheet pour les métadonnées correspondant à un style**

Dans l'[Entrepôt](../../../../guides-developpeur/openapi/), à la création d'une configuration, il est possible d'ajouter des métadonnées correspondant à un style en précisant le type "StyleSheet". Ce type n'est disponible que pour les [configurations de type WMTS-TMS](../../../../tutoriels/gestion-des-donnees-raster/alimentation-diffusion-raster/publication-tuile/).

**Ajout d'un traitement de calcul d'une donnée stockée de type *ARCHIVE* contenant un fichier PMTiles à partir d'une donnée stockée *VECTOR-DB***

Ce nouveau traitement s'appelle gpf-processing-vector-db-to-archive-pmtiles. Il prend en entrée une donnée stockée de type *VECTOR-DB* et on obtient en sortie une donnée stockée de type *ARCHIVE*.
Les possibles paramètres de ce traitement :

- *relations* : Détaille les tables/vues à extraire (et leurs noms en sortie) sous la forme dictionnaire {\"nom_table_ou_vue\" : \"nom_en_sortie\", ...}
- *tippecanoe* : Options de configuration pour tippecanoe. Dictionnaire contenant 3 clés optionnelles : **options**, **top**, **bottom**. Les clés **top** et **bottom** contiennent respectivement les zooms minimum et maximum à générer. Par défaut, les **options** sont '--drop-densest-as-needed --extend-zooms-if-still-dropping', **top** vaut '0' et **bottom** vaut 'g'.
- *fileout_name* : Le nom sans extension du fichier pmtiles en sortie ('data' par défaut)

**Prise en compte des fichiers *FlatGeoBuf* et *Géoparquet* dans la [vérification vecteur](../../../../tutoriels/gestion-des-donnees-vecteur/alimentation-diffusion-vecteur/livraison/)**

Possibilité que les fichiers *FlatGeoBuf* et *Géoparquet* soient maintenant pris en compte dans la [vérification vecteur](../../../../tutoriels/gestion-des-donnees-vecteur/alimentation-diffusion-vecteur/livraison/) pour pouvoir ensuite les utiliser dans traitements vecteurs par la suite

**Prise en compte des fichiers *FlatGeoBuf* dans l'[intégration vecteur](../../../../tutoriels/gestion-des-donnees-vecteur/alimentation-diffusion-vecteur/integration/) (les fichiers *Géoparquet* arriveront ultérieurement suite à un bug)**

Les fichiers *FlatGeoBuf* peuvent maintenant être intégrés en base pour ensuite être utilisé dans les configurations [WFS](../../../../tutoriels/gestion-des-donnees-vecteur/alimentation-diffusion-vecteur/publication-wfs/) et [WMS Vecteur](../../../../tutoriels/gestion-des-donnees-vecteur/alimentation-diffusion-vecteur/publication-wms/)

## Corrections de bugs

- [Téléchargement] Correction d'une erreur qui rendait impossible le [téléchargement](../../telechargement/) des fichiers JSON
- [Keycloak] Remise en forme des boutons sur la page de création de compte de la Géoplateforme