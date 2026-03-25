---
title: Portail ENR
description: Un portail cartographique permettant de visualiser et d’analyser les divers enjeux des territoires à prendre en compte dans le développement des énergies renouvelables
tags:
    - Énergies renouvelables
eleventyNavigation:
    key: Portail ENR
    order: 2
image:
    src: /img/partenaires/ign/services-appui-decision/portail-enr.jpg
    alt: Portail ENR
---

{% from "components/component.njk" import component with context %}

[Accéder au portail des Énergies renouvelables](https://planification.climat-energie.gouv.fr){target="_blank" rel="noopener noreferrer" title="planification.climat-energie.gouv.fr - ouvre une nouvelle fenêtre"}

Le présent portail est un système de cartographie permettant de visualiser et d’analyser les divers enjeux des territoires à prendre en compte dans le développement des énergies renouvelables. Il permet d’appuyer les communes dans l’identification de zones potentiellement propices à l’implantation d’énergies renouvelables sur leur territoire, notamment pour définir les zones d’accélération prévues par l’[article 15 de la loi relative à l’accélération de la production d’énergies renouvelables](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000047294266){target="_blank" rel="noopener noreferrer" title="legifrance.gouv.fr/jorf/article_jo/JORFARTI000047294266 - ouvre une nouvelle fenêtre"}. 

Cet outil met à disposition des données objectives, compilables sur le territoire ainsi que des pré-traitements de ces données, pouvant servir d’outils d’aide à la décision pour les collectivités.

Les ressources en ligne du portail sont diffusées librement et peuvent être intégrées dans d’autres outils de visualisation en utilisant la clé partagée « enr ».

[**Cliquez ici pour consulter la carte en plein écran**](https://macarte.ign.fr/carte/1X3jxe/Carte-EnR-Grand-public){target="_blank" rel="noopener noreferrer" title="macarte.ign.fr/carte/1X3jxe/Carte-EnR-Grand-public - ouvre une nouvelle fenêtre"}

<iframe class="fr-mb-6v" width="100%" height="700" src="https://macarte.ign.fr/carte/1X3jxe/Carte-EnR-Grand-public"></iframe>

Succédant à la version bêta publiée le 10 mai 2023, cette nouvelle version a été mise en ligne avec succès le 11 décembre 2023. Plus ergonomique, elle présente de nouvelles fonctionnalités permettant aux communes d’identifier et de saisir les zones d’accélération d’énergies renouvelables (ZAER) sur leur territoire, de demander des avis sur ces zones aux acteurs locaux de la planification énergétique et de les soumettre pour arrêt aux référents préfectoraux. Des vidéos et fiches de documentation sont disponibles ci-contre.

Le gestionnaire de couches a également été enrichi par de nouvelles données et des données mises à jour depuis l’été dernier.

Les informations concernant les départements et régions d’Outre-Mer sont en cours de constitution. Vous pouvez d’ores et déjà retrouver les études existantes [ici](https://www.ecologie.gouv.fr/donnees-sur-developpement-des-energies-renouvelables){target="_blank" rel="noopener noreferrer" title="ecologie.gouv.fr/donnees-sur-developpement-des-energies-renouvelables - ouvre une nouvelle fenêtre"}.

### Communauté

La communauté Expertises-Territoires est l’endroit privilégié pour retrouver toutes les informations et retours d’expérience sur la loi, les fonctionnalités du portail et les données qui le composent. Pour vous y inscrire, suivez [ce lien](https://www.expertises-territoires.fr/jcms/pl1_141479/fr/portail-cartographique-des-energies-renouvelables){target="_blank" rel="noopener noreferrer" title="expertises-territoires.fr/jcms/pl1_141479/fr/portail-cartographique-des-energies-renouvelables - ouvre une nouvelle fenêtre"}.

### Ateliers de standardisation d’une ZAER

Deux ateliers de standardisation d’une ZAER ont eu lieu en septembre dernier afin d’en définir une liste attributaire qui répond à la fois à la commande publique et aux utilisateurs du portail. Vous pouvez en retrouver les conclusions ici :

{{ component("download", {
    title: "Télécharger les conclusions",
    href: "http://data.geopf.fr/annexes/enr/document/zaer/Standard_v1.pdf",
    detail: "PDF - 1Mo"
}) }}

Vous pouvez poser toutes vos questions via notre [formulaire de contact](https://planification.climat-energie.gouv.fr/nous-contacter){target="_blank" rel="noopener noreferrer" title="planification.climat-energie.gouv.fr/nous-contacter - ouvre une nouvelle fenêtre"}.

### Ressources

#### Flux de données

[Voir les services web](https://cartes.gouv.fr/aide/fr/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/diffusion){target="_blank" rel="noopener noreferrer" title="cartes.gouv.fr/aide/fr/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/diffusion - ouvre une nouvelle fenêtre"}

##### Données ENR en WMTS

Les caractéristiques du service sont accessibles via l’<span lang="en">_URL_</span> suivante :

```plain
https://data.geopf.fr/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities
```

Nous proposons également une <span lang="en">_URL_</span> d’accès aux données filtrées sur la thématique enr (attention cette <span lang="en">_URL_</span> ne fonctionne pas avec toutes les applications) :
```plain
https://data.geopf.fr/annexes/ressources/wmts/enr.xml
```

##### Données ENR en WMS-Raster

Les caractéristiques du service sont accessibles via l’<span lang="en">_URL_</span> suivante :
```plain
https://data.geopf.fr/wms-r/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities
```

Nous proposons également une <span lang="en">_URL_</span> d’accès aux données filtrées sur la thématique enr (attention cette <span lang="en">_URL_</span> ne fonctionne pas avec toutes les applications) :

```plain
https://data.geopf.fr/annexes/ressources/wms-r/enr.xml
```

##### Données ENR en WMS-Vecteur

Les caractéristiques du service sont accessibles via l’<span lang="en">_URL_</span> suivante :

```plain
https://data.geopf.fr/wms-v/ows?service=WMS&version=1.3.0&request=GetCapabilities
```

Nous proposons également une <span lang="en">_URL_</span> d’accès aux données filtrées sur la thématique enr (attention cette <span lang="en">_URL_</span> ne fonctionne pas avec toutes les applications) :

```plain
https://data.geopf.fr/annexes/ressources/wms-v/enr.xml
```

##### Données ENR en WFS

Les caractéristiques du service sont accessibles via l’<span lang="en">_URL_</span> suivante :

```plain
https://data.geopf.fr/wfs/ows?SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities
```

#### Téléchargement

##### Zones d’accélération

###### Zones d’accélération arrêtées

France entière

{{ component("download", {
    title: "Télécharger ENR_ZAER_ARRETEES_GPKG_WGS84_FRA.gpkg",
    href: "https://data.geopf.fr/telechargement/download/ZAER_ARRET_GPKG/ZAER_ARRET_GPKG/ENR_ZAER_ARRETEES_GPKG_WGS84_FRA.gpkg",
    detail: "Geopackage - 1026Mo"
}) }}

##### Potentiel solaire électrique et thermique

###### Irradiation solaire horizontale annuelle moyenne

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_IRR-SOL_TIFF_WGS84G_FXX_2023-10-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_IRR-SOL_TIFF_WGS84G_FXX_2023-10-01/ENR_1-0_IRR-SOL_TIFF_WGS84G_FXX_2023-10-01.7z",
    detail: "7-Zip - 14.9Mo"
}) }}

###### Potentiel solaire au sol - couche « clé en main »

France métropolitaine

{{ component("download", {
    title: "Télécharger cadcastres_solaires_detailles.gpkg",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_2-0_POT-SOL-SOL_GPKG_WGS84_WLD_2025-11-01/cadcastres_solaires_detailles.gpkg",
    detail: "Geopackage - 2.4Go"
}) }}

###### Potentiel solaire au sol - friches susceptibles d’accueillir des installations photovoltaïques

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_L14-POT-SOL-FRCH_GPKG_LAMB93_FXX_2023-04-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_L14-POT-SOL-FRCH_GPKG_LAMB93_FXX_2023-04-01/ENR_1-0_L14-POT-SOL-FRCH_GPKG_LAMB93_FXX_2023-04-01.7z",
    detail: "7-Zip - 1Mo"
}) }}

