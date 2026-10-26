---
title: Demander la fusion au dépôt principal
tags:
    - Commit
    - Github
    - Fork
    - Clone
eleventyNavigation:
    key: Demander la fusion au dépôt principal
    order: 5
pictogram: custom/document-upload.svg
description: La dernière étape pour modifier une page
summary:
    visible: true
---

Cette page explique la procédure pour fusionner vos modifications faites en local avec le dépôt principal de la documentation de cartes.gouv.fr.

:::info
Avant de confirmer la fusion, vérifiez que le dépôt principal n’ait pas pris d’avance sur votre `fork` : voir [Étapes préalables aux modifications](../etapes-prealables-aux-modifications/).
:::

## Enregistrer les modifications

Pensez à bien enregistrer toutes vos modifications, sinon elles ne seront pas prises en compte dans la suite de la procédure. Dans Visual Studio Code un petit rond apparait à côté du nom du fichier si celui-ci a été modifié et pas encore enregistré.

![Image décrivant un fichier non enregistré dans Visual Studio](/img/guides-producteur/creer-des-pages-de-documentation/demander-pull-request/01_Fichier-non-enregistre.png){.fr-responsive-img .frx-border-img .frx-img-contained}

---

## Passer en revue les modifications

Gardez l’invite de commande Git Bash utilisée pour faire tourner la prévisualisation avec Eleventy ouvert à part. Ouvrez une nouvelle invite de commande Git Bash à la racine du projet.

Dans la nouvelle invite de commande Git Bash, lancez la commande suivante :

```bash
git status
```

Cela vous résumera toutes les modifications que vous avez faites sur votre clone local.

:::info
Les fichiers non-enregistrés peuvent ne pas apparaître dans la liste des modifications.
:::

![Image décrivant le résultat de la commande git status](/img/guides-producteur/creer-des-pages-de-documentation/demander-pull-request/02_Git-status.png){.fr-responsive-img .frx-border-img .frx-img-contained}

---

## Choisir les fichiers à fusionner

Vous pouvez soit ajouter toutes vos modifications avec la commande suivante :

```bash
git add .
```

Soit ajouter uniquement certains fichiers un à un avec la commande suivante :

```bash
git add content/fr/partenaires/partenaireABC/.../monfichier.md
```

---

## Pousser les modifications sur votre `fork`

Il faut maintenant transmettre vos modifications locales à votre `fork` sur Github. Pour cela lancez la commande suivante pour créer un nouveau paquet (`commit`) :

```bash
git commit -m "un message court décrivant la modification faite"
```

Transférez ensuite votre `commit` à votre `fork` avec la commande suivante :

```bash
git push --set-upstream origin nom-de-votre-branche
```

:::info
À ce moment, si vous voulez ajouter d’autres modifications à cette branche avant la fusion au dépôt principal, il suffira de repasser les commandes `add`, `commit` et `push` telles que présentées ci-dessus.
:::

Vous pouvez voir sur le Github de votre `fork` que celle-ci est à présent en avance de `commit` par rapport au dépôt principal :

![Image décrivant l’avance du fork sur le dépôt princiapl](/img/guides-producteur/creer-des-pages-de-documentation/demander-pull-request/03_Avance-du-fork-sur-le-depot-principal.png){.fr-responsive-img .frx-border-img .frx-img-contained}

---

## Demander une `pull request`

La dernière étape consiste à demander au dépôt principal d’accepter vos modifications, il s’agit de la `pull request` (ou de la demande de `merge`).

En restant sur la même page Github, cliquez sur **« Contribute »** puis sur **« Open pull request »**

Ajoutez un titre et une description concise puis cliquez sur **« Create pull request »**.

![Image décrivant la demande de pull request](/img/guides-producteur/creer-des-pages-de-documentation/demander-pull-request/04_Demande-de-pull-request.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Un autre membre du projet devra alors vérifier la demande et l’accepter. Dès que cela sera fait, les modifications apparaitront sur le site.

---

## Supprimer la branche

Une fois que la `pull request` a été acceptée, il faudra supprimer la branche.

Une `pull request` acceptée apparaitra en violet avec cette icône :

![Image décrivant une pull request acceptée](/img/guides-producteur/creer-des-pages-de-documentation/demander-pull-request/05_Pull-request-accepte.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Pour supprimer une branche, il suffit de se rendre sur Github, sur votre `fork`, et de cliquer sur **« Branch »** :

![Image décrivant comment accéder à ses branches sur github](/img/guides-producteur/creer-des-pages-de-documentation/demander-pull-request/06_Supprimer-branche.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Il vous suffit alors de supprimer la branche concernée par la `pull request` acceptée.

---

Vous avez terminé de créer et de modifier vos pages de documentation ! N’hésitez pas à parcourir le site pour découvrir les autres fonctionnalités de cartes.gouv.fr et de sa documentation.

---

:::callout Pour aller plus loin
Si vous souhaitez avoir plus de détails sur l’utilisation des `pull requests` : [Documentation Github](https://docs.github.com/fr/pull-requests){target="_blank" rel="noopener noreferrer" title="Documentation sur les pull requests - ouvre une nouvelle fenêtre"}
:::
