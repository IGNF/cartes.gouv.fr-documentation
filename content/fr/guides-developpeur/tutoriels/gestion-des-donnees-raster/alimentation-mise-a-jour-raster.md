---
title: Alimentation par mise à jour
description: Téléversement d'images géoréférencées, mise à jour de pyramides par injection ou par référence, composition à posteriori
layout: layouts/parent.njk
eleventyNavigation:
    key: Alimentation par mise à jour raster
    parent: Gestion des données raster
    order: 2
    nav: guides-developpeur
pictogram: digital/data-visualization.svg
---

Le but de ce tutoriel est de gérer une pyramide raster mise à jour par livraisons successives.

Il y a plusieurs façons de construire par morceau une pyramide :

- [Au fur et à mesure](../alimentation-mise-a-jour-raster/fur-et-a-mesure) : à chaque nouveau jeu de données, on le livre et on calcule une pyramide qui intègre les nouvelles données et les données de la pyramide précédente. À chaque mise à jour, on a une nouvelle pyramide sur laquelle il est nécessaire de reconfigurer la diffusion
- [Par injection](./parinjection.md) : à chaque nouveau jeu de données, on le livre et on modifie une pyramide déjà existente pour ajouter ces nouvelles données
- [Par composition a posteriori](./composition.md) : chaque jeu de données donne une nouvelle pyramide indépendante. On va ensuite construire une pyramide par fusion

Les descriptions des étapes se limitent aux nouveautés fonctionnelles du tutoriel. Il est conseillé de commencer par le tutoriel de [diffusion raster](../alimentation-diffusion-raster).