###### Cadastres solaires locaux

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_CAD-SOL-LOC_GPKG_WGS84_FRA_2026-03-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_CAD-SOL-LOC_GPKG_WGS84_FRA_2026-03-01/ENR_1-0_CAD-SOL-LOC_GPKG_WGS84_FRA_2026-03-01.7z",
    detail: "7-Zip - 1236Mo"
}) }}

###### Potentiel solaire sur toiture (méthode simplifiée)

Région Île-de-France - R 11 :

{{ component("download", {
    title: "Télécharger ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R11_2023-07-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R11_2023-07-01/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R11_2023-07-01.7z",
    detail: "7-Zip - 332.3Mo"
}) }}

Région Centre-Val de Loire - R 24 :

{{ component("download", {
    title: "Télécharger ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R24_2023-07-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R24_2023-07-01/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R24_2023-07-01.7z",
    detail: "7-Zip - 235.3Mo"
}) }}

Région Bourgogne-Franche-Comté - R 27 :

{{ component("download", {
    title: "Télécharger ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R27_2023-07-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R27_2023-07-01/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R27_2023-07-01.7z",
    detail: "7-Zip - 248.6Mo"
}) }}

Région Normandie - R 28 :

{{ component("download", {
    title: "Télécharger ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R28_2023-07-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R28_2023-07-01/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R28_2023-07-01.7z",
    detail: "7-Zip - 288Mo"
}) }}

