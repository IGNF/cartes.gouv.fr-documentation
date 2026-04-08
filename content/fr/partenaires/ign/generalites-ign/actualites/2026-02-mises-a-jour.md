---
title: Mises à jour février 2026
description: Toutes les nouvelles données IGN disponibles en services web et en téléchargement au mois de février 2026
tags:
    - Mises à jour
date: 2026-02-03
---

{% from "components/component.njk" import component with context %}

#### Services web

##### Ajout de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ['<a href="cartes.gouv.fr/rechercher-une-donnee/dataset/ARCHIVES-NATIONALES_CASSINI-ROI" target="_blank" rel="noopener noreferrer" title="Carte de Cassini - ouvre une nouvelle fenêtre">Carte de Cassini - exemplaire du Roi</a>', "AN-IGNF_GEOGRAPHICALGRIDSYSTEMS.CASSINI", "WMS-Raster et WMTS", "cartes", "N/A"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ACCESSIBILITE-PHYSIQUE-DES-FORETS" target="_blank" rel="noopener noreferrer" title="Accessibilité physique des forêts - ouvre une nouvelle fenêtre">Accessibilité physique des forêts</a>', "IGNF_ACCESSIBILITE-PHYSIQUE-FORETS-XXX", "WFS, WMS-Raster et WMTS", "à venir", "2025"]
    ]
}) }}

##### Liste des mises à jour de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ["ADMIN EXPRESS mises à jour en continu", "ADMIN_EXPRESS", "TMS", "administratif", "FXX + DROM - 2026-02"],
        ["ADMIN EXPRESS mises à jour en continu", "LIMITES_ADMINISTRATIVES_EXPRESS.LATEST", "WFS, WMS-Raster et WMTS", "administratif", "FXX + DROM - 2026-02"],
        ["PLAN IGN", "PLAN.IGN", "TMS (tuiles vectorielles)", "cartes", "FXX + DROM (niveaux de zoom 14-19) - 2026-02"],
        ["PLAN IGN", "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2", "WMS-Raster et WMTS", "cartes", "FXX + DROM (niveaux de zoom 14-19) - 2026-02"],
        ["Parcellaire Express (PCI) L93", "CADASTRALPARCELS.PARCELLAIRE_EXPRESS.L93", "WMTS", "lambert93", "FXX + DROM - 2025-12"],
        ["BD Ortho RVB 20cm", "HR ORTHOIMAGERY.ORTHOPHOTOS", "WMS-Raster et WMTS", "ortho", "D003, D010, D022, D037 - 2025"],
        ["Photos Aériennes", "ORTHOIMAGERY.ORTHOPHOTOS", "WMS-Raster et WMTS", "ortho", "N/A"],
        ["BD Ortho RVB 50cm", "ORTHOIMAGERY.ORTHOPHOTOS.BDORTHO", "WMS-Raster et WMTS", "ortho", "N/A"],
        ["BD Ortho IRC", "ORTHOIMAGERY.ORTHOPHOTOS.IRC", "WMS-Raster et WMTS", "ortho", "N/A"],
        ["Graphe de mosaïquage BD Ortho", "ORTHOIMAGERY.ORTHOPHOTOS.GRAPHE-MOSAIQUAGE", "WFS et WMS-Vecteur", "ortho", "N/A"],
        ["Photographies aériennes 1965-1980", "ORTHOIMAGERY.ORTHOPHOTOS.1965-1980", "WMS-Raster et WMTS", "orthohisto", "D063 - 1974"],
        ["Parcellaire Express (PCI)", "CADASTRALPARCELS.PARCELLAIRE_EXPRESS", "WMS-Raster et WMTS", "parcellaire", "FXX + DROM - 2025-12"],
        ["Photographies aériennes 1965-1980", "ORTHOIMAGERY.ORTHOPHOTOS.1965-1980", "WMS-Raster et WMTS", "orthohisto", "D063 - 1974"],
        ["Parcellaire Express (PCI)", "CADASTRALPARCELS.PARCELLAIRE_EXPRESS", "WMS-Raster et WMTS", "parcellaire", "FXX + DROM - 2025-12"],
        ["Parcellaire Express (PCI)", "CADASTRALPARCELS.PCI_VECTEUR", "WMS-Vecteur", "parcellaire", "N/A"],
        ["Parcellaire Express (PCI) bâtiment noir", "parcellaire_express_batiment_noir", "WMS-Vecteur", "parcellaire", "N/A"],
        ["Parcellaire Express (PCI) bâtiment orange", "parcellaire_express_batiment_orange", "WMS-Vecteur", "parcellaire", "N/A"],
        ["Parcellaire Express (PCI) numéro", "parcellaire_express_numero", "WMS-Vecteur", "parcellaire", "N/A"],
        ["Parcellaire Express (PCI) parcelle noir", "parcellaire_express_parcelle_noir", "WMS-Vecteur", "parcellaire", "N/A"],
        ["Parcellaire Express (PCI) parcelle orange", "parcellaire_express_parcelle_orange", "WMS-Vecteur", "parcellaire", "N/A"],
        ["Parcellaire Express (PCI) - 9 thématiques", "CADASTRALPARCELS.PARCELLAIRE_EXPRESS:XXX", "WFS", "parcellaire", "N/A"],
        ["Pléiades 2025", "ORTHOIMAGERY.ORTHO-SAT.PLEIADES.2025", "WMS-Raster et WMTS", "satellite", "Littoral France métropolitaine, D971, D972, D977, D978"]
    ]
}) }}

