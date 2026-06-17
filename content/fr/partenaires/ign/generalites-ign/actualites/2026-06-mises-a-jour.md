---
title: Mises à jour Juin 2026
description: Toutes les nouvelles données IGN disponibles en services web et en téléchargement au mois de juin 2026
tags:
    - Mises à jour
eleventyNavigation:
    key: Mises à jour Juin 2026
    order: -20260601
date: 2026-06-01
---

{% from "components/component.njk" import component with context %}

![Image illustrative](/img/partenaires/ign/generalites/actualites/2026-06-mises-a-jour/00-2026-06-mises-a-jour.png "Mise à jour 00"){.fr-responsive-img .frx-img-contained}

<figcaption class="fr-content-media__caption fr-mb-6v" style="text-align: center;">Actualité mise à jour le 10 juin 2026</figcaption>

#### Services web

:::callout
Dans ce **[document](https://data.geopf.fr/annexes/ressources/capabilities/services.csv)** au format CSV mis à jour chaque vendredi, vous retrouvez toutes les ressources mises en avant par l’Institut national de l’information géographique et forestière.
:::

##### Ajout de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ORTHO-EXPRESS" target="_blank" rel="noopener noreferrer" title="ORTHO-EXPRESS IRC - ouvre une nouvelle fenêtre">ORTHO-EXPRESS IRC</a>', "ORTHOIMAGERY.ORTHOPHOTOS.IRC-EXPRESS.2026", "WMS-Raster et WMTS", "ortho", "D013, D090 - 2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ORTHO-EXPRESS" target="_blank" rel="noopener noreferrer" title="ORTHO-EXPRESS RVB - ouvre une nouvelle fenêtre">ORTHO-EXPRESS RVB</a>', "ORTHOIMAGERY.ORTHOPHOTOS.RVB-EXPRESS.2026", "WMS-Raster et WMTS", "ortho", "D013, D090 - 2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO 2021-2023 - ouvre une nouvelle fenêtre">Graphe de mosaïquage de la BD ORTHO® 2021-2023</a>', "ORTHOIMAGERY.ORTHOPHOTOS.GRAPHE.2021-2023", "WFS et WMS-Vecteur", "orthohisto", "FXX + DROM - 2021 à 2023"],            
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_VOIRIE-DGF" target="_blank" rel="noopener noreferrer" title="VOIRIE DGF - ouvre une nouvelle fenêtre">VOIRIE DGF</a>', "DGF_2026_:XXX", "WFS", "topographie", "FXX + DROM - 2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_VOIRIE-DGF" target="_blank" rel="noopener noreferrer" title="VOIRIE DGF - ouvre une nouvelle fenêtre">VOIRIE DGF</a>', "DGF_2025_:XXX", "WFS", "topographie", "FXX + DROM - 2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_VOIRIE-DGF" target="_blank" rel="noopener noreferrer" title="VOIRIE DGF - ouvre une nouvelle fenêtre">Voirie communale retenue DSR 2025</a>', "DGF_2026-voirie-retenue-communes", "WMTS", "topographie", "FXX + DROM - 2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_VOIRIE-DGF" target="_blank" rel="noopener noreferrer" title="VOIRIE DGF - ouvre une nouvelle fenêtre">Voirie départementale retenue DGF 2026</a>', "DGF_2026-voirie-retenue-departements", "WMTS", "topographie", "FXX + DROM - 2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_VOIRIE-DGF" target="_blank" rel="noopener noreferrer" title="VOIRIE DGF - ouvre une nouvelle fenêtre">Voirie communale retenue DSR 2025</a>', "DGF_2025-voirie-retenue-communes", "WMTS", "topographie", "FXX + DROM - 2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_VOIRIE-DGF" target="_blank" rel="noopener noreferrer" title="VOIRIE DGF - ouvre une nouvelle fenêtre">Voirie départementale retenue DGF 2025</a>', "DGF_2025-voirie-retenue-departements", "WMTS", "topographie", "FXX + DROM - 2025"]
    ]
}) }}