Région Hauts-de-France - R 32 :

{{ component("download", {
    title: "Télécharger ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R32_2023-07-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R32_2023-07-01/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R32_2023-07-01.7z",
    detail: "7-Zip - 432.7Mo"
}) }}

Région Grand Est - R 44 :

{{ component("download", {
    title: "Télécharger ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R44_2023-07-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R44_2023-07-01/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R44_2023-07-01.7z",
    detail: "7-Zip - 424.6Mo"
}) }}

Région Pays de la Loire - R 52 :

{{ component("download", {
    title: "Télécharger ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R52_2023-07-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R52_2023-07-01/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R52_2023-07-01.7z",
    detail: "7-Zip - 363Mo"
}) }}

Région Bretagne - R 53 :

{{ component("download", {
    title: "Télécharger ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R53_2023-07-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R53_2023-07-01/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R53_2023-07-01.7z",
    detail: "7-Zip - 315Mo"
}) }}

Région Nouvelle-Aquitaine - R 75 :

{{ component("download", {
    title: "Télécharger ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R75_2023-07-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R75_2023-07-01/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R75_2023-07-01.7z",
    detail: "7-Zip - 669Mo"
}) }}

Région Occitanie - R 76 :

{{ component("download", {
    title: "Télécharger ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R76_2023-07-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R76_2023-07-01/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R76_2023-07-01.7z",
    detail: "7-Zip - 558Mo"
}) }}

Région Auvergne-Rhône-Alpes - R 84 :

{{ component("download", {
    title: "Télécharger ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R84_2023-07-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R84_2023-07-01/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R84_2023-07-01.7z",
    detail: "7-Zip - 553Mo"
}) }}

Région Provence-Alpes-Côte d’Azur - R 93 :

{{ component("download", {
    title: "Télécharger ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R93_2023-07-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R93_2023-07-01/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R93_2023-07-01.7z",
    detail: "7-Zip - 73.8Mo"
}) }}

Région Corse - R 94 :

{{ component("download", {
    title: "Télécharger ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R94_2023-07-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R94_2023-07-01/ENR_1-0_L21-POT-SOL-BAT_GPKG_LAMB93_R94_2023-07-01.7z",
    detail: "7-Zip - 28Mo"
}) }}

###### Potentiel solaire sur le réseau routier national (DIR)

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_POT-SOL-RRN_GPKG_LAMB93_FXX_2024-04-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_POT-SOL-RRN_GPKG_LAMB93_FXX_2024-04-01/ENR_1-0_POT-SOL-RRN_GPKG_LAMB93_FXX_2024-04-01.7z",
    detail: "7-Zip - 1.3Mo"
}) }}

###### Unités foncières contenant des surfaces de stationnement non couvertes de plus de 500 m² (données déclaratives)

France entière

{{ component("download", {
    title: "Télécharger ENR_2-0_POT-SOL-PARK_GPKG_WGS84G_FRA_2025-12-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_2-0_POT-SOL-PARK_GPKG_WGS84G_FRA_2025-12-01/ENR_2-0_POT-SOL-PARK_GPKG_WGS84G_FRA_2025-12-01.7z",
    detail: "7-Zip - 54.7Mo"
}) }}

###### Surfaces de parking supérieures à 500 m²

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_2-0_PARK-SUP-500_GPKG_WLD_WM_2026-02-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_2-0_PARK-SUP-500_GPKG_WLD_WM_2026-02-01/ENR_2-0_PARK-SUP-500_GPKG_WLD_WM_2026-02-01.7z",
    detail: "7-Zip - 32.6Mo"
}) }}

###### Délaissés autoroutiers

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_2-0_DELSS-AUTORT_GPKG_LAMB93_FXX_2024-10-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_2-0_DELSS-AUTORT_GPKG_LAMB93_FXX_2024-10-01/ENR_2-0_DELSS-AUTORT_GPKG_LAMB93_FXX_2024-10-01.7z",
    detail: "7-Zip - 1.8Mo"
}) }}

##### Potentiel éolien terrestre

###### Contraintes réglementaires liées à l’habitat

France entière

{{ component("download", {
    title: "Télécharger ENR_1-0_ENR-PERIM-HAB_GPKG_WGS84G_FRA_2024-04-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_ENR-PERIM-HAB_GPKG_WGS84G_FRA_2024-04-01/ENR_1-0_ENR-PERIM-HAB_GPKG_WGS84G_FRA_2024-04-01.7z",
    detail: "7-Zip - 133Mo"
}) }}

