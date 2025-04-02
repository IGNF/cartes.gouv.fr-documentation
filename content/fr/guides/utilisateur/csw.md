---
title: API de découverte des métadonnées CSW
tags:
    - Métadonnées
    - CSW
segments:
    - url: "/guides/utilisateur/"
      title: "Guides Utilisateur"
eleventyNavigation:
    key: API de découverte des métadonnées CSW
    order: 7
    nav: utilisateur
---

## Présentation

Ce service permet la recherche et la consultation de métadonnées de la Géoplateforme (métadonnées de services et données de la Géoplateforme).

Il s’appuie sur la norme [CSW ISO AP 2.0.2](https://www.ogc.org/standard/cat/) et propose 3 méthodes :

- **GetCapabilities** pour découvrir les capacités du service
- **GetRecords** pour lister les métadonnées
- **GetRecordByID** pour consulter une métadonnée

## GetCapabilities

La méthode GetCapabilities permet d'obtenir les capacités du service.

Elle est accessible via l'URL suivante :

```plain
https://data.geopf.fr/csw?SERVICE=CSW&REQUEST=GetCapabilities&VERSION=2.0.2
```

Cette méthode permet notamment de consulter les types de métadonnées (`TYPENAMES`) disponibles.

## GetRecords

La méthode "GetRecords" permet d'obtenir la liste des métadonnées.

Elle est accessible via l'URL suivante :

```plain
https://data.geopf.fr/csw?SERVICE=CSW&REQUEST=GetRecords&VERSION=2.0.2&TYPENAMES={typenames}&RESULTTYPE=results&MAXRECORDS={maxrecords}&STARTPOSITION={startposition}
```

Elle utilise les variables suivantes :

- **TYPENAMES** le type de métadonnées recherché avec le choix parmi :
    - `csw:Record`
    - `gfc:FC_FeatureCatalogue`
    - `dcat`
    - `gmd:MD_Metadata`
    - `mdb:MD_Metadata`
- **MAXRECORDS** le nombre maximum de résultats par page
- **STARTPOSITION** le numéro du premier résultat affiché, cet index débutant à 1

Par exemple, pour le `TYPENAMES` `gmd:MD_Metadata`, en affichant 50 résultats à partir du 1er résultat, l'URL sera :

```plain
https://data.geopf.fr/csw?SERVICE=CSW&REQUEST=GetRecords&VERSION=2.0.2&TYPENAMES=gmd:MD_Metadata&RESULTTYPE=results&MAXRECORDS=50&STARTPOSITION=1
```

## GetRecordByID

La méthode `GetRecordByID` permet de consulter une métadonnée à partir de son identifiant.

Elle est accessible via l'URL suivante :

```plain
https://data.geopf.fr/csw?REQUEST=GetRecordById&SERVICE=CSW&VERSION=2.0.2&OUTPUTSCHEMA=http://standards.iso.org/iso/19115/-3/mdb/2.0&elementSetName=full&ID={ID}
```

Par exemple, la métadonnée _IGNF_GEOFLAr_2-2.xml_ sera consultable via l'URL :

```plain
https://data.geopf.fr/csw?REQUEST=GetRecordById&SERVICE=CSW&VERSION=2.0.2&OUTPUTSCHEMA=http://standards.iso.org/iso/19115/-3/mdb/2.0&elementSetName=full&ID=IGNF_GEOFLAr_2-2.xml
```
