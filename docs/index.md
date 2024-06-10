# Principes généraux

Cette documentation explique comment est organisé le dépôt et quels sont les principes de son fonctionnement.

## Un site web statique

Ce dépôt permet de générer un site web statique, c'est à dire composé de pages web dont le contenu ne varie pas en fonction des caractéristiques de la demande. Un site statique fonctionne sans base de données.

Comme il est toutefois peu aisé de rédiger du contenu sous forme de pages HTML directement, avec un système de balisage complexe, ce dépôt utilise un **générateur de site statique** qui va combiner des contenus rédigés dans un langage plus simple, le markdown, avec des gabarits de pages web, pour en faire des pages HTML qu'un serveur web pourra diffuser.

Le générateur de site statique utilisé est [Eleventy](https://www.11ty.dev).

Le site statique est parfois appelé "l'application" ou "le site" dans la suite.

## Arborescence du dépôt

-   `.docker` contient des fichiers de configuration pour conteneuriser l'application avec docker, pour en faire une "image docker" prête pour le déploiement.
-   `.github` contient les templates des formulaires d'issues et les actions pour github (packager l'application, déployer sur github pages)
-   `.husky` contient une instruction qui corrige la syntaxe des fichiers avant qu'ils soient commités (un "pre-commit hook")
-   `.vscode` contient des informations de configuration pour l'éditeur Visual Studio Code
-   `LICENSES` + `LICENSE.md` contient les textes des licences applicables à ce dépôt
-   `_data` contient des données utiles sur l'ensemble du site, notamment des chaines traduites car eleventy gère l'internationalisation
-   `_includes` contient les gabarits des pages et les squelettes des composants au format nunjucks (`.njk`)
-   `content` contient presque tout le contenu du site, toutes ses pages, généralement au format markdown (`.md`) et plus exceptionnellement au format nunjucks
-   `docs` contient la documentation relative au dépôt
-   `public` contient les fichiers qui doivent être disponibles sur le site, sans êtres modifiés par eleventy (images, feuilles de styles,...). On les appelle aussi parfois `assets`.
-   les fichiers placés à la racine du dépôt sont des fichiers de configuration propres à eleventy et à npm.
