---
title: Étapes préalables aux modifications
tags:
    - Installation
    - Documentation
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
---

{% from "components/component.njk" import component with context %}

Cette page explique la procédure à suivre avant de faire toute modification de contenu.

---

## 1 - Principe :

Afin de partir sur des bases saines il est conseillé de mettre à jour votre _<html lang="en">fork</html>_ (duplication _<html lang="en">github</html>_) et votre clone local afin qu’ils soient identiques au dépôt principal. Une fois cela fait, vous pourrez être sûr que les modifications que vous proposez ne viennent pas en conflit avec d’autres modifications récentes.

---

## 2 - Mettre à jour votre *<html lang="en">fork</html>* :

Rendez-vous sur la page de votre _<html lang="en">fork</html>_. _<html lang="en">Github</html>_ affiche au dessus de la liste des dossiers et fichiers l’état de synchronisation de votre _<html lang="en">fork</html>_ (_<html lang="en">commits</html>_ en avance ou en retard)

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant l’affichage du statut du fork sur github](/img/guides-producteur/creer-des-pages-de-documentation/etapes-prealables-aux-modifications/01_Statut-fork-sur-github.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

Si votre _<html lang="en">fork</html>_ a du retard sur le dépôt principal, vous pouvez cliquer sur le bouton **« Sync fork »** directement pour le mettre à jour.

---

## 3 - Créer une branche :

Afin de permettre d’effectuer plusieurs modifications en parallèle et de facilliter la synchronisation, il est conseillé de travailler avec des **branches**. Par défaut votre _<html lang="en">fork</html>_/duplication contient une seule branche, la branche principale (_<html lang="en">main</html>_).

Choisissez un nom de branche parlant, qui correspond au périmètre des modifications que vous souhaitez faire, puis lancez la commande suivante dans l’invite de commande *<html lang="en">Git Bash</html>* :

```bash
{% raw %}
git checkout -b "nom-de-la-nouvelle-branche"
{% endraw %}
```

Cette commande créera une nouvelle branche et vous y placera : **« (nom-de-la-nouvelle-branche) »** est indiqué dans l’invite de commande au lieu de **« (main) »** :

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant la création de la branche par l’invite de commande Git Bash](/img/guides-producteur/creer-des-pages-de-documentation/etapes-prealables-aux-modifications/02_Creation-branche.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

:::warning
En passant par l’invite de commande cela crée également la branche sur _<html lang="en">github</html>_. Il n’est pas recommandé de créer la nouvelle branche via le navigateur car cela rajouterait des étapes supplémentaires qui ne seront pas abordées dans cette documentation.
:::

Pour naviguer entre les branches existantes il faut lancer la commande suivante :

```bash
{% raw %}
git checkout nom-de-la-branche
{% endraw %}
```

Pour lister les branches existantes il faut lancer la commande suivante :

```bash
{% raw %}
git branch -l
{% endraw %}
```

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant le listing et le changement de branches dans l’invite de commande Git Bash](/img/guides-producteur/creer-des-pages-de-documentation/etapes-prealables-aux-modifications/03_Liste-des-branches.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

---

## 4 - Mettre à jour votre clone local :

Dans l’invite de commande _<html lang="en">Git Bash</html>_ lancez la commande suivante :

```bash
{% raw %}
git pull
{% endraw %}
```

Si vous avez des modifications locales non enregistrées et que la commande _<html lang="en">git pull</html>_ vous en informe, il faut mettre de côté les modifications locales avec la commande suivante :

```bash
{% raw %}
git stash
{% endraw %}
```

Exécutez à nouveau le _<html lang="en">git pull</html>_, puis réappliquez les modifications locales avec la commande suivante :

```bash
{% raw %}
git stash apply
{% endraw %}
```

:::info
Les commandes peuvent se lancer depuis n’importe quelle branche mais il est conseillé de se placer à la racine du projet.
:::

---

## 5 - Changer son pseudonyme sur *<html lang="en">github</html>* :

Par défaut _<html lang="en">github</html>_ génère votre pseudonyme à partir des informations de votre ordinateur. Pour modifier le pseudonyme et le courriel à utiliser (qui seront visibles par tous les contributeurs), lancez les commandes suivantes sur *<html lang="en">Git Bash</html>* :

```bash
{% raw %}
git config --global user.name "MonPseudoGithub"

git config --global user.email mail@domaine.fr
{% endraw %}
```

---

## 6 - Exécuter _<html lang="en">Eleventy</html>_ pour construire le site :

Cette procédure permet de prévisualiser votre clone local et toutes les modifications que vous y apportez dans votre navigateur, avant d’en demander la fusion finale au dépôt principal. La prévisualisation est disponible sous l’adresse <a href="http://localhost:8080/fr" target="_blank" rel="noopener noreferrer" title="http://localhost:8080/fr - ouvre une nouvelle fenêtre">http://localhost:8080/fr</a>.

_<html lang="en">Eleventy</html>_ est le logiciel utilisé pour construire le site. Il transforme les fichiers _<html lang="en">markdown</html>_ ou _<html lang="en">nunjucks</html>_ du dossier **« content »** en pages _<html lang="en">html</html>_ à l’aide des gabarits du dossier **« _includes »**. Ensuite _<html lang="en">Pagefind</html>_ indexe le contenu de ces pages pour que le moteur de recherche du site soit fonctionnel.

À l’issu de cette commande, le dossier **« _site »** est rempli ou modifié avec un contenu _<html lang="en">html</html>_, visualisable dans un navigateur.

Lancez la commande suivante :

```bash
{% raw %}
npm start
{% endraw %}
```

Cette commande rend le site disponible à l’adresse <a href="http://localhost:8080/fr" target="_blank" rel="noopener noreferrer" title="http://localhost:8080/fr - ouvre une nouvelle fenêtre">http://localhost:8080/fr</a> et reste active, à l’écoute des changements que vous effectuez dans le projet. Normalement cette commande lance automatiquement la commande _`npm run build`_.

Le site est ainsi maintenu à jour en même temps que vous modifiez des fichiers. Mais les contenus modifiés ne sont pas indexés pour la recherche et il peut arriver que certaines modifications ne soient pas immédiatement prises en compte. Dans ce cas, arrêtez le site (**« Ctrl+C »** dans l’invite de commande _<html lang="en">Git Bash</html>_) et relancez les 2 commandes précédentes : _`npm run build`_ puis _`npm start`_.

:::info
Il est normal que la page d’accueil soit une erreur 404. La page d’accueil réelle et correctement fléchée lors des déploiements en production est **« /fr »**.
:::

---

Votre site local est à l’écoute ! Rendez-vous page suivante pour commencer à faire des modifications.

---

:::callout Pour aller plus loin
Si vous souhaitez avoir plus de détails sur l’utilisation de *<html lang="en">Eleventy</html>* :
<a href="https://codegouvfr.github.io/eleventy-dsfr/fr/blog/navigation/" target="_blank" rel="noopener noreferrer" title="Documentation Eleventy - ouvre une nouvelle fenêtre">Documentation Eleventy</a>
:::