###### Potentiel éolien terrestre - couche « clé en main »

France entière

{{ component("download", {
    title: "Télécharger ENR_1-0_POT-EOL-REG_GPKG_WGS84G_FRA_2024-06-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_POT-EOL-REG_GPKG_WGS84G_FRA_2024-06-01/ENR_1-0_POT-EOL-REG_GPKG_WGS84G_FRA_2024-06-01.7z",
    detail: "7-Zip - 3.5Go"
}) }}

###### Potentiel éolien terrestre - gisement de vent à 140 m

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_L33-POT-VENT140_GPKG_LAMB93_FXX_2023-06-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_L33-POT-VENT140_GPKG_LAMB93_FXX_2023-06-01/ENR_1-0_L33-POT-VENT140_GPKG_LAMB93_FXX_2023-06-01.7z",
    detail: "7-Zip - 7.8Mo"
}) }}

###### Potentiel éolien terrestre - gisement de vent à 160 m

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_L33-POT-VENT160_GPKG_LAMB93_FXX_2023-06-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_L33-POT-VENT160_GPKG_LAMB93_FXX_2023-06-01/ENR_1-0_L33-POT-VENT160_GPKG_LAMB93_FXX_2023-06-01.7z",
    detail: "7-Zip - 7.8Mo"
}) }}

###### Potentiel éolien terrestre - Contraintes réglementaires liées aux pentes

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_L31-ENR-PERIM-PENT_GPKG_LAMB93_FXX_2023-07-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_L31-ENR-PERIM-PENT_GPKG_LAMB93_FXX_2023-07-01/ENR_1-0_L31-ENR-PERIM-PENT_GPKG_LAMB93_FXX_2023-07-01.7z",
    detail: "7-Zip - 250Mo"
}) }}

###### Potentiel éolien terrestre - Contraintes réglementaires liées aux routes

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_ENR-PERIM-ROUT_GPKG_WGS84G_FXX_2023-10-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_ENR-PERIM-ROUT_GPKG_WGS84G_FXX_2023-10-01/ENR_1-0_ENR-PERIM-ROUT_GPKG_WGS84G_FXX_2023-10-01.7z",
    detail: "7-Zip - 1553Mo"
}) }}

##### Potentiel géothermique

###### Potentiel géothermique en PACA

Région Provence-Alpes-Côte d’Azur

{{ component("download", {
    title: "Télécharger ENR_1-0_L41-POT-GEOTH_GPKG_LAMB93_R93_2023-06-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_L41-POT-GEOTH_GPKG_LAMB93_R93_2023-06-01/ENR_1-0_L41-POT-GEOTH_GPKG_LAMB93_R93_2023-06-01.7z",
    detail: "7-Zip - 3.4Mo"
}) }}

##### Potentiel hydroélectrique

###### Potentiel hydroélectrique sur nouveaux ouvrages

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_POT-HYDR_GPKG_LAMB93_FXX_2024-04-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_POT-HYDR_GPKG_LAMB93_FXX_2024-04-01/ENR_1-0_POT-HYDR_GPKG_LAMB93_FXX_2024-04-01.7z",
    detail: "7-Zip - 3.7Mo"
}) }}

##### Potentiel de méthanisation et biogaz

###### Potentiel méthanisable par cantons

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_L71-POT-METH-2050_GPKG_WGS84G_FXX_2023-06-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_L71-POT-METH-2050_GPKG_WGS84G_FXX_2023-06-01/ENR_1-0_L71-POT-METH-2050_GPKG_WGS84G_FXX_2023-06-01.7z",
    detail: "7-Zip - 2.3Mo"
}) }}

##### Potentiel de développement de réseaux de chaleur et de froid

###### Estimation des besoins de chaleur des bâtiments des secteurs résidentiels et tertiaires

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_ENREZO-BES-C_GPKG_LAMB93_FXX_2024-04-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_ENREZO-BES-C_GPKG_LAMB93_FXX_2024-04-01/ENR_1-0_ENREZO-BES-C_GPKG_LAMB93_FXX_2024-04-01.7z",
    detail: "7-Zip - 234Mo"
}) }}

###### Estimation des besoins de froid des bâtiments des secteurs résidentiels et tertiaires

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_ENREZO-BES-F_GPKG_LAMB93_FXX_2024-04-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_ENREZO-BES-F_GPKG_LAMB93_FXX_2024-04-01/ENR_1-0_ENREZO-BES-F_GPKG_LAMB93_FXX_2024-04-01.7z",
    detail: "7-Zip - 234.6Mo"
}) }}

