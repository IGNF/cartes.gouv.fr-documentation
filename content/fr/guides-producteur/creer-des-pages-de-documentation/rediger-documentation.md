---
title: Rédiger sa documentation
tags:
    - Rédaction
    - Modification
    - Github
    - Fork
    - Clone
eleventyNavigation:
    key: Rédiger sa documentation
    parent: Créer des pages de documentation
    order: 3
    nav: guides-producteur
pictogram: document/document.svg
description: Créer, modifier ou supprimer des pages
summary:
    visible: true
    depth: 2
---

:::info
Avant de commencer vos modifications, pensez à effectuer les étapes préalables indiquées page précédente. Vous éviterez ainsi d’éventuels conflits.
:::

## Modifier et prévisualiser avec _VS Code_

À la suite de l’installation de _VS Code_, vous pouvez prévisualiser l’écriture de contenu de plusieurs facons. Néanmoins, cette prévisualisation n’englobera pas les composants DSFR. Il faudra déployer le site en local pour avoir une image complète de prévisualisation (cf. page précédente).

Cliquez sur le bouton de prévisualisation (ou utilisez les raccourcis claviers **« crtl+k »** puis **« V »**) :

![Image décrivant le bouton de prévisualisation](/img/guides-producteur/creer-des-pages-de-documentation/rediger-documentation/01_Previsualisation_VS.png){.fr-responsive-img .frx-border-img .frx-img-contained}