Les flux ci-dessus remplacent les flux suivants :
- DGCL.2025.voirie-communale
- DGCL.2025.voirie-departementale
- DGCL.2026.communale
- DGCL.2026.voirie-departementale

<br>

##### Liste des mises à jour de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ADMIN-EXPRESS" target="_blank" rel="noopener noreferrer" title="ADMIN EXPRESS - ouvre une nouvelle fenêtre">ADMIN EXPRESS</a>', "ADMIN_EXPRESS", "TMS", "administratif", "FXX + DROM - 2026-05"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ADMIN-EXPRESS" target="_blank" rel="noopener noreferrer" title="ADMIN EXPRESS - ouvre une nouvelle fenêtre">ADMIN EXPRESS</a>', "LIMITES_ADMINISTRATIVES_EXPRESS.LATEST", "WFS, WMS-Raster et WMTS", "administratif", "FXX + DROM - 2026-05"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/ANETT_COMMUNE-TOURISTIQUE-ET-STATION-CLASSEE" target="_blank" rel="noopener noreferrer" title="Communes Touristiques - ouvre une nouvelle fenêtre">Communes Touristiques</a>', "LABELS.TOURISTIQUES:communes_touristiques", "WFS", "cartovecto", "FXX - 2026-06"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/ANETT_COMMUNE-TOURISTIQUE-ET-STATION-CLASSEE" target="_blank" rel="noopener noreferrer" title="Communes Touristiques - ouvre une nouvelle fenêtre">Communes Touristiques</a>', "COMMUNESTOURISTIQUES", "WMS-Vecteur", "cartovecto", "FXX - 2026-06"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/ANETT_COMMUNE-TOURISTIQUE-ET-STATION-CLASSEE" target="_blank" rel="noopener noreferrer" title="Stations Classées - ouvre une nouvelle fenêtre">Stations Classées</a>', "LABELS.TOURISTIQUES:stations_classees", "WFS", "cartovecto", "FXX - 2026-06"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/ANETT_COMMUNE-TOURISTIQUE-ET-STATION-CLASSEE" target="_blank" rel="noopener noreferrer" title="Stations Classées - ouvre une nouvelle fenêtre">Stations Classées</a>', "STATIONSCLASSEES", "WMS-Vecteur", "cartovecto", "FXX - 2026-06"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/FSV_STATIONS-VERTES" target="_blank" rel="noopener noreferrer" title="Stations Vertes - ouvre une nouvelle fenêtre">Stations Vertes</a>', "LABELS.TOURISTIQUES:stations_vertes", "WFS", "cartovecto", "FXX - 2026-06"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/FSV_STATIONS-VERTES" target="_blank" rel="noopener noreferrer" title="Stations Vertes - ouvre une nouvelle fenêtre">Stations Vertes</a>', "STATIONSVERTES", "WMS-Vecteur", "cartovecto", "FXX - 2026-06"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/FFVE_VILLAGES-ETAPES" target="_blank" rel="noopener noreferrer" title="Villages Etapes - ouvre une nouvelle fenêtre">Villages Etapes</a>', "LABELS.TOURISTIQUES:villages_etape", "WFS", "cartovecto", "FXX - 2026-06"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/FFVE_VILLAGES-ETAPES" target="_blank" rel="noopener noreferrer" title="Villages Etapes - ouvre une nouvelle fenêtre">Villages Etapes</a>', "VILLAGESETAPE", "WMS-Vecteur", "cartovecto", "FXX - 2026-06"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO 2021-2023 - ouvre une nouvelle fenêtre">Photographies aériennes 2021-2023</a>', "ORTHOIMAGERY.ORTHOPHOTOS2021-2023", "WMS-Raster et WMTS", "orthohisto", "FXX + DROM - 2021 à 2023"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ORTHO-SAT" target="_blank" rel="noopener noreferrer" title="PLEIADES 2026 - ouvre une nouvelle fenêtre">PLEIADES 2026</a>', "ORTHOIMAGERY.ORTHO-SAT.PLEIADES.2026", "WMS-Raster et WMTS", "satellite", "Littoral Atlantique, Littoral Cotentin et zones sur Dourdan, Sancerre-Cosne et Sud-Est Grenoble - Édition 2026"]
    ]
}) }}