###### Zones d’opportunité « à potentiel » pour la création ou l’extension de réseaux de chaleur - couche « clé en main »

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_ENREZO-ZON-POT-C_GPKG_LAMB93_FXX_2024-04-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_ENREZO-ZON-POT-C_GPKG_LAMB93_FXX_2024-04-01/ENR_1-0_ENREZO-ZON-POT-C_GPKG_LAMB93_FXX_2024-04-01.7z",
    detail: "7-Zip - 2Mo"
}) }}

###### Zones d’opportunité « à fort potentiel » pour la création ou l’extension de réseaux de chaleur - couche « clé en main »

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_ENREZO-ZON-POT-FOR-C_GPKG_LAMB93_FXX_2024-04-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_ENREZO-ZON-POT-FOR-C_GPKG_LAMB93_FXX_2024-04-01/ENR_1-0_ENREZO-ZON-POT-FOR-C_GPKG_LAMB93_FXX_2024-04-01.7z",
    detail: "7-Zip - 5.5Mo"
}) }}

###### Zones d’opportunité « à potentiel » pour la création ou l’extension de réseaux de froid - couche « clé en main »

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_ENREZO-ZON-POT-F_GPKG_LAMB93_FXX_2024-04-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_ENREZO-ZON-POT-F_GPKG_LAMB93_FXX_2024-04-01/ENR_1-0_ENREZO-ZON-POT-F_GPKG_LAMB93_FXX_2024-04-01.7z",
    detail: "7-Zip - 1.8Mo"
}) }}

###### Zones d’opportunité « à fort potentiel » pour la création ou l’extension de réseaux de froid - couche « clé en main »

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_ENREZO-ZON-POT-FOR-F_GPKG_LAMB93_FXX_2024-04-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_ENREZO-ZON-POT-FOR-F_GPKG_LAMB93_FXX_2024-04-01/ENR_1-0_ENREZO-ZON-POT-FOR-F_GPKG_LAMB93_FXX_2024-04-01.7z",
    detail: "7-Zip - 0.5Mo"
}) }}

##### Localisation des installations de production énergétique

###### Localisation des mâts éoliens

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_LOC-MAT-EOL_GPKG_LAMB93_FXX_2024-04-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_LOC-MAT-EOL_GPKG_LAMB93_FXX_2024-04-01/ENR_1-0_LOC-MAT-EOL_GPKG_LAMB93_FXX_2024-04-01.7z",
    detail: "7-Zip - 0.7Mo"
}) }}

###### Cartographie des accès biométhane

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_ACC-BIOMETH_GPKG_LAMB93_FXX_2024-04-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_ACC-BIOMETH_GPKG_LAMB93_FXX_2024-04-01/ENR_1-0_ACC-BIOMETH_GPKG_LAMB93_FXX_2024-04-01.7z",
    detail: "7-Zip - 0.9Mo"
}) }}

###### Points d’injection de biométhane

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_PNT-INJ-BIOM_GPKG_LAMB93_FXX_2024-04-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_PNT-INJ-BIOM_GPKG_LAMB93_FXX_2024-04-01/ENR_1-0_PNT-INJ-BIOM_GPKG_LAMB93_FXX_2024-04-01.7z",
    detail: "7-Zip - 0.2Mo"
}) }}

###### Localisation des installations de production de chaleur par Biogaz

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_SIT-PRD-C-BIOG_GPKG_LAMB93_FXX_2023-10-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_SIT-PRD-C-BIOG_GPKG_LAMB93_FXX_2023-10-01/ENR_1-0_SIT-PRD-C-BIOG_GPKG_LAMB93_FXX_2023-10-01.7z",
    detail: "7-Zip - 1.5Mo"
}) }}

###### Localisation des installations de production d’électricité pouvant valoriser de la chaleur

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_SIT-PRD-C-COG_GPKG_LAMB93_FXX_2023-10-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_SIT-PRD-C-COG_GPKG_LAMB93_FXX_2023-10-01/ENR_1-0_SIT-PRD-C-COG_GPKG_LAMB93_FXX_2023-10-01.7z",
    detail: "7-Zip - 1.5Mo"
}) }}

###### Localisation des installations de production de chaleur par incinération des déchets

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_SIT-PRD-C-DECH_GPKG_LAMB93_FXX_2023-10-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_SIT-PRD-C-DECH_GPKG_LAMB93_FXX_2023-10-01/ENR_1-0_SIT-PRD-C-DECH_GPKG_LAMB93_FXX_2023-10-01.7z",
    detail: "7-Zip - 1.5Mo"
}) }}

