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
description: Ce qu’il faut faire avant toute modification
summary:
    visible: true
    depth: 1
---

## Principe

Afin de partir sur des bases saines il est conseillé de mettre à jour votre _<span lang="en">fork</span>_ (duplication github) et votre clone local afin qu’ils soient identiques au dépôt principal. Une fois cela fait, vous pourrez être sûr que les modifications que vous proposez ne viennent pas en conflit avec d’autres modifications récentes.

## Changer son pseudonyme sur _github_

Par défaut _github_ génère votre pseudonyme à partir des informations de votre ordinateur. Pour modifier le pseudonyme et le courriel à utiliser (qui seront visibles par tous les contributeurs), lancez les commandes suivantes sur *Git Bash* :

```bash
git config --global user.name "MonPseudoGithub"
git config --global user.email mail@domaine.fr
```

## Mettre à jour votre _<span lang="en">fork</span>_

Rendez-vous sur la page de votre _<span lang="en">fork</span>_. Github affiche au dessus de la liste des dossiers et fichiers l’état de synchronisation de votre _<span lang="en">fork</span>_ (commits en avance ou en retard)

![Image décrivant l’affichage du statut du fork sur github](/img/guides-producteur/creer-des-pages-de-documentation/etapes-prealables-aux-modifications/01_Statut-fork-sur-github.png){.fr-responsive-img .frx-border-img .frx-img-contained}
Si votre _<span lang="en">fork</span>_ a du retard sur le dépôt principal, vous pouvez cliquer sur le bouton **« Sync _<span lang="en">fork</span>_ »** directement pour le mettre à jour.

## Créer une branche

Afin de permettre d’effectuer plusieurs modifications en parallèle et de facilliter la synchronisation entre collaborateurs, il est conseillé de travailler avec des _branches_. Par défaut votre _<span lang="en">fork</span>_/duplication contient une seule branche : la branche principale (_<span lang="en">main</span>_)._

Si ce n'est pas votre première contribution, vous êtes peut-être resté sur une branche de votre contribution précédente. Retournez sur la branche _<span lang="en">main</span>_.

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

Répercutez ensuite la création de cette branche sur github, en lançant la commande suivante :

```bash
git push origin nom-de-la-nouvelle-branche
```

Pour lister les branches existantes il faut lancer la commande suivante :

```bash
git branch -l
```

Vous pouvez alors naviguer entre les branches existantes avec la commande suivante :

```bash
git checkout nom-de-la-branche
```

![Image décrivant le listing et le changement de branches dans l’invite de commande Git Bash](/img/guides-producteur/creer-des-pages-de-documentation/etapes-prealables-aux-modifications/03_Liste-des-branches.png){.fr-responsive-img .frx-border-img .frx-img-contained}

## Mettre à jour votre clone local

Vous reprenez vos modifications alors que le dépôt principal a été modifié depuis la création de votre branche ? Dans ce cas il faut mettre à jour votre branche github (cf. _3. Mettre à jour votre fork_), puis mettre à jour votre clone en local.

Mettez de côté les modifications locales avec la commande suivante :

```bash
git stash
```

Ainsi elles ne seront pas surchargées par la mise à jour.

Importez la mise à jour avec la commande suivante :

```bash
git pull
```
Enfin, réappliquez les modifications locales sauvegardées avec la commande suivante :

```bash
git stash apply
```

:::info
Les commandes peuvent se lancer depuis n’importe quel sous-dossier mais il est conseillé de se placer à la racine du projet.
:::

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