Les ressources PLAN IGN J+1 (GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1 services WMS-Raster et WMTS) et BD Géodésie ([IGNF_GEODESIE-XXX services WFS et WMS-Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_GEODESIE-ET-NIVELLEMENT){target="_blank" rel="noopener noreferrer" title="GEODESIE ET NIVELLEMENT - ouvre une nouvelle fenêtre"}) sont mises à jour quotidiennement et la ressource Base Adresse Nationale ([BAN.DATA.GOUV services WFS et WMS-Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BAN-PLUS){target="_blank" rel="noopener noreferrer" title="BAN PLUS - ouvre une nouvelle fenêtre"}) est actualisée hebdomadairement.

![Image illustrative](/img/partenaires/ign/generalites/actualites/2026-06-mises-a-jour/01-2026-06-mises-a-jour.png "Mise à jour 01"){.fr-responsive-img .frx-img-contained}

<figcaption class="fr-content-media__caption fr-mb-6v" style="text-align: center;">Limites administratives et Voirie DGF - Mantet (66)</figcaption>

---

#### Téléchargement

##### Liste des mises à jour de données en téléchargement

{{ component("table", {
    headers: ["Donnée", "Zone", "Édition"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_SCAN-25" target="_blank" rel="noopener noreferrer" title="SCAN 25® - ouvre une nouvelle fenêtre">SCAN 25®</a>', "FXX", "2026-03"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_SCAN-100" target="_blank" rel="noopener noreferrer" title="SCAN 100® - ouvre une nouvelle fenêtre">SCAN 100®</a>', "FXX", "2026-04"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO® EXPRESS</a>', "FXX + DROM", "hebdomadaire"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_GEODESIE-ET-NIVELLEMENT" target="_blank" rel="noopener noreferrer" title="GEODESIE - ouvre une nouvelle fenêtre">Fiches Géodésiques </a>', "FXX + DROM", "2026-06"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D001, D002, D017, D030, D038, D047, D062, D066, D068, D095", "Correctif 2021 et 2024"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D056", "Correctif 2022 et 2024"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D001, D002, D017, D030, D038, D047, D062, D066, D068, D095", "Différentiel entre 2021 et 2024"],
         ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D056", "Différentiel entre 2021 et 2024"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation- ouvre une nouvelle fenêtre">OCS GE Artificialisation </a>', "D001, D002, D017, D030, D033, D038, D047, D060, D062, D066, D068, D095", "2024"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation- ouvre une nouvelle fenêtre">OCS GE Artificialisation </a>', "D056", "Différentiel entre 2022 et 2024"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation- ouvre une nouvelle fenêtre">OCS GE Artificialisation </a>', "D001, D002, D017, D030, D033, D038, D047, D060, D066, D062, D068, D095", "Différentiel entre 2021 et 2024"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_VOIRIE-DGF" target="_blank" rel="noopener noreferrer" title="Voirie DGF - ouvre une nouvelle fenêtre">Voirie DGF</a>', "FXX + DROM", "2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-CORREL" target="_blank" rel="noopener noreferrer" title="MNS Correl - ouvre une nouvelle fenêtre">MNS Correl</a>', "D090", "2026"]
    ]
}) }}

![Image illustrative](/img/partenaires/ign/generalites/actualites/2026-06-mises-a-jour/02-2026-06-mises-a-jour.png "Mise à jour 02"){.fr-responsive-img .frx-img-contained}

<figcaption class="fr-content-media__caption fr-mb-6v" style="text-align: center;">Réseau de nivellement, CoSIA et MNT issu du LiDAR HD - Sospel (04)</figcaption>