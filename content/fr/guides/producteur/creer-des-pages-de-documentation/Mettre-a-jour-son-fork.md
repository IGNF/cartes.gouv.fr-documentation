---
title: Mettre à jour son fork et son clone
tags:
    - Installation
    - Mise à jour
    - Fork
    - Clone
eleventyNavigation:
    key: Mettre à jour son fork et son clone
    parent: Créer des pages de documentation
    order: 2
    nav: producteur
---

{% from "components/component.njk" import component with context %}

Cette page explique la procédure pour mettre à jour son fork (duplication) et son clone local avant de faire des modifications.

# Principe

Afin de partir sur des bases saines il est conseillé de mettre à jour votre fork (duplication github) et votre clone local afin qu'ils soient identiques au dépôt principal. Une fois cela fait, vous pourrez être sûr que les modifications que vous proposez ne viennent pas en conflit avec d'autres modifications récentes.

# Mettre à jour votre fork

Rendez-vous sur la page de votre fork. Github affiche au dessus de la liste des dossiers et fichiers l'état de synchronisation de votre fork (commits en avance ou en retard)

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant l'affichage du statut du fork sur github](/img/tutoriels/mettre-a-jour-fork/image_01.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

Si votre fork a du retard sur le dépôt principal, vous pouvez cliquer sur le bouton "Sync fork" directement pour le mettre à jour.

# Mettre à jour votre clone local

Dans l'invite de commande git Bash lancez la commande suivante :

:::callout
git pull
:::

Si vous avez des modifications locales non enregistrées et que la commande **git pull** vous en informe, il faut mettre de côté les modifications locales avec la commande suivante :

:::callout
git stash
:::

Puis exécutez le **git pull** et enfin réappliquez les modifications locales avec la commande suivante :

:::callout
git stash apply
:::

---

Votre dépôt local est installé et à jour, vous pouvez maintenant passer à la page suivante pour mettre en place la prévisualisation de vos modifications.

---

:::callout Pour aller plus loin
Si vous souhaitez avoir plus de détails sur l'utilisation des forks/duplications :
https://docs.github.com/fr/pull-requests/collaborating-with-pull-requests/working-with-forks
:::
