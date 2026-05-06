---
title: Des changements sur le Téléchargement
description: Ajout d’agrégat d’informations dans la description d’une ressource de téléchargement, de nouveaux paramètres de tri des entrées d’une ressource et du bon content type pour les fichiers Géoparquet téléchargés
tags:
    - Téléchargement
eleventyNavigation:
    key: Des changements sur le Téléchargement
    order: 29
---

## Changements

**Ajout d’agrégat d’informations dans la description d’une ressource de téléchargement**

Dans un <span lang="en">_GET resource_</span>, dans la description de la ressource, est ajouté un agrégat des zones, formats et SRS ainsi que les dates min et max de l’édition (comme cela est fait pour chaque ressource dans le <span lang="en">_GetCapabilities_</span>)

**Ajout des paramètres de tri des entrées d’une ressource pour le téléchargement**

Actuellement, la liste des sous-ressources d’une ressource donnée est triée par ordre alphabétique.

Il sera maintenant possible de trier les sous-ressources avec le paramètre sortEntriesBy qui pourra prendre ces valeurs :
- title : par ordre alphabétique
- editionDate : par date d’édition

Il sera possible de trier de façon croissante et décroissante avec le paramètre « sortEntriesOrder » qui prendra les valeurs :
- asc : croissant
- desc : décroissant

**Ajout du bon <span lang="en">_content type_</span> pour les fichiers Géoparquet téléchargés**

Lorsque l’on télécharge un fichier Géoparquet, le <span lang="en">_content type_</span> sera « application/vnd.apache.parquet » (au lieu de « application/octet-stream » actuellement)