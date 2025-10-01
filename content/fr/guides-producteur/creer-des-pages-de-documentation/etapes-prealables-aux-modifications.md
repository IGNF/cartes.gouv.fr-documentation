---
title: Étapes préalables aux modifications
tags:
    - Installation
    - Mise à jour
    - Github
    - Fork
    - Clone
eleventyNavigation:
    key: Étapes préalables aux modifications
    parent: Créer des pages de documentation
    order: 2
    nav: guides-producteur
pictogram: digital/in-progress.svg
summary:
    visible: true
---

{% from "components/component.njk" import component with context %}

Cette page explique la procédure à suivre avant de faire toute modification de contenu.

## Principe

Afin de partir sur des bases saines il est conseillé de mettre à jour votre _fork_ (duplication github) et votre clone local afin qu’ils soient identiques au dépôt principal. Une fois cela fait, vous pourrez être sûr que les modifications que vous proposez ne viennent pas en conflit avec d’autres modifications récentes.

## Mettre à jour votre _fork_

Rendez-vous sur la page de votre _fork_. Github affiche au dessus de la liste des dossiers et fichiers l’état de synchronisation de votre _fork_ (commits en avance ou en retard)

![Image décrivant l’affichage du statut du fork sur github](/img/guides-producteur/creer-des-pages-de-documentation/etapes-prealables-aux-modifications/01_Statut-fork-sur-github.png){.fr-responsive-img .frx-border-img .frx-img-contained}
Si votre _fork_ a du retard sur le dépôt principal, vous pouvez cliquer sur le bouton **« Sync *fork* »** directement pour le mettre à jour.

## Créer une branche

Afin de permettre d’effectuer plusieurs modifications en parallèle et de facilliter la synchronisation, il est conseillé de travailler avec des _branches_. Par défaut votre _fork_/duplication contient une seule branche, la branche principale (_main_).

Si ce n'est pas votre première contribution, vous êtes peut-être resté sur une branche de votre contribution précédente. Retournez sur la branche _main_.

```bash
git checkout main
```

Assurez-vous que votre branche main est à jour sur votre poste de travail avant de créer une nouvelle branche.

```bash
git pull
```

Choisissez un nom de branche parlant, qui correspond au périmètre des modifications que vous souhaitez faire, puis lancez la commande suivante dans l’invite de commande *Git Bash* :

```bash
git checkout -b nom-de-la-nouvelle-branche
```

Cette commande créera une nouvelle branche et vous y placera : **« (nom-de-la-nouvelle-branche) »** est indiqué dans l’invite de commande au lieu de **« (main) »** :

![Image décrivant la création de la branche par l’invite de commande Git Bash](/img/guides-producteur/creer-des-pages-de-documentation/etapes-prealables-aux-modifications/02_Creation-branche.png){.fr-responsive-img .frx-border-img .frx-img-contained}

:::warning
En passant par l’invite de commande cela crée également la branche sur github. Il n’est pas recommandé de créer la nouvelle branche via le navigateur car cela rajouterait des étapes supplémentaires qui ne seront pas abordées dans cette documentation.
:::

Pour naviguer entre les branches existantes il faut lancer la commande suivante :

```bash
git checkout nom-de-la-branche
```

Pour lister les branches existantes il faut lancer la commande suivante :

```bash
git branch -l
```

![Image décrivant le listing et le changement de branches dans l’invite de commande Git Bash](/img/guides-producteur/creer-des-pages-de-documentation/etapes-prealables-aux-modifications/03_Liste-des-branches.png){.fr-responsive-img .frx-border-img .frx-img-contained}

## Mettre à jour votre clone local

Dans l’invite de commande _Git Bash_ lancez la commande suivante :

```bash
git pull
```

Si vous avez des modifications locales non enregistrées et que la commande _git pull_ vous en informe, il faut mettre de côté les modifications locales avec la commande suivante :

```bash
git stash
```

Exécutez à nouveau le _git pull_, puis réappliquez les modifications locales avec la commande suivante :

```bash
git stash apply
```

:::info
Les commandes peuvent se lancer depuis n’importe quelle branche mais il est conseillé de se placer à la racine du projet.
:::

## Changer son pseudonyme sur _github_

Par défaut _github_ génère votre pseudonyme à partir des informations de votre ordinateur. Pour modifier le pseudonyme et le courriel à utiliser (qui seront visibles par tous les contributeurs), lancez les commandes suivantes sur *Git Bash* :

```bash
git config --global user.name "MonPseudoGithub"
git config --global user.email mail@domaine.fr
```

## Exécuter _Eleventy_ pour construire le site

Cette procédure permet de prévisualiser votre clone local et toutes les modifications que vous y apportez dans votre navigateur, avant d’en demander la fusion finale au dépôt principal. La prévisualisation est disponible sous l’adresse <a href="http://localhost:8080/fr" target="_blank" rel="noopener noreferrer" title="http://localhost:8080/fr - ouvre une nouvelle fenêtre">http://localhost:8080/fr</a>.

_Eleventy_ est le logiciel utilisé pour construire le site. Il transforme les fichiers _markdown_ ou _nunjucks_ du dossier **« content »** en pages _html_ à l’aide des gabarits du dossier **« _includes »**. Ensuite _Pagefind_ indexe le contenu de ces pages pour que le moteur de recherche du site soit fonctionnel.

À l’issu de cette commande, le dossier **« _site »** est rempli ou modifié avec un contenu _html_, visualisable dans un navigateur.

Lancez la commande suivante :

```bash
npm start
```

Cette commande rend le site disponible à l’adresse <a href="http://localhost:8080/fr" target="_blank" rel="noopener noreferrer" title="http://localhost:8080/fr - ouvre une nouvelle fenêtre">http://localhost:8080/fr</a> et reste active, à l’écoute des changements que vous effectuez dans le projet. Normalement cette commande lance automatiquement la commande _npm run build_.

Le site est ainsi maintenu à jour en même temps que vous modifiez des fichiers. Mais les contenus modifiés ne sont pas indexés pour la recherche et il peut arriver que certaines modifications ne soient pas immédiatement prises en compte. Dans ce cas, arrêtez le site (**« Ctrl+C »** dans l’invite de commande _Git Bash_) et relancez les 2 commandes précédentes : _npm run build_ puis _npm start_.

:::info
Il est normal que la page d’accueil soit une erreur 404. La page d’accueil réelle et correctement fléchée lors des déploiements en production est **« /fr »**.
:::

---

Votre site local est à l’écoute ! Rendez-vous page suivante pour commencer à faire des modifications.

---

:::callout Pour aller plus loin
Si vous souhaitez avoir plus de détails sur l’utilisation de *Eleventy* :
<a href="https://codegouvfr.github.io/eleventy-dsfr/fr/blog/navigation/" target="_blank" rel="noopener noreferrer" title="Documentation Eleventy - ouvre une nouvelle fenêtre">Documentation Eleventy</a>
:::
