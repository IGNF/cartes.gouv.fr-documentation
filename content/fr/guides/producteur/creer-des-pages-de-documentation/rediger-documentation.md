---
title: Rédiger sa documentation
tags:
    - Rédaction
    - Modification
    - Fork
    - Clone
eleventyNavigation:
    key: Rédiger sa documentation
    parent: Créer des pages de documentation
    order: 3
    nav: producteur
---

{% from "components/component.njk" import component with context %}

Cette page explique la procédure pour créer/modifier/supprimer des pages de documentation pour les partenaires.

:::info
Avant de commencer vos modifications, pensez à effectuer les étapes préalables indiquées page précédente. Vous éviterez ainsi d'éventuels conflits.
:::

# 1 - Prévisualisation sur VS Code

À la suite de l'installation de VS Code, vous pouvez prévisualiser l'écriture de contenu de plusieurs facons. Néanmoins, cette prévisualisation n'englobera pas les composants DSFR. Il faudra déployer le site en local pour avoir une image complète de prévisualisation (cf. page précédente).

## 1.1 - Dans la même fenêtre

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

## 1.2 - Dans un autre onglet de VS Code

Utilisez les raccourcis clavier **Ctrl + Shift + V**

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant le résultat de l'opération précédente](/img/tutoriels/rediger-documentation/image_03.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

# 2 - Effectuer des modifications

## 2.1 - Modifier des fichiers

Il vous suffit d'éditer, de créer ou de supprimer les fichiers dans votre dossier. Lorsque vous enregistrez, la modification est prise en compte par Eleventy et s'affichera dans la prévisualisation en localhost sur votre navigateur.

:::info
la modification peut ne pas bien s'afficher dans le cas d'une création d'un nouveau fichier. Dans ce cas il faut arrêter Eleventy en faisant **ctrl+C** dans l'invite de commande Git Bash, puis relancer la commande **npm start**
:::

## 2.2 - Structure

En tant que rédacteur, vous n'aurez généralement pas de modification à effectuer hors de ces deux dossiers :

- **content** et même uniquement **content/fr/** pour le contenu en français. Ce dossier contient le contenu des pages sous forme de fichiers au format markdown (.md). Les fichiers de ce dossier sont ensuite transformés en pages HTML dans le dossier **\_site** qui est absent du dépôt car généré seulement pour le déploiement.
- **public/img** qui contient les fichiers ne nécessitant pas de transformation pour être affichés dans un navigateur web (notamment les images)

En tant que rédacteur, vous n'aurez généralement pas de modification à effectuer hors de ces 2 dossiers :

- **content** et même uniquement **content/fr/** pour le contenu en français
- **public**

Le contenu de la barre de navigation n'est pas directement déterminée par l'arborescence des dossiers et fichiers mais par le contenu des _cartouches_/_en-têtes_ de chaque fichier.
Il est toutefois conseillé d'avoir une arborescence qui correspond à cette navigation pour faciliter le repérage.

Chaque sous-dossier doit contenir un fichier **nom-du-dossier-parent.11tydata.js** qui permet de déterminer l'arborescence des fichiers adjacents.

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant la présence du fichier .11tydata.js dans les dossiers](/img/tutoriels/rediger-documentation/image_07.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

Ce fichier contient les informations suivantes :

```njk
{% raw %}
module.exports = {
    tags: ["Documentation", "Partenaire", "autreTagPropreAuDossier"],
    segments: [
        {
            url: "/partenaires/producteurABC/dossier/sous-dossier",
            title: "Nom de la page du dossier",
        },
    ],
};
{% endraw %}
```

Chaque dossier doit également contenir un fichier **.md** pour chacun de ses sous-dossiers, portant le même nom que celui-ci.

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant la présence du fichier d'index .md dans les dossiers](/img/tutoriels/rediger-documentation/image_08.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

Ce fichier correspond à la _page d'accueil_ de ce sous-dossier. Il définit via son _en-tête_ l'arborescence du dossier dans la navigation.

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant l'en-tête du fichier de la page index](/img/tutoriels/rediger-documentation/image_09.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

Ce fichier contient en général les liens vers les différentes pages contenues sous forme de cards, dont la syntaxe est la suivante :

```njk
{% raw %}
<div class="fr-grid-row fr-grid-row--gutters">
    <div class="fr-col-md-4">
    {{ component("tile", {
        url: "/partenaires/",
        title: "Titre de la card",
        pictogram: "digital/internet.svg"
    }) }}
    </div>

    <div class="fr-col-md-4">
    {{ component("tile", {
        url: "/partenaires/",
        title: "Titre de la deuxième card",
        pictogram: "digital/internet.svg"
    }) }}
    </div>
</div>
{% endraw %}
```

Complétez l'url avec l'url complète de la page. Ex : /partenaires/producteurABC/dossier/sous-dossier/nom-de-la-page/

## 2.3 - Pages de documentation en markdown

Les pages de documentation sont des fichiers de texte en markdown (.md), éditables avec un logiciel éditeur de texte comme le _Bloc note_, _Notepad++_ ou _VS Code_ (conseillé).

Le texte est découpé en 2 parties : une _en-tête_ (ou _cartouche_) qui contient les métadonnées de la page du site correspondant à ce texte, et le corps du texte.

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant l'entête](/img/tutoriels/rediger-documentation/image_04.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

Si des éléments njk sont utilisés dans la page (par exemple pour afficher une image, un extrait de code, etc.) alors il faut rajouter la ligne suivante après _l'en-tête_ :

```njk
{% raw %}
{% from "components/component.njk" import component with context %}
{% endraw %}
```

La syntaxe propre au [markdown](https://fr.wikipedia.org/wiki/Markdown) est relativement simple. Ci-dessous vous pouvez retrouver les différentes syntaxes à utiliser :

```markdown
# Titre de niveau 1

## Titre de niveau 2

### Titre de niveau 3

[Nom du lien url](https://monurl.fr)
**texte en gras**
_texte en italique_

- liste à puces
- liste à puces

:::info
Contenu de la bulle info
:::

:::warning
Contenu de la bulle warning
:::

:::callout
Contenu du bloc grisé
:::
```

````njk
{% raw %}
Pour afficher une image :
    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Description de l'image](/img/partenaires/producteurABC/.../monImage.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

Pour afficher un extrait de code :
    ```njk
    {% raw %}
        contenu du code
    {% endraw %}
    ```
{% endraw %}
````

(Pensez à bien séparer le bloc image du texte précédent avec un saut de ligne. De plus les espaces sont importants. Les images sont stockées dans le dossier **cartes.gouv.fr-documentation/public/img/partenaires/producteurABC/...**)

---

Vous savez maintenant tout ce qu'il faut savoir pour modifier votre documentation ! Rendez-vous page suivante pour connaitre la procédure pour faire valider ces modifications.

---

:::callout Pour aller plus loin
Si vous souhaitez avoir plus de détails sur l'utilisation de Visual Studio :
[Documentation VStudio](https://learn.microsoft.com/fr-fr/visualstudio/windows/?view=vs-2022)
:::