Les ressources PLAN IGN J+1 (GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1 services WMS Raster et WMTS) et BD Géodésie ([IGNF_GEODESIE-XXX services WFS et WMS Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_GEODESIE-ET-NIVELLEMENT){target="_blank" rel="noopener noreferrer" title="GEODESIE ET NIVELLEMENT - ouvre une nouvelle fenêtre"}) sont mises à jour quotidiennement et la ressource Base Adresse Nationale ([BAN.DATA.GOUV services WFS et WMS-Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BAN-PLUS){target="_blank" rel="noopener noreferrer" title="BAN PLUS - ouvre une nouvelle fenêtre"}) est actualisée hebdomadairement.

![Archives Nationales - Carte de Cassini - La Rochelle (17)](/img/partenaires/ign/generalites/actualites/2026-02-cassini.png){.fr-responsive-img .frx-img-contained}

<figcaption class="fr-content-media__caption fr-mb-6v">Archives Nationales - Carte de Cassini - La Rochelle (17)</figcaption>

#### Téléchargement

##### Liste des mises à jour de données en téléchargement

{{ component("table", {
    headers: ["Donnée", "Zone", "Édition"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PLAN-IGN" target="_blank" rel="noopener noreferrer" title="Plan IGN - ouvre une nouvelle fenêtre">PLAN IGN</a>', "FXX + DROM (niveaux de zoom 8-12)", "2025-12"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PLAN-IGN" target="_blank" rel="noopener noreferrer" title="Plan IGN - ouvre une nouvelle fenêtre">PLAN IGN</a>', "DROM (niveaux de zoom 8-19)", "2025-12"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® - ouvre une nouvelle fenêtre">BD ORTHO® IRC</a>', "D043, D048, D063", "2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® - ouvre une nouvelle fenêtre">BD ORTHO® RVB</a>', "D043, D048, D065", "2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ACCESSIBILITE-PHYSIQUE-DES-FORETS" target="_blank" rel="noopener noreferrer" title="Accessibilité physique des forêts - ouvre une nouvelle fenêtre">Accessibilité physique des forêts</a>', "France métropolitaine", "2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/ADMIN-EXPRESS" target="_blank" rel="noopener noreferrer" title="ADMIN-EXPRESS - ouvre une nouvelle fenêtre">ADMIN EXPRESS</a>', "FXX + DROM", "2026-02"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_GEODESIE-ET-NIVELLEMENT" target="_blank" rel="noopener noreferrer" title="GEODESIE ET NIVELLEMENT - ouvre une nouvelle fenêtre">Fiches géodésiques</a>', "FXX + DROM", "2026-02"]
    ]
}) }}

![IGN-F - Accessibilité physique des forêts - Région Occitanie](/img/partenaires/ign/generalites/actualites/2026-02-accessibilite-forets.png){.fr-responsive-img .frx-img-contained}

<figcaption class="fr-content-media__caption fr-mb-6v">IGN-F - Accessibilité physique des forêts - Région Occitanie</figcaption>