###### Localisation des installations de production de chaleur par méthanisation

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_SIT-PRD-C-METH_GPKG_LAMB93_FXX_2023-10-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_SIT-PRD-C-METH_GPKG_LAMB93_FXX_2023-10-01/ENR_1-0_SIT-PRD-C-METH_GPKG_LAMB93_FXX_2023-10-01.7z",
    detail: "7-Zip - 1.5Mo"
}) }}

###### Localisation des sites de production de chaleur et froid

Région Bretagne - R 53 :

{{ component("download", {
    title: "Télécharger ENR_1-0_L811-SIT-PRD-C-RC-B_GPKG_LAMB93_R53_2023-07-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_L811-SIT-PRD-C-RC-B_GPKG_LAMB93_R53_2023-07-01/ENR_1-0_L811-SIT-PRD-C-RC-B_GPKG_LAMB93_R53_2023-07-01.7z",
    detail: "7-Zip - 22Ko"
}) }}

Région Provence-Alpes-Côte d’Azur - R 93 :

{{ component("download", {
    title: "Télécharger ENR_1-0_L811-SIT-PRD-C-RC-P_GPKG_LAMB93_R93_2023-07-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_L811-SIT-PRD-C-RC-P_GPKG_LAMB93_R93_2023-07-01/ENR_1-0_L811-SIT-PRD-C-RC-P_GPKG_LAMB93_R93_2023-07-01.7z",
    detail: "7-Zip - 46Ko"
}) }}

###### Localisation des réseaux de chaleur et de froid en France

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_L811-SIT-PRD-C-RC_GPKG_LAMB93_FXX_2023-07-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_L811-SIT-PRD-C-RC_GPKG_LAMB93_FXX_2023-07-01/ENR_1-0_L811-SIT-PRD-C-RC_GPKG_LAMB93_FXX_2023-07-01.7z",
    detail: "7-Zip - 0.3Mo"
}) }}

###### Localisation des linéaires de réseaux de chaleur et de froid en France

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_SIT-PRD-C-RCF-L_GPKG_LAMB93_FXX_2023-10-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_SIT-PRD-C-RCF-L_GPKG_LAMB93_FXX_2023-10-01/ENR_1-0_SIT-PRD-C-RCF-L_GPKG_LAMB93_FXX_2023-10-01.7z",
    detail: "7-Zip - 26.7Mo"
}) }}

###### Localisation et estimation du gisement de chaleur fatale des STEP en France

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_ENREZO-C-FAT-STEP_GPKG_LAMB93_FXX_2024-04-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_ENREZO-C-FAT-STEP_GPKG_LAMB93_FXX_2024-04-01/ENR_1-0_ENREZO-C-FAT-STEP_GPKG_LAMB93_FXX_2024-04-01.7z",
    detail: "7-Zip - 0.5Mo"
}) }}

###### Localisation et estimation du gisement de chaleur fatale des 500 plus gros sites industriels de France

France entière

{{ component("download", {
    title: "Télécharger ENR_1-0_ENREZO-C-FAT-500-IND_GPKG_WGS84G_FRA_2024-04-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_ENREZO-C-FAT-500-IND_GPKG_WGS84G_FRA_2024-04-01/ENR_1-0_ENREZO-C-FAT-500-IND_GPKG_WGS84G_FRA_2024-04-01.7z",
    detail: "7-Zip - 0.3Mo"
}) }}

###### Localisation et caractérisation des datacenters en France

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_ENREZO-C-FAT-DTCNTR_GPKG_LAMB93_FXX_2024-04-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_ENREZO-C-FAT-DTCNTR_GPKG_LAMB93_FXX_2024-04-01/ENR_1-0_ENREZO-C-FAT-DTCNTR_GPKG_LAMB93_FXX_2024-04-01.7z",
    detail: "7-Zip - 0.3Mo"
}) }}

##### Productibles annuels

###### Productible annuel par filière énergétique

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_PRD-AN-2021_GPKG_LAMB93_FXX_2023-11-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_PRD-AN-2021_GPKG_LAMB93_FXX_2023-11-01/ENR_1-0_PRD-AN-2021_GPKG_LAMB93_FXX_2023-11-01.7z",
    detail: "7-Zip - 489Mo"
}) }}

###### Productible annuel photovoltaïque par commune

France entière

{{ component("download", {
    title: "Télécharger ENR_1-0_PRD-INST-PV_GPKG_WGS84G_FRA_2023-10-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_PRD-INST-PV_GPKG_WGS84G_FRA_2023-10-01/ENR_1-0_PRD-INST-PV_GPKG_WGS84G_FRA_2023-10-01.7z",
    detail: "7-Zip - 2Mo"
}) }}

##### Puissances cumulées électriques installées

