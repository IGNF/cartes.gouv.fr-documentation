---
title: Autocomplétion
tags:
    - Autocomplétion
eleventyNavigation:
    key: Autocomplétion
    parent: Accéder aux géodonnées
    order: 5
    nav: guides-utilisateur
summary:
    visible: true
---

## Présentation

L’API d’autocomplétion de la Géoplateforme a pour but de suggérer des localisants probables, au fur et à mesure de la saisie d’adresses ou de noms de lieux.

Son usage est limité à 10 requêtes par seconde depuis une même adresse IP.

Elle s’appuie sur des données BAN, BD TOPO® et Parcellaire Express (PCI).

L’API est interrogeable en méthode GET.

Son swagger est accessible ici : [swagger de l’autocomplétion](https://data.geopf.fr/geocodage/completion/openapi).

## Capacités de l’API (getCapabilities)

La requête **getCapabilities** permet de découvrir les capacités de l’API : les opérations possibles, les ressources disponibles et les options proposées.

Elle est accessible via l’URL suivante : 

```plain
https://data.geopf.fr/geocodage/completion/getCapabilities
```

Cette requête ne requiert aucun paramètre.

## Obtenir des suggestions (completion)

La requête **completion** permet d’obtenir des suggestions de complétion d’un texte.

Elle est accessible via l’URL suivante : 

```plain
https://data.geopf.fr/geocodage/completion/?text={text}&terr={terr}&poiType={poiType}&lonlat={lonlat}&type={type}&maximumResponses={maximumResponses}&bbox={bbox}
```

Cette requête a pour caractéristiques :

 * Méthode : GET
 * Paramètre obligatoire : 
    * **text**
        * Description : le texte devant être complété
 * Paramètres facultatifs : 
    * **terr**
        * Description : une limitation de la zone de recherche de localisants (une liste peut être fournie en séparant les valeurs par des virgules)
        * Valeurs possibles : METROPOLE, DOMTOM, code(s) INSEE de département, code(s) postaux de commune
    * **poiType**
        * Description : filtre sur le type de localisant pour le type POI
        * Valeurs possibles : celles listées dans le getCapabilities (exemples : administratif, pont...) 
    * **lonlat**
        * Description : coordonnées (longitude,latitude) d’un localisant pour favoriser les candidats les plus proches
        * Valeur possible de longitude : de -180 à +180
        * Valeur possible de latitude : de -90 à +90
    * **type**
        * Description : le type de localisants recherchés (il est possible de spécifier plusieurs types séparés par une virgule)
        * Valeurs possibles : PositionOfInterest, StreetAddress
    * **maximumResponses**
        * Description : le nombre maximum de réponses que l’on souhaite voir retournées
        * Valeurs possibles : entre 1 et 15
    * **bbox**
        * Description : filtre avec une bbox suivant l’ordre Xmin,Ymin,Xmax,Ymax

Exemple de requête : 

```plain
https://data.geopf.fr/geocodage/completion/?text=vincenn&terr=94&poiType=administratif&type=StreetAddress&maximumResponses=2
```
