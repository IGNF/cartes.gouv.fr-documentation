---
title: Installation de la documentation
date: git Last Modified
tags:
    - Documentation
    - Partenaire
    - Installation
    - Fork
    - Clone
segments:
    - url: /guides/producteur
      title: Guides producteur
    - url: /guides/producteur/creer-des-pages-de-documentation
      title: Créer des pages de documentation
eleventyNavigation:
    key: Installation de la documentation
    parent: Créer des pages de documentation
    order: 1
    nav: producteur
---

{% from "components/component.njk" import component with context %}

Cette page explique la procédure d'installation du projet de documentation de Cartes.gouv.fr, afin d'ouvrir à l'édition les pages de documentation des partenaires.

:::info
Cette documentation s'adresse aux rédacteurs qui souhaitent installer le site localement.
Cette documentation est technique mais vous permet de visualiser vos ajouts/modifications/suppressions dans un navigateur avant d'en demander la fusion avec le dépôt principal github.
:::

# Installation de l'environnement de travail

## Prérequis

Pour disposer d'un environnement de travail confortable, il est recommandé de disposer des logiciels suivants :

- **Visual Studio Code** ([https://code.visualstudio.com/download](https://code.visualstudio.com/download)) comme éditeur pour tous les langages utilisés par le site, notamment le markdown (mais vous pouvez utiliser un autre éditeur si vous préférez)
- **NodeJS** ([https://nodejs.org/en/download/prebuilt-installer](https://nodejs.org/en/download/prebuilt-installer)) pour pouvoir construire le site localement sur votre poste de travail et le prévisualiser.
- **Git** ([https://gitforwindows.org/](https://gitforwindows.org/)), lien pour Windows) pour interagir avec le dépôt de code et github.com.

Git et NodeJS sont indispensables pour aller plus loin dans l'installation.

## Variables d'environnement du compte

Si vous travaillez derrière un proxy, il est nécessaire de vérifier vos variables d'environnement de compte (pas les variables système). Ajouter les variables "HTTP_PROXY" et "HTTPS_PROXY" si elles n'existent pas encore. Renseignez-vous auprès de votre DSI si vous ne connaissez pas les valeurs à indiquer (ces variables sont propres à chaque organisme).

# Installation de la documentation en local

## Dupliquer le dépôt (fork)

Rendez-vous sur le github du projet : [https://github.com/IGNF/cartes.gouv.fr-documentation](https://github.com/IGNF/cartes.gouv.fr-documentation)
Il faut dupliquer le projet sur votre espace GitHub afin de pouvoir faire les changements de votre côté, les prévisualiser, puis les soumettre au dépôt principal.

Dans le coin supérieur droit de la page, cliquez sur **Fork** (**Dupliquer** en français) puis **Create a new fork**.

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant la description précédente](/img/tutoriels/installation-documentation/image-7.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

Dans le champ **Description**, vous pouvez renseigner la description de votre fork/duplication. Si vous le souhaitez, sélectionnez **Copier la branche PAR DÉFAUT** uniquement.

Cliquez sur **Create a new fork** (**Créer une duplication** en français).

Votre fork/duplication du dépôt sera disponible sous l'URL **https://github.com/{votre_pseudo_github}/cartes.gouv.fr-documentation**. Vous bénéficiez alors d'un espace de travail qui vous est propre. Vous pourrez choisir de soumettre au dépôt principal seulement les éléments que vous choisissez.

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant le résultat de la duplication](/img/tutoriels/installation-documentation/image-8.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

## Cloner le dépôt sur votre ordinateur

Sous Windows, après avoir installé _Git for Windows_, vous devriez avoir accès au clic droit dans l'explorateur à un menu contextuel "Git Bash here" qui vous permet de lancer une invite de commande qui est très adaptée à l'utilisation de Git et offre une bonne coloration syntaxique. Il est recommandé de la préférer à l'invite de commande par défaut de Windows.

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant le clic-droit > Git Bash Here](/img/tutoriels/installation-documentation/image.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant l'apparence de la console git](/img/tutoriels/installation-documentation/image-1.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

Les lignes de commandes qui suivent pourront être copiées, puis collées (**maj+Inser** ou clic droit > **paste**) et executées (**Entrée**) dans l'invite de commande qui a été ouverte.

Rendez-vous dans votre dossier à l'endroit où vous souhaitez coller le projet de documentation, puis faites un clic droit > **Git Bash Here** et collez la commande suivante (en remplaçant l'url par celle de votre fork) :

:::callout
git clone https://github.com/{votre_pseudo_github}/cartes.gouv.fr-documentation
:::

Votre fork est maintenant cloné en local sur votre ordinateur.

## Installer les dépendances

Déplacez-vous dans le dossier que vous venez de créer avec la commande suivante :

:::callout
cd cartes.gouv.fr-documentation
:::

Puis lancez la commande suivante :

:::callout
npm install
:::

Cette commande crée un sous-dossier **node_modules** dans lequel vont s'installer toutes les dépendances du projet, conformément à ce qui est décrit dans les fichiers **package.json** et **package-lock.json**.

:::info
Cette commande n'est obligatoire que pour la première installation, ou s'il y a des mises à jour de dépendances.
:::

---

Votre copie est maintenant installée correctement ! Rendez-vous sur la page [Prévisualiser le site en local](http://localhost:8080/fr/guides/producteur/creer-des-pages-de-documentation/previsualiser-le-site-en-local/) pour commencer vos modifications.

---

:::callout Pour aller plus loin
Si vous souhaitez avoir plus de détails sur l'utilisation des forks/duplications :
https://docs.github.com/fr/pull-requests/collaborating-with-pull-requests/working-with-forks
:::