![Image décrivant le résultat de l’opération précédente](/img/guides-producteur/creer-des-pages-de-documentation/rediger-documentation/02_Previsualisation_VS.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Lorsque vous enregistrez, la modification est prise en compte par _Eleventy_ et s’affichera dans la prévisualisation en _localhost_ sur votre navigateur.

:::info
la modification peut ne pas bien s’afficher dans le cas d’une création d’un nouveau fichier. Dans ce cas arrêtez _Eleventy_ en faisant **« ctrl+C »** dans l’invite de commande _Git Bash_, puis relancez la commande **« npm start »**
:::

---

## Emplacement des modifications

En tant que rédacteur, vous n’aurez généralement pas de modification à effectuer hors de ces deux dossiers :

- **« content »** et même uniquement **« content/fr/ »** pour le contenu en français. Ce dossier contient le contenu des pages sous forme de fichiers au format _markdown_ (_.md_). Les fichiers de ce dossier sont ensuite transformés en pages _html_ dans le dossier **« _site »** qui est absent du dépôt car généré seulement pour le déploiement.
- **« public »** qui contient les fichiers ne nécessitant pas de transformation pour être affichés dans un navigateur web (notamment les images).

Le contenu de la barre de navigation n’est pas directement déterminée par l’arborescence des dossiers et fichiers mais par le contenu des cartouches (ou en-têtes) de chaque fichier.
Il est toutefois conseillé d’avoir une arborescence qui corresponde à cette navigation pour faciliter le repérage.

---

## Nouveau partenaire

Pour ajouter un nouveau partenaire à la documentation, il faut ajouter un fichier _.md_ dans le dossier **« partenaires »**, contenant les informations suivantes :

```yaml
---
title: Institut national de l’information géographique et forestière
layout: layouts/accueil.njk
image:
    path: ../../../cartes.gouv.fr-documentation/public/img/partenaires/ign.png
    alt: Logo IGN
sidemenuNav: ign
---
```

- **« title »** correspond au titre de votre documentation partenaire.
- **« layout »** est un terme technique à mettre systématiquement.
- **« image/path »** indique le chemin de l’image à ajouter à la _card_ partenaire. L’image doit être déposée dans **« cartes/gouv.fr-documentation/public/img/partenaires/ »**.
- **« image/alt »** indique la description alternative de l’image.
- **« sidemenuNav »** correspond à l’identifiant de navigation au sein de cette documentation partenaire. Cet identifiant devra être indiqué dans les en-têtes des pages filles (voir paragraphe ......) et dans les fichiers _.js_ décrits ci-après.

Dans le fichier _eleventy.config.js_ situé à la racine du projet, en remplaçant **« ign »** par l’identifiant de navigation partenaire déterminé :

```js
eleventyConfig.addCollection("ignNavigation", function (collectionApi) {
    return collectionApi.getAll().filter((item) => {
        return item.data.eleventyNavigation && item.data.eleventyNavigation.nav === "ign";
    });
});
```

Dans le fichier _accueil.njk_ situé dans **« _includes/layouts »**, en remplaçant **« ign »** par l’identifiant de navigation partenaire déterminé et en indiquant le titre de la documentation partenaire :

```njk
{% raw %}
{% elif effectiveNav == "ign" %}
    {% set navLinks = collections.ignNavigation | filterCollectionLang | eleventyNavigation %}
    {% set navCollection = collections.ignNavigation %}
    {% set sidemenuTitle = "Institut national de l’information géographique et forestière" %}
{% endraw %}
```

Dans le fichier _article.njk_ situé dans **« _includes/layouts »**, en remplaçant **« ign »** par l’identifiant de navigation partenaire déterminé et en indiquant le titre de la documentation partenaire :

```njk
{% raw %}
{% elif eleventyNavigation.nav == "ign" %}
    {% set navLinks = collections.ignNavigation | filterCollectionLang | eleventyNavigation %}
    {% set sidemenuTitle = "Institut national de l’information géographique et forestière" %}
{% endraw %}
```

Dans le fichier _parent.njk_ situé dans **« _includes/layouts »**, en remplaçant **« ign »** par l’identifiant de navigation partenaire déterminé et en indiquant le titre de la documentation partenaire :

```njk
{% raw %}
{% elif eleventyNavigation.nav == "ign" %}
    {% set navLinks = collections.ignNavigation | filterCollectionLang | eleventyNavigation %}
    {% set navCollection = collections.ignNavigation %}
    {% set sidemenuTitle = "Institut national de l’information géographique et forestière" %}
{% endraw %}
```

---

## Fichier .md parent

Chaque dossier doit contenir un fichier _.md_ pour chacun de ses sous-dossiers, portant le même nom que celui-ci :

![Image décrivant la présence du fichier d’index .md dans les dossiers](/img/guides-producteur/creer-des-pages-de-documentation/rediger-documentation/04_Fichiers-index-en-markdown.png){.fr-responsive-img .frx-border-img .frx-img-contained}
Ce fichier correspond à la **page d’accueil** de ce sous-dossier. Il définit via son en-tête l’arborescence du dossier dans la navigation. L’en-tête de ce fichier peut être différent suivant deux cas :

Cas n°1 : le sous-dossier correspondant se situe au premier niveau du menu latéral. Dans ce cas il faut écrire l’en-tête comme suit :

```yaml
---
title: Créer des pages de documentation
layout: layouts/parent.njk
description: Création, modification et publication de documentation partenaire sur le site de documentation de Cartes.gouv.fr
tags: - Documentation - Partenaire
eleventyNavigation:
key: Créer des pages de documentation
order: 3
nav: guides-producteur
pictogram: "document/document-add.svg"
---
```

Cas n°2 : le sous-dossier correspondant se situe au deuxième ou au troisième niveau du menu latéral. Dans cas il faut ajouter un élément **« parent »** dans la partie **« eleventyNavigation »** :

```yaml
---
title: Sous-dossier de niveau 2
layout: layouts/parent.njk
description: Description du sous-dossier de niveau 2
tags: - Documentation - Partenaire
eleventyNavigation:
key: Sous-dossier de niveau 2
order: 1
nav: guides-producteur
parent: Créer des pages de documentation
pictogram: "document/document-add.svg"
---
```

Enfin, l’élément **« nav »** dépend de l’emplacement du sous-dossier :

- Au sein d’un des trois guides utilisateur, producteur, développeur : **« guides-utilisateur »**, **« guides-producteur »** ou **« guides-développeur »**.
- Au sein d’une documentation partenaire : indiquez le même identifiant que l’élément **« sidemenuNav »** indiqué dans l’en-tête de la page d’accueil partenaire.

:::info
Voir paragraphe 2.4 pour plus de détails sur les pictogrammes.
:::

:::warning
Attention : le menu latéral ne peut contenir que trois niveaux au maximum !
:::

---

## Fichier .11tydata.js

Chaque sous-dossier doit contenir un fichier **« nom-du-dossier-parent.11tydata.js »** qui permet de déterminer l’arborescence des fichiers adjacents.

![Image décrivant la présence du fichier .11tydata.js dans les dossiers](/img/guides-producteur/creer-des-pages-de-documentation/rediger-documentation/05_Fichier-11tydata.png){.fr-responsive-img .frx-border-img .frx-img-contained}
Ce fichier contient les informations suivantes (modifiez les **« tags »**, **« url »** et **« title »** pour correspondre à votre page) :

```js
module.exports = {
    tags: ["Documentation", "Partenaire"],
    segments: [
        {
            url: "/guides-producteur/creer-des-pages-de-documentation",
            title: "Créer des pages de documentation",
        },
    ],
};
```

---

## Fichier .md décrivant le contenu de la page

Le texte est découpé en 2 parties : un en-tête (ou cartouche) qui contient les métadonnées de la page du site correspondant à ce texte, et le corps du texte. L’en-tête est similaire à celui des pages parents :

```yaml
---
title: Rédiger sa documentation
tags:
    - Rédaction
    - Modification
    - Github
    - Fork
    - Clone
eleventyNavigation:
    key: Rédiger sa documentation
    parent: Créer des pages de documentation
    order: 3
    nav: guides-producteur
pictogram: document/document.svg
description: Créer, modifier ou supprimer des pages
summary:
    visible: true
    depth: 2
---
```

Si des éléments _njk_ (_nunjucks_) sont utilisés dans la page (par exemple pour afficher une image, un extrait de code, etc.) alors il faut rajouter la ligne suivante après l’en-tête :

```njk
{% raw %}
{% from "components/component.njk" import component with context %}
{% endraw %}
```

Le contenu des pages de documentation est rédigé en _markdown_ (_.md_), éditables avec un logiciel éditeur de texte comme le _Bloc note_, _Notepad++_ ou _VS Code_ (conseillé).

La syntaxe propre au <a href="https://fr.wikipedia.org/wiki/Markdown" target="_blank" rel="noopener noreferrer" title="Documentation Markdown - ouvre une nouvelle fenêtre">mardown</a> est relativement simple. Ci-dessous vous pouvez retrouver les différentes syntaxes à utiliser :

```markdown
## Titre de niveau 1

### Titre de niveau 2

#### Titre de niveau 3

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

Pour afficher un lien s’ouvrant dans la même fenêtre :

```markdown
[Nom du lien url](https://monurl.fr)
```

Pour afficher un lien s’ouvrant dans une nouvelle fenêtre :

```html
<a href="https://lien-url.com" target="_blank" rel="noopener noreferrer" title="Titre à afficher au survol - ouvre une nouvelle fenêtre">
    Titre à afficher dans le texte
</a>
```

Pour afficher une image :

```markdown
![Description de l’image](/img/partenaires/producteurABC/.../monImage.png){.fr-responsive-img .frx-border-img .frx-img-contained}
```

Pour afficher un extrait de code :

````njk
{% raw %}
```njk
{% raw %}
    contenu du code
{% endraw %}
```
{% endraw %}
````

Pour afficher un tableau :

```njk
{% raw %}
{{ component("table", {
    headers: ["Titre 1", "Titre 2", "Titre 3"],
    data: [
        ["cellule 1.1", "cellule 1.2", "cellule 1.3"],
        ["cellule 2.1", "cellule 2.2", "cellule 2.3"],
        ["cellule 3.1", "cellule 3.2", "cellule 3.3"]
    ]
}) }}
{% endraw %}
```

:::info
Pensez à bien séparer le bloc image du texte précédent avec un saut de ligne et de garder les espaces tels que présentés ci-dessus.
:::

---

## Images et pictogrammes

Les images sont stockées dans le dossier **« cartes.gouv.fr-documentation/public/img/partenaires/producteurABC/... »**. Il suffit de rajouter votre image dans le dossier correspondant.

Il existe une liste de pictogrammes réutilisables dans le dossier **« cartes.gouv.fr-documentation_site\artwork\pictograms »**. Pour appeler un pictogramme existant dans l’en-tête, il suffit d’indiquer le dossier parent de l’en-tête et son nom :

![Image décrivant l’en-tête du fichier de la page index](/img/guides-producteur/creer-des-pages-de-documentation/rediger-documentation/06_En-tete-et-pictogramme.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Il est possible de créer ses propres pictogrammes customisés. Il faut alors respecter les recommandations du DSFR : <a href="https://www.systeme-de-design.gouv.fr/fondamentaux/pictogramme/" target="_blank" rel="noopener noreferrer" title="Pictogramme Système de Design de l'État - ouvre une nouvelle fenêtre">Pictogramme - Système de Design de l'État </a>

Placez votre pictogramme .svg dans le dossier **« cartes.gouv.fr-documentation\public\artwork\pictograms\custom »**, et appelez le pictogramme dans l’en-tête avec **« custom/nomDuPictogramme.svg »**.

---

Vous savez maintenant tout ce qu’il faut savoir pour modifier votre documentation ! Rendez-vous page suivante pour faire le point sur les bonnes pratiques rédactionnelles à respecter pour rédiger votre documentation.

---

:::callout Pour aller plus loin
Si vous souhaitez avoir plus de détails sur l’utilisation de Visual Studio Code :
<a href="https://code.visualstudio.com/docs" target="_blank" rel="noopener noreferrer" title="Documentation VS Code - ouvre une nouvelle fenêtre">Documentation VS Code</a>
:::
