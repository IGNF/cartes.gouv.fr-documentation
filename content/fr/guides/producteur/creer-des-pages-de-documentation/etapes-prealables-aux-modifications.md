---
title: Étapes préalables aux modifications
tags:
    - Installation
    - Mise à jour
    - Fork
    - Clone
eleventyNavigation:
    key: Étapes préalables aux modifications
    parent: Créer des pages de documentation
    order: 2
    nav: producteur
---

{% from "components/component.njk" import component with context %}

Cette page explique la procédure à suivre avant de faire toute modification de contenu.

# 1 - Principe

Afin de partir sur des bases saines il est conseillé de mettre à jour votre fork (duplication github) et votre clone local afin qu'ils soient identiques au dépôt principal. Une fois cela fait, vous pourrez être sûr que les modifications que vous proposez ne viennent pas en conflit avec d'autres modifications récentes.

# 2 - Mettre à jour votre fork

Rendez-vous sur la page de votre fork. Github affiche au dessus de la liste des dossiers et fichiers l'état de synchronisation de votre fork (commits en avance ou en retard)

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant l'affichage du statut du fork sur github](/img/tutoriels/etapes-prealables-aux-modifications/image_01.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

Si votre fork a du retard sur le dépôt principal, vous pouvez cliquer sur le bouton "Sync fork" directement pour le mettre à jour.

# 3 - Créer une branche

Afin de permettre d'effectuer plusieurs modifications en parallèle et de facilliter la synchronisation, il est conseillé de travailler avec des **branches**. Par défaut votre fork/duplication contient une seule branche, la branche principale (**main**).

Choisissez un nom de branche parlant, qui correspond au périmètre des modifications que vous souhaitez faire, puis lancez la commande suivante dans l'invite de commande Git Bash :

```bash
{% raw %}
git checkout -b "nom-de-la-nouvelle-branche"
{% endraw %}
```

Cette commande créera une nouvelle branche et vous y placera : **(nom-de-la-nouvelle-branche)** est indiqué dans l'invite de commande au lieu de **(main)** :

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant la création de la branche par l'invite de commande Git Bash](/img/tutoriels/etapes-prealables-aux-modifications/image_02.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

:::info
En passant par l'invite de commande cela crée également la branche sur github, il n'est donc pas recommandé de créer la nouvelle branche via github car cela rajouterait une étape.
:::

Pour naviguer entre les branches existantes il faut lancer la commande suivante :

```bash
{% raw %}
git checkout nom-de-la-branche
{% endraw %}
```

Pour lister les branches existantes il faut lancer la commande suivante :

```bash
{% raw %}
git branch -l
{% endraw %}
```

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant le listing et le changement de branches dans l'invite de commande Git Bash](/img/tutoriels/etapes-prealables-aux-modifications/image_03.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

# 4 - Mettre à jour votre clone local

Dans l'invite de commande git Bash lancez la commande suivante :

```bash
{% raw %}
git pull
{% endraw %}
```

Si vous avez des modifications locales non enregistrées et que la commande **git pull** vous en informe, il faut mettre de côté les modifications locales avec la commande suivante :

```bash
{% raw %}
git stash
{% endraw %}
```

Puis exécutez le **git pull** et enfin réappliquez les modifications locales avec la commande suivante :

```bash
{% raw %}
git stash apply
{% endraw %}
```

:::info
Les commandes peuvent se lancer depuis n'importe quelle branches
:::

# 5 - Exécuter Eleventy pour construire le site

Cette procédure permet de prévisualiser votre clone local et toutes les modifications que vous y apportez dans votre navigateur, avant d'en demander la fusion finale au dépôt principal. La prévisualisation est disponible sous l'adresse [http://localhost:8080/fr](http://localhost:8080/fr).

**Eleventy** est le logiciel utilisé pour construire le site. Il transforme les fichiers _markdown_ ou _nunjucks_ du dossier **content** en pages html à l'aide des gabarits du dossier **\_includes**. Ensuite **Pagefind** indexe le contenu de ces pages pour que le moteur de recherche du site soit fonctionnel.

À l'issu de cette commande, le dossier **\_site** est rempli ou modifié avec un contenu HTML, visualisable dans un navigateur.

Lancez la commande suivante :

```bash
{% raw %}
npm start
{% endraw %}
```

Cette commande rend le site disponible à l'adresse [http://localhost:8080/fr/](http://localhost:8080/fr/) et reste active, à l'écoute des changements que vous effectuez dans le projet. Normalement cette commande lance automatiquement la commande npm run build.

Le site est ainsi maintenu à jour en même temps que vous modifiez des fichiers. Mais les contenus modifiés ne sont pas indexés pour la recherche et il peut arriver que certaines modifications ne soient pas immédiatement prises en compte. Dans ce cas, arrêtez le site (**Ctrl+C** dans l'invite de commande git) et relancez les 2 commandes précédentes : **npm run build** puis **npm start**.

:::info
Il est normal que la page d'accueil soit une erreur 404. La page d'accueil réelle et correctement fléchée lors des déploiements en production est **/fr**.
:::

---

Votre site local est à l'écoute ! Rendez-vous page suivante pour commencer à faire des modifications.

---

:::callout Pour aller plus loin
Si vous souhaitez avoir plus de détails sur l'utilisation d'Eleventy :
[Documentation Eleventy](https://codegouvfr.github.io/eleventy-dsfr/fr/blog/navigation/)
:::
