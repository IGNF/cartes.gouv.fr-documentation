---
title: Rédiger sa documentation
date: git Last Modified
tags:
    - Documentation
    - Partenaire
    - Rédaction
    - Modification
    - Fork
    - Clone
segments:
    - url: /guides/producteur
      title: Guides producteur
    - url: /guides/producteur/creer-des-pages-de-documentation
      title: Créer des pages de documentation
eleventyNavigation:
    key: Rédiger sa documentation
    parent: Créer des pages de documentation
    order: 4
    nav: producteur
---

{% from "components/component.njk" import component with context %}

Cette page explique la procédure pour créer/modifier/supprimer des pages de documentation pour les partenaires.

:::info
Avant de commencer vos modifications, pensez à mettre à jour votre fork (duplication) et votre clone local pour qu'ils soient identiques au dépôt principal. Vous éviterez ainsi d'éventuels conflits.
:::

# Prévisualisation sur VS Code

À la suite de l'installation de VS Code, vous pouvez prévisualiser l'écriture de contenu de plusieurs facons. Néanmoins, cette prévisualisation n'englobera pas les composants DSFR. Il faudra déployer le site en local pour avoir une image complète de prévisualisation (cf. page précédente).

## Dans la même fenêtre

Cliquez sur le bouton de prévisualisation (ou utilisez les raccourcis claviers **crtl+k** puis **V**) :

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant le bouton de prévisualisation](/img/tutoriels/rediger-documentation/image_01.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant le résultat de l'opération précédente](/img/tutoriels/rediger-documentation/image_02.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

## Dans un autre onglet de VS Code

Utilisez les raccourcis clavier **Ctrl + Shift + V**

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant le résultat de l'opération précédente](/img/tutoriels/rediger-documentation/image_03.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

# Effectuer des modifications

## Modifier des fichiers

Il vous suffit d'éditer, de créer ou de supprimer les fichiers dans votre dossier. Lorsque vous enregistrez, la modification est prise en compte par Eleventy et s'affichera dans la prévisualisation en localhost sur votre navigateur.

:::info
la modification peut ne pas bien s'afficher dans le cas d'une création d'un nouveau fichier. Dans ce cas il faut arrêter Eleventy en faisant **ctrl+C** dans l'invite de commande Git Bash, puis relancer la commande **npm start**
:::

## Pages de documentation en markdown

Les pages de documentation sont des fichiers de texte en markdown (.md), éditables avec un logiciel éditeur de texte comme le _Bloc note_, _Notepad++_ ou _VS Code_ (conseillé).

Le texte est découpé en 2 parties : une _en-tête_ (ou _cartouche_) qui contient les métadonnées de la page du site correspondant à ce texte, et le corps du texte.

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant l'entête](/img/tutoriels/rediger-documentation/image_04.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

La syntaxe propre au [markdown](https://fr.wikipedia.org/wiki/Markdown) est relativement simple.

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant la syntaxe de markdown](/img/tutoriels/rediger-documentation/image_05.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

## Structure

Tout le contenu du site se trouve dans le dossier **content**, sous forme de fichiers au format markdown (.md). Les fichiers de ce dossier sont ensuite transformés en pages HTML dans le dossier **\_site** qui est absent du dépôt car généré seulement pour le déploiement.

Les fichiers qui ne nécessitent pas de transformation pour être affichés dans un navigateur web se trouvent dans le répertoire **public**. C'est ici notamment que se trouvent les images qui illustrent la documentation.

En tant que rédacteur, vous n'aurez généralement pas de modification à effectuer hors de ces 2 dossiers :

- **content** et même uniquement **content/fr/** pour le contenu en français
- **public**

Le contenu de la barre de navigation principale n'est pas directement déterminée par l'arborescence des dossiers et fichiers mais par le contenu des cartouches de chaque fichier.
Il est toutefois conseillé d'avoir une arborescence qui correspond à cette navigation pour faciliter le repérage.

Chaque sous-dossier doit contenir un fichier **index.md** qui correspond à la _page d'accueil_ de ce sous-dossier. Cet index contient en général les liens vers les différentes pages contenues sous forme de cards :

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant le code pour mettre des cards sur la page index](/img/tutoriels/rediger-documentation/image_06.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

---

Vous savez maintenant tout ce qu'il faut savoir pour modifier votre documentation ! Rendez-vous page suivante pour connaitre la procédure pour faire valider ces modifications.

---

:::callout Pour aller plus loin
[Documentation github](https://codegouvfr.github.io/eleventy-dsfr/fr/blog/navigation/)
:::
