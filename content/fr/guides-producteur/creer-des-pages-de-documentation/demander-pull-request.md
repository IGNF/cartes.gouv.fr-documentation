---
title: Demander la fusion au dépôt principal
tags:
    - Commit
    - Github
    - Fork
    - Clone
eleventyNavigation:
    key: Demander la fusion au dépôt principal
    parent: Créer des pages de documentation
    order: 5
    nav: guides-producteur
pictogram: custom/document-upload.svg
description: La dernière étape pour modifier une page
summary:
    visible: true
---

Cette page explique la procédure pour fusionner vos modifications faites en local avec le dépôt principal de la documentation de cartes.gouv.fr.

:::info
Avant de confirmer la fusion, vérifiez que le dépôt principal n’ait pas pris d’avance sur votre *fork* : voir [Étapes préalables aux modifications](./etapes-initiales-aux-modifications/).
:::

## Enregistrer les modifications

Pensez à bien enregistrer toutes vos modifications, sinon elles ne seront pas prises en compte dans la suite de la procédure. Dans _Visual Studio_ un petit rond apparait à côté du nom du fichier si celui-ci a été modifié et pas encore enregistré.

![Image décrivant un fichier non enregistré dans Visual Studio](/img/guides-producteur/creer-des-pages-de-documentation/demander-pull-request/01_Fichier-non-enregistre.png){.fr-responsive-img .frx-border-img .frx-img-contained}

---

## Passer en revue les modifications

Gardez l’invite de commande _Git Bash_ utilisée pour faire tourner la prévisualisation avec _Eleventy_ ouvert à part. Ouvrez une nouvelle invite de commande _Git Bash_ à la racine du projet.

Dans la nouvelle invite de commande _Git Bash_, lancez la commande suivante :

```bash
git status
```

Cela vous résumera toutes les modifications que vous avez faites sur votre clone local.

:::info
Les fichiers non-enregistrés peuvent ne pas apparaitre dans la liste des modifications.
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

## Pousser les modifications sur votre _fork_

Il faut maintenant transmettre vos modifications locales à votre _fork_ sur _github_. Pour cela lancez la commande suivante pour créer un nouveau paquet (_commit_) :

```bash
git commit -m "un message court décrivant la modification faite"
```

Transférez ensuite votre _commit_ à votre _fork_ avec la commande suivante :

```bash
git push --set-upstream origin nom-de-votre-branche
```

:::info
À ce moment, si vous voulez ajouter d’autres modifications à cette branche avant la fusion au dépôt principal, il suffira de repasser les commandes _add_, _commit_ et _push_ telles que présentées ci-dessus.
:::

Vous pouvez voir sur le _github_ de votre _fork_ que celle-ci est à présent en avance de _commit_ par rapport au dépôt principal :

![Image décrivant l’avance du fork sur le dépôt princiapl](/img/guides-producteur/creer-des-pages-de-documentation/demander-pull-request/03_Avance-du-fork-sur-le-depot-principal.png){.fr-responsive-img .frx-border-img .frx-img-contained}

---

## Demander une _pull request_

La dernière étape consiste à demander au dépôt principal d’accepter vos modifications, il s’agit de la _pull request_ (ou de la demande de _merge_).

En restant sur la même page _github_, cliquez sur **« Contribute »** puis sur **« Open pull request »**

Ajoutez un titre et une description concise puis cliquez sur **« Create pull request »**.

![Image décrivant la demande de pull request](/img/guides-producteur/creer-des-pages-de-documentation/demander-pull-request/04_Demande-de-pull-request.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Un autre membre du projet devra alors vérifier la demande et l’accepter. Dès que cela sera fait, les modifications apparaitront sur le site.

---

## Supprimer la branche

Une fois que la _pull request_ a été acceptée, il faudra supprimer la branche.

Une _pull request_ acceptée apparaitra en violet avec cette icône :

![Image décrivant une pull request acceptée](/img/guides-producteur/creer-des-pages-de-documentation/demander-pull-request/05_Pull-request-accepte.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Pour supprimer une branche, il suffit de se rendre sur _github_, sur votre _fork_, et de cliquer sur **« Branch »** :

![Image décrivant comment accéder à ses branches sur github](/img/guides-producteur/creer-des-pages-de-documentation/demander-pull-request/06_Supprimer-branche.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Il vous suffit alors de supprimer la branche concernée par la _pull request_ acceptée.

---

Vous avez terminé de créer et de modifier vos pages de documentation ! N’hésitez pas à parcourir le site pour découvrir les autres fonctionnalités de cartes.gouv.fr et de sa documentation.

---

:::callout Pour aller plus loin
Si vous souhaitez avoir plus de détails sur l’utilisation des pull request :
<a href="https://docs.github.com/fr/pull-requests" target="_blank" rel="noopener noreferrer" title="Documentation github - ouvre une nouvelle fenêtre">Documentation github</a>
:::
