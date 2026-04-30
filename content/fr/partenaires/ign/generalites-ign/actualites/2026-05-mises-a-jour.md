---
title: Mises à jour mai 2026
description: Toutes les nouvelles données IGN disponibles en services web et en téléchargement au mois de mai 2026
tags:
    - Mises à jour
    - Diffusion
eleventyNavigation:
    key: Mises à jour mai 2026
    order: -20260302
date: 2026-05-02
---

{% from "components/component.njk" import component with context %}

![Image illustrative](/img/partenaires/ign/generalites/actualites/2026-01-maj.png){.fr-responsive-img .frx-img-contained}

Actualités mise à jour le 15 Mai 2026

#### Services web

##### Ajout de flux en accès libre

À venir

##### Liste des mises à jour de flux en accès libre

Les ressources PLAN IGN J+1 (GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1 services WMS-Raster et WMTS) et BD Géodésie ([IGNF_GEODESIE-XXX services WFS et WMS-Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_GEODESIE-ET-NIVELLEMENT){target="_blank" rel="noopener noreferrer" title="GEODESIE ET NIVELLEMENT - ouvre une nouvelle fenêtre"}) sont mises à jour quotidiennement et la ressource Base Adresse Nationale ([BAN.DATA.GOUV services WFS et WMS-Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BAN-PLUS){target="_blank" rel="noopener noreferrer" title="BAN PLUS - ouvre une nouvelle fenêtre"}) est actualisée hebdomadairement.

#### Téléchargement

##### Liste des mises à jour de données en téléchargement

{{ component("table", {
    headers: ["Donnée", "Zone", "Édition"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO® EXPRESS</a>', "FXX + DROM", "hebdomadaire"]
    ]
}) }}