###### Puissance cumulée électrique installée par filière renouvelable par commune

France entière

{{ component("download", {
    title: "Télécharger ENR_1-0_L9-PAR-ENR-COMM_GPKG_WGS84G_FRA_2023-07-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_L9-PAR-ENR-COMM_GPKG_WGS84G_FRA_2023-07-01/ENR_1-0_L9-PAR-ENR-COMM_GPKG_WGS84G_FRA_2023-07-01.7z",
    detail: "7-Zip - 95Ko"
}) }}

###### Puissance cumulée d’injection de biométhane et de la puissance cumulée d’injection de méthanisation électrique

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_PUI-INST_GPKG_LAMB93_FXX_2023-10-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_PUI-INST_GPKG_LAMB93_FXX_2023-10-01/ENR_1-0_PUI-INST_GPKG_LAMB93_FXX_2023-10-01.7z",
    detail: "7-Zip - 90Ko"
}) }}

##### Réseaux et capacités d’accueil

###### Réseau de distribution de gaz

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_GAZ-RES-DISTR_GPKG_LAMB93_FXX_2024-04-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_GAZ-RES-DISTR_GPKG_LAMB93_FXX_2024-04-01/ENR_1-0_GAZ-RES-DISTR_GPKG_LAMB93_FXX_2024-04-01.7z",
    detail: "7-Zip - 469Mo"
}) }}

###### Réseau de transport de gaz

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_GAZ-RES-TRANS_GPKG_LAMB93_FXX_2024-04-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_GAZ-RES-TRANS_GPKG_LAMB93_FXX_2024-04-01/ENR_1-0_GAZ-RES-TRANS_GPKG_LAMB93_FXX_2024-04-01.7z",
    detail: "7-Zip - 1Mo"
}) }}

##### Enjeux du territoire

###### Grands sites de France

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_GSF_GPKG_LAMB93_FXX_2024-04-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_GSF_GPKG_LAMB93_FXX_2024-04-01/ENR_1-0_GSF_GPKG_LAMB93_FXX_2024-04-01.7z",
    detail: "7-Zip - 1Mo"
}) }}

##### Eléments de connaissance sur le territoire

###### Zones d’exclusion des ZAER - éolien terrestre (loi APER)

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_OFB-ZON-EXCL_GPKG_WGS84G_FXX_2024-04-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_OFB-ZON-EXCL_GPKG_WGS84G_FXX_2024-04-01/ENR_1-0_OFB-ZON-EXCL_GPKG_WGS84G_FXX_2024-04-01.7z",
    detail: "7-Zip - 109Mo"
}) }}

###### Zones d’exclusion des ZAER - toutes ENR sauf toitures (loi APER)

France entière

{{ component("download", {
    title: "Télécharger ENR_1-0_OFB-ZON-EXCL-SF-TOIT_GPKG_WGS84G_FRA_2024-04-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_OFB-ZON-EXCL-SF-TOIT_GPKG_WGS84G_FRA_2024-04-01/ENR_1-0_OFB-ZON-EXCL-SF-TOIT_GPKG_WGS84G_FRA_2024-04-01.7z",
    detail: "7-Zip - 18Mo"
}) }}

###### Zonages environnementaux ENR - aires nécessitant l’avis du gestionnaire (loi APER)

France entière

{{ component("download", {
    title: "Télécharger ENR_1-0_OFB-ZON-NCST-AV-GEST_GPKG_WGS84G_FRA_2024-04-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_OFB-ZON-NCST-AV-GEST_GPKG_WGS84G_FRA_2024-04-01/ENR_1-0_OFB-ZON-NCST-AV-GEST_GPKG_WGS84G_FRA_2024-04-01.7z",
    detail: "7-Zip - 230Mo"
}) }}

###### Consommation annuelle d’électricité par commune (en MWh)

France entière

{{ component("download", {
    title: "Télécharger ENR_1-0_L95-CNS-ELEC-COMM_GPKG_WGS84G_FRA_2023-07-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_L95-CNS-ELEC-COMM_GPKG_WGS84G_FRA_2023-07-01/ENR_1-0_L95-CNS-ELEC-COMM_GPKG_WGS84G_FRA_2023-07-01.7z",
    detail: "7-Zip - 239Mo"
}) }}

###### Consommation annuelle de gaz par commune (en MWh)

France métropolitaine

{{ component("download", {
    title: "Télécharger ENR_1-0_L95-CNS-GAZ-COMM_GPKG_LAMB93_FXX_2023-07-01.7z",
    href: "https://data.geopf.fr/telechargement/download/ENR/ENR_1-0_L95-CNS-GAZ-COMM_GPKG_LAMB93_FXX_2023-07-01/ENR_1-0_L95-CNS-GAZ-COMM_GPKG_LAMB93_FXX_2023-07-01.7z",
    detail: "7-Zip - 22.4Mo"
}) }}

