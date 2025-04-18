---
title: Prévisualiser le site en local
date: git Last Modified
tags:
    - Documentation
    - Partenaire
    - Installation
segments:
    - url: /guides/producteur
      title: Guides producteur
    - url: /guides/producteur/creer-des-pages-de-documentation
      title: Créer des pages de documentation
eleventyNavigation:
    key: Prévisualiser le site en local
    parent: Créer des pages de documentation
    order: 3
    nav: producteur
---

{% from "components/component.njk" import component with context %}

# Principe

Cette procédure permet de prévisualiser votre clone local et toutes les modifications que vous y apportez dans votre navigateur, avant d'en demander la fusion finale au dépôt principal. La prévisualisation est disponible sous l'adresse [http://localhost:8080/fr](http://localhost:8080/fr).

# Exécuter Eleventy pour construire le site

Rendez-vous dans votre dossier **cartes.gouv.fr-documentation** que vous avez cloné sur votre ordinateur précédemment et faites clic droit > **Git Bash Here** (Si vous venez d'installer le projet alors l'invite de commande doit déjà être ouverte au bon endroit).

Lancez la commande suivante :

:::callout
npm run build
:::

**Eleventy** est le logiciel utilisé pour construire le site. Il transforme les fichiers _markdown_ ou _nunjucks_ du dossier **content** en pages html à l'aide des gabarits du dossier **\_includes**. Ensuite **Pagefind** indexe le contenu de ces pages pour que le moteur de recherche du site soit fonctionnel.

À l'issu de cette commande, le dossier **\_site** est rempli ou modifié avec un contenu HTML, visualisable dans un navigateur.

Lancez la commande suivante :

:::callout
npm start
:::

Cette commande rend le site disponible à l'adresse [http://localhost:8080/fr/](http://localhost:8080/fr/) et reste active, à l'écoute des changements que vous effectuez dans le projet. Normalement cette commande lance automatiquement la commande npm run build.

Le site est ainsi maintenu à jour en même temps que vous modifiez des fichiers. Mais les contenus modifiés ne sont pas indexés pour la recherche et il peut arriver que certaines modifications ne soient pas immédiatement prises en compte. Dans ce cas, arrêtez le site (**Ctrl+C** dans l'invite de commande git) et relancez les 2 commandes précédentes : **npm run build** puis **npm start**.

:::info
Il est normal que la page d'accueil soit une erreur 404. La page d'accueil réelle et correctement fléchée lors des déploiements en production est **/fr**.
:::

---

Votre site local est à l'écoute ! Rendez-vous page suivante pour commencer à faire des modifications.

---

:::callout Pour aller plus loin
Si vous souhaitez avoir plus de détails sur l'utilisation des forks/duplications :
https://docs.github.com/fr/pull-requests/collaborating-with-pull-requests/working-with-forks
:::
