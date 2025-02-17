# Cartouche d'en-tête des fichiers markdown pour Eleventy

Le cartouche contient les métadonnées de la page et est situé immédiatement avant le contenu d'un fichier markdown et est délimité par 2 lignes de 3 tirets `---`.

La syntaxe de la partie cartouche est de type `yaml`, c'est à dire constituée de lignes de la forme `clé: valeur` et où l'indentation, qui permet de hiérarchiser les informations, est importante.

## Titre de la page

```yml
title: Titre de la page
```

NB: le titre étant mentionné dans le cartouche, il est inutile de le répéter dans le contenu. Le contenu ne devra donc pas commencer par une ligne débutant par un seul `#`.

## Description

```yml
description: Une description de quelques mots ou quelques phrases de la page
```

La description apparait sur les pages comme un texte "chapeau", juste avant le contenu de la page.

Elle est également présente dans une balise `<meta>` de la page, ce qui va être utile dans les résultats des moteurs de recherche ou en prévisualisation de la page sur les réseaux sociaux.

## Date

Par défaut, les pages du site sont datées du moment de leur dernière révision dans le dépôt.

L'absence de précision dans le cartouche équivaut à :

```yml
date: git Last Modified
```

Il est possible de préciser une date "en dur", mais il est déconseillé de le faire sur toutes les pages. L'horodatage automatique est plus pratique.

## Mots clés

Les mots clés apparaissent en haut de page, sous le titre de la page.

Ils servent également de filtres sur la page de résultats de recherche.

```yml
tags:
    - Géoplateforme
    - Découverte
    - Tutoriel
```

Attention à utiliser toujours les mêmes mots clés. Eviter l'utilisation mélangée du pluriel et du singulier.

## Fil d'ariane

Il est d'usage qu'un fil d'ariane soit présent sur toutes les pages d'un site web. Ceci permet au visiteur de savoir facilement où il se situe dans l'arborescence du site et de pouvoir remonter vers les pages intermédiaires dans la hiérarchie.

Le fil d'ariane commence toujours par un lien vers la page d'accueil et se termine par le titre de la page courante (non cliquable). Entre les 2 doivent se trouver des liens vers des pages intermédiaires dans la hiérarchie du site.

Référence : https://www.systeme-de-design.gouv.fr/composants-et-modeles/composants/fil-d-ariane

Pour un fil d'ariane de cette forme : `Accueil > Documentation producteur > Page courante`. Il suffit de décrire le segment intermédiaire :

```yml
segments:
    - url: /producteur
      title: Documentation producteur
```

## Menu latéral

Dans le cas d'une page longue, il est possible d'ajouter un sommaire sous forme de menu latéral.

```yml

```

Le sommaire sera construit automatiquement à partir de la hiérarchie des titres de la page.

## Exemple

Page de tutoriel sans menu latéral avec 2 niveaux intermédiaires dans le fil d'ariane.

```md
---
title: Contrôle des accès
description: Authentification et accès à l'entrepôt et aux services de diffusion
tags:
    - Contrôle des accès
    - Index des tutoriels
segments:
    - url: /developpeur
      title: Documentation développeur
    - url: /tutoriels
      title: Tutoriels d'utilisation de l'Entrepôt
---

Contenu de la page...
```

## Système d'héritage

Il n'est pas nécessaire de répéter toutes les informations du cartouche sur toutes les pages. Si des propriétés sont identiques entre toutes les pages d'un même dossier `nom-du-dossier`, elles peuvent être écrites une seule fois dans un fichier `nom-du-dossier.11tydata.js` situé à la racine du dossier.

Généralement le gabarit utilisé pour la mise en page ou une partie des mots clés sont partagés entre toutes les pages d'un même dossier.