#### Guides utilisateurs

{{ component("download", {
    title: "Télécharger le guide pas-à-pas sur la thématique ENR « Thermique »",
    href: "http://data.geopf.fr/annexes/enr/document/guide/Pas_a_pas_EnR_thermique.pdf",
    detail: "PDF - 8.5Mo"
}) }}

{{ component("download", {
    title: "Télécharger le guide pas-à-pas sur les thématiques ENR « Éolien et Solaire »",
    href: "http://data.geopf.fr/annexes/enr/document/guide/Pas_a_pas_EnR_eolien_solaire.pdf",
    detail: "PDF - 10.4Mo"
}) }}

{{ component("download", {
    title: "Télécharger le guide pour importer une zone",
    href: "http://data.geopf.fr/annexes/enr/document/guide/Importer_une_zone.pdf",
    detail: "PDF - 0.5Mo"
}) }}

{{ component("download", {
    title: "Télécharger le guide pour saisir et modifier une ZAER",
    href: "http://data.geopf.fr/annexes/enr/document/guide/Saisir_et_modifier_une_zone.pdf",
    detail: "PDF - 0.4Mo"
}) }}

{{ component("download", {
    title: "Télécharger le guide pour soumettre une ZAER",
    href: "http://data.geopf.fr/annexes/enr/document/guide/Soumettre_une_zone.pdf",
    detail: "PDF - 0.2Mo"
}) }}

#### Tutoriels vidéo

<a href="https://youtu.be/e70qb_-BtJ0" target="_blank" rel="noopener noreferrer" title="youtu.be/e70qb_-BtJ0 - ouvre une nouvelle fenêtre">Découverte du nouveau portail cartographique ENR</a>

[Comment saisir et modifier une ZAER ?](https://youtu.be/zfMwESemjDs){target="_blank" rel="noopener noreferrer" title="youtu.be/zfMwESemjDs - ouvre une nouvelle fenêtre"}

[Comment importer une ZAER ?](https://youtu.be/cHEKNBnS_RE){target="_blank" rel="noopener noreferrer" title="youtu.be/cHEKNBnS_RE - ouvre une nouvelle fenêtre"}

[Comment soumettre une ZAER ?](https://youtu.be/z1aptJsgLXg){target="_blank" rel="noopener noreferrer" title="youtu.be/z1aptJsgLXg - ouvre une nouvelle fenêtre"}

[Comment suivre l’avancement d’une ZAER grâce au tableau de bord ?](https://youtu.be/BFojxDuZ3uE){target="_blank" rel="noopener noreferrer" title="youtu.be/BFojxDuZ3uE - ouvre une nouvelle fenêtre"}

[Cas d’usage « éolien terrestre »](https://youtu.be/YP86vI0lH5U?si=7yq2vFwGyFRWka8T){target="_blank" rel="noopener noreferrer" title="youtu.be/YP86vI0lH5U?si=7yq2vFwGyFRWka8T - ouvre une nouvelle fenêtre"}

[Cas d’usage « réseau chaleur »](https://youtu.be/cM532dClmU4){target="_blank" rel="noopener noreferrer" title="youtu.be/cM532dClmU4 - ouvre une nouvelle fenêtre"}

[Cas d’usage « solaire électrique »](https://youtu.be/Cp8HoOCOtu8){target="_blank" rel="noopener noreferrer" title="youtu.be/Cp8HoOCOtu8 - ouvre une nouvelle fenêtre"}

#### Documents

{{ component("download", {
    title: "Standardisation ZAER",
    href: "http://data.geopf.fr/annexes/enr/document/zaer/Standard_v1.pdf",
    detail: "PDF - 1Mo"
}) }}

{{ component("download", {
    title: "Exemple ZAER GeoJSON",
    href: "http://data.geopf.fr/annexes/enr/document/zaer/Exemple_v1.zip",
    detail: "Zip - 1Ko"
}) }}

{{ component("download", {
    title: "Gabarit - cadastre solaire sur toiture local",
    href: "http://data.geopf.fr/annexes/enr/document/zaer/Cadastres_solaires_locaux.pdf",
    detail: "PDF - 0.2Mo"
}) }}

#### Webinaires

[25 Octobre 2023](https://www.expertises-territoires.fr/jcms/pl1_245594/fr/webinaire-national-3?eventStartDate=1698220800000){target="_blank" rel="noopener noreferrer" title="expertises-territoires.fr/jcms/pl1_245594/fr/webinaire-national-3 - ouvre une nouvelle fenêtre"}