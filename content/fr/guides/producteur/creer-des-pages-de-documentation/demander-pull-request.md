---
title: Demander la fusion au dépôt principal
tags:
    - Commit
    - Fork
    - Clone
eleventyNavigation:
    key: Demander la fusion au dépôt principal
    parent: Créer des pages de documentation
    order: 5
    nav: producteur
---

{% from "components/component.njk" import component with context %}

Cette page explique la procédure pour fusionner vos modifications faites en local avec le dépôt principal de la documentation de Cartes.gouv.fr.

# Enregistrer

Pensez à bien enregistrer toutes vos modifications, sinon elles ne seront pas prises en compte dans la suite de la procédure. Dans _Visual Studio_ un petit rond apparait à côté du nom du fichier si celui-ci a été modifié et pas encore enregistré.

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant un fichier non enregistré dans Visual Studio](/img/tutoriels/demander-pull-request/image_01.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

# Passer en revue les modifications

Dans l'invite de commande Git Bash, lancez la commande suivante :

:::callout
git status
:::

Cela vous résumera toutes les modifications que vous avez faites sur votre clone local.

:::info
Si des fichiers n'apparaissent pas c'est peut-être parce qu'ils ne sont pas enregistrés.
:::

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant le résultat de la commande git status](/img/tutoriels/demander-pull-request/image_02.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

# Choisir les fichiers à fusionner

Vous pouvez soit ajouter toutes vos modifications avec la commande suivante :

:::callout
git add .
:::

Soit ajouter uniquement certains fichiers un à un avec la commande suivante :

:::callout
git add content/fr/partenaires/partenaireABC/.../monfichier.md
:::

# Pousser les modifications sur votre fork

Il faut maintenant transmettre vos modifications locales à votre fork sur github. Pour cela lancez la commande suivante :

:::callout
git commit -m "un message court décrivant la modification faite"
:::

Acceptez ensuite votre commit avec la commande suivante :

:::callout
git push
:::

# Demander un pull request

La dernière étape consiste à demander au dépôt principal d'accepter vos modifications, il s'agit du _pull request_ (ou de la demande de _merge_).

Rendez-vous sur la page github de votre fork. Github affiche au dessus de la liste des dossiers et fichiers l'état de synchronisation de votre fork (commits en avance ou en retard)

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant l'affichage du statut du fork sur github](/img/tutoriels/mettre-a-jour-fork/image_01.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

Cliquez sur **Contribute** puis sur **Open pull request**

Ajoutez un titre et une description concise puis cliquez sur **Create pull request**.

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant la demande de pull request](/img/tutoriels/demander-pull-request/image_03.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

Un autre membre du projet devra alors vérifier la demande et l'accepter.
