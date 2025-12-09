---
title: Limites d’usage des API
tags:
    - Fair use
    - API
eleventyNavigation:
    key: Limites d’usage des API
    parent: Utiliser les services de la Géoplateforme
    order: 11
    nav: guides-utilisateur
summary:
    visible: true
pictogram: "system/information.svg"
description: Nombre de requêtes par seconde autorisées
---

{% from "components/component.njk" import component with context %}

## Principe de fonctionnement

Pour certaines API, une limite d’usage fixée en nombre de requêtes par seconde et par IP est mise en place.

Ce mécanisme, dit de « rate limiting », concerne la plupart des API de la Géoplateforme à l’exception notable de l’API « Diffusion d’images tuilées WMTS » et son pendant « Diffusion de tuiles vectorielles TMS ». Il a pour objectif de garantir les engagements de disponibilité des API, en bloquant les usages individuels les plus massifs qui seraient susceptibles de mettre à mal l’infrastructure.

Lorsqu’une IP sollicite une API au-delà de la limite d’usage fixée :

 * Une erreur HTML 429 (Too Many Requests) est envoyée en réponse à toute requête ;
 * Ce blocage intervient pour une durée de 5 secondes et il ne concerne que l’API dont la limite d’usage a été franchie (à titre d’exemple, si la limite du calcul altimétrique est dépassée, le WMS reste accessible) ;
 * La durée du blocage est indiquée dans un header "retry-after", avec une durée initialisée à 5 secondes et qui décroît à partir du moment où la sur-sollicitation cesse.

## Valeur de la limite d’usage pour chaque API concernée

Les limites d’usage fixées sont les suivantes :

{{ component("table", {
    title: "Limites d’usage des API Géoplateforme",
    headers: ["API", "Limite d’usage par IP"],
    data: [
        ["Diffusion d’images WMS-Raster"," 40 requêtes/s"],
        ["Diffusion d’images WMS-Vecteur"," 50 requêtes/s"],
        ["Diffusion d’objets WFS"," 30 requêtes/s"],
        ["Téléchargement"," 10 requêtes/s"],
        ["Téléchargement partiel"," 200 requêtes/s"],
        ["Découverte des métadonnées CSW"," 15 requêtes/s"],
        ["Géocodage"," 50 requêtes/s"],
        ["Autocomplétion"," 10 requêtes/s"],
        ["Calcul altimétrique"," 5 requêtes/s"],
        ["Calcul d’itinéraire"," 5 requêtes/s"],
        ["Calcul d’isochrone/isodistance"," 5 requêtes/s"],
        ["Recherche"," 10 requêtes/s"],
        ["Diffusion de tuiles vectorielles pg_tileserv"," 400 requêtes/s"],
        ["LiDAR « vraie pyramide »"," 200 requêtes/s"],
        ["LiDAR « COPC » au vol (partiel)"," 200 requêtes/s"],
        ["LiDAR téléchargement COPC"," 10 requêtes/s"]
    ]
}) }}

## Exemple de fonctionnement

Prenons l’exemple du géocodage d’un fichier de 1000 lignes au moyen d’un script faisant appel à l’API de géocodage de la Géoplateforme.

Si le script sollicite l’API de géocodage sans précaution particulière, avec une fréquence qui dépasse la limite d’usage de 50 requêtes par seconde et par IP, alors :

    Les 50 premiers appels sont traités normalement ;
    Le 51ème appel et les suivants sont bloqués tant que le script continue à solliciter l’API de géocodage au-delà de la limite de 50 requêtes par seconde et que le délai de 5 secondes qui s’en suit n’est pas écoulé.

Solution : paramétrer le script de telle sorte que la fréquence d’appel à l’API de géocodage ne dépasse pas 50 requêtes par seconde, en instaurant par exemple un plafond à 40 ou 45 requêtes par seconde.

À titre d’illustration, pour une utilisation de l’ETL "FME" édité par Safe Software, le paramétrage de la fréquence d’appel peut être effectué comme suit :

![Paramétrage de la fréquence d’appel sous FME, copie d’écran de l’interface](/img/guides-utilisateur/acceder-aux-geodonnees/limites-d-usage/rate-limiting-fme.png){.fr-responsive-img .frx-border-img .frx-img-contained}
