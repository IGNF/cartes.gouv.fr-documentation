---
title: Les millésimes 2026 de Admin Express COG et Limites d’IRIS sont disponibles en téléchargement et en web services sur cartes.gouv.fr
description: Depuis quelques semaines, l’IGN a mis à disposition l’édition 2026 de son offre « Administratif » 
tags:
    - Admin Express COG
    - Iris
eleventyNavigation:
    key: Les millésimes 2026 de Admin Express COG et Limites d’IRIS sont disponibles en téléchargement et en web services sur cartes.gouv.fr
    order: -20260522
date: 2026-05-22
---

{% from "components/component.njk" import component with context %}


Depuis quelques semaines, l’IGN a mis à disposition l’édition 2026 de son offre « Administratif » :

- [Admin Express COG 2026](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ADMIN-EXPRESS), référentiel géographique du découpage administratif du territoire français (de la strate commune à la région) cohérent avec le COG de l’INSEE.

![Offre Admin Express](/img/partenaires/ign/generalites/actualites/2026-05-admin-express-cog/00-admin-express-cog.png){.fr-responsive-img .frx-border-img .frx-img-contained}

 Avec plusieurs nouveautés existantes ou à venir très prochainement : 

<span style="color:orange">**1**</span>	  Ajout d’une couche supplémentaire CARTO_PLUS qui conserve l’échelle des DROM (ce qui permet de visualiser la taille réelle de la Guyane par rapport à la Métropole).

![ADMIN EXPRESS COG CARTO_PLUS PE](/img/partenaires/ign/generalites/actualites/2026-05-admin-express-cog/01-admin-express-cog.png){.fr-responsive-img .frx-border-img .frx-img-contained} 
_Disponible depuis 2025 : une couche CARTO PLUS sans conservation d’échelle appelée :_ ADE-COG-CARTOPLUS-SANS-ECHELLE_4-0_GPKG_LAMB93_FRA-ED2026-01-01.gpkg

![ADMIN EXPRESS COG CARTO_PLUS PE](/img/partenaires/ign/generalites/actualites/2026-05-admin-express-cog/02-admin-express-cog.png){.fr-responsive-img .frx-border-img .frx-img-contained}
_Disponible depuis 2026 :_ 
_Offre CARTO-PLUS enrichie avec 2 couches :_ 
_Sans et avec conservation d’échelle des DROM :_ ADE-COG-CARTOPLUS-AVEC-ECHELLE_4-0_GPKG_LAMB93_FRA-ED2026-01-01.gpkg

<span style="color:orange">**2**</span>   Ajout de 2 nouveaux formats en téléchargement pour ADMIN EXPRESS COG : GeoParquet et FlatGeobuf (disponibles uniquement à l’échelle France entière « FRA » en WGS84)

![ADMIN EXPRESS COG](/img/partenaires/ign/generalites/actualites/2026-05-admin-express-cog/03-admin-express-cog.png){.fr-responsive-img .frx-border-img .frx-img-contained}

<span style="color:orange">**3**</span>   Prochainement (**prévu fin juin**) : Ajout d’un attribut [SIRET] sur les 8 classes de chefs-lieux (ponctuels). Cette information a été initialisée par l’IGN et sera consolidée avec l’INSEE pour le prochain millésime 2027. Cette information permet des croisements facilités avec d’autres bases comme BANATIC.  

{{ component("table", {
  headers: ["Type", "SIRET de l’entité administrative"],
  data: [
    ["Chef-lieu d’arrondissement", "Sous-préfecture"],
    ["Chef-lieu d’arrondissement municipal", "Arrondissement municipal (Paris, Lyon, Marseille)"],
    ["Chef-lieu de collectivité territoriale", "Siège administratif d’une collectivité territoriale qui regroupe les hôtels de région et de départements ainsi que les autres collectivités territoriales à statut particulier type Métropoles."],
    ["Chef-lieu de département", "Préfecture du département"],
    ["Chef-lieu de commune", "Mairie principale de la commune"],
    ["Chef-lieu de commune associée ou déléguée", "Siège d’une commune associée ou déléguée"],
    ["Chef-lieu d’EPCI", "Siège d’un EPCI"],
    ["Chef-lieu de région", "Préfecture de région"]
  ]
}) }}

<span style="color:orange">**4**</span>   Limites d’IRIS 2026, référentiel géographique de la description des IRIS (îlots regroupés pour l’information statistique) recalés sur les surfaces administratives Admin EXPRESS/BD TOPO®. Co-produite et co-éditée avec l’INSEE.

![Offre IRIS](/img/partenaires/ign/generalites/actualites/2026-05-admin-express-cog/04-admin-express-cog.png){.fr-responsive-img .frx-border-img .frx-img-contained}

L’ajout des nouveaux formats GeoParquet et FlatGeobuf sur le produit [IRIS... GE](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_IRIS-GE) est en cours. 