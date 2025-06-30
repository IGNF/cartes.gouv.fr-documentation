---
title: Demander la fusion au dépôt principal
tags:
    - Commit
    - Documentation
    - Github
    - Fork
    - Clone
eleventyNavigation:
    key: Demander la fusion au dépôt principal
    parent: Créer des pages de documentation
    order: 5
    nav: guides-producteur
pictogram: custom/document-upload.svg
---

{% from "components/component.njk" import component with context %}

Cette page explique la procédure pour fusionner vos modifications faites en local avec le dépôt principal de la documentation de Cartes.gouv.fr.

:::info
Avant de confirmer la fusion, vérifiez que le dépôt principal n’ait pas pris d’avance sur votre *<html lang="en">fork</html>* : voir [Étapes préalables aux modifications](../etapes-prealables-aux-modifications/).
:::

---

## 1 - Enregistrer :

Pensez à bien enregistrer toutes vos modifications, sinon elles ne seront pas prises en compte dans la suite de la procédure. Dans _VS Code_ un petit rond apparait à côté du nom du fichier si celui-ci a été modifié et pas encore enregistré.

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant un fichier non enregistré dans Visual Studio](/img/guides-producteur/creer-des-pages-de-documentation/demander-pull-request/01_Fichier-non-enregistre.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

---

## 2 - Passer en revue les modifications :

Gardez l’invite de commande _<html lang="en">Git Bash</html>_ utilisée pour faire tourner la prévisualisation avec _<html lang="en">Eleventy</html>_ ouvert à part. Ouvrez une nouvelle invite de commande _<html lang="en">Git Bash</html>_ à la racine du projet.

Dans la nouvelle invite de commande _<html lang="en">Git Bash</html>_, lancez la commande suivante :

```bash
git status
```

Cela vous résumera toutes les modifications que vous avez faites sur votre clone local.

:::info
Les fichiers non-enregistrés peuvent ne pas apparaitre dans la liste des modifications.
:::

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant le résultat de la commande git status](/img/guides-producteur/creer-des-pages-de-documentation/demander-pull-request/02_Git-status.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

---

## 3 - Choisir les fichiers à fusionner :

Vous pouvez soit ajouter toutes vos modifications avec la commande suivante :

```bash
git add .
```

Soit ajouter uniquement certains fichiers un à un avec la commande suivante :

```bash
git add content/fr/partenaires/partenaireABC/.../monfichier.md
```

---

## 4 - Pousser les modifications sur votre *<html lang="en">fork</html>* :

Il faut maintenant transmettre vos modifications locales à votre _<html lang="en">fork</html>_ sur _<html lang="en">github</html>_. Pour cela lancez la commande suivante pour créer un nouveau paquet (_<html lang="en">commit</html>_) :

```bash
git commit -m "un message court décrivant la modification faite"
```

Transférez ensuite votre _<html lang="en">commit</html>_ à votre _<html lang="en">fork</html>_ avec la commande suivante :

```bash
git push --set-upstream origin nom-de-votre-branche
```

:::info
À ce moment, si vous voulez ajouter d’autres modifications à cette branche avant la fusion au dépôt principal, il suffira de repasser les commandes _add_, _commit_ et _push_ telles que présentées ci-dessus.
:::

Vous pouvez voir sur le _<html lang="en">github</html>_ de votre _<html lang="en">fork</html>_ que celle-ci est à présent en avance de _<html lang="en">commit</html>_ par rapport au dépôt principal :

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant l’avance du fork sur le dépôt princiapl](/img/guides-producteur/creer-des-pages-de-documentation/demander-pull-request/03_Avance-du-fork-sur-le-depot-principal.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

---

## 5 - Demander un *<html lang="en">pull request</html>* :

La dernière étape consiste à demander au dépôt principal d’accepter vos modifications, il s’agit du _<html lang="en">pull request</html>_ (ou de la demande de fusion).

En restant sur la même page _<html lang="en">github</html>_, cliquez sur **« Contribute »** puis sur **« Open pull request »**

Ajoutez un titre et une description concise puis cliquez sur **« Create pull request »**.

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant la demande de pull request](/img/guides-producteur/creer-des-pages-de-documentation/demander-pull-request/04_Demande-de-pull-request.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

Un autre membre du projet devra alors vérifier la demande et l’accepter. Dès que cela sera fait, les modifications apparaitront sur le site.

---

## 6 - Supprimer la branche :

Une fois que le _<html lang="en">pul request</html>_ a été accepté, il faudra supprimer la branche.

Un _<html lang="en">pull request</html>_ accepté apparaitra en violet avec cette icône :

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant un pull request accepté](/img/guides-producteur/creer-des-pages-de-documentation/demander-pull-request/05_Pull-request-accepte.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

Pour supprimer une branche, il suffit de se rendre sur _<html lang="en">github</html>_, sur votre _<html lang="en">fork</html>_, et de cliquer sur **« Branch »** :

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant commment accéder à ses branches sur github](/img/guides-producteur/creer-des-pages-de-documentation/demander-pull-request/06_Supprimer-branche.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

Il vous suffit alors de supprimer la branche concernée par le _<html lang="en">pull request</html>_ accepté.

---

Vous avez terminé de créer et de modifier vos pages de documentation ! N’hésitez pas à parcourir le site pour découvrir les autres fonctionnalités de Cartes.gouv et de sa documentation.

---

:::callout Pour aller plus loin
Si vous souhaitez avoir plus de détails sur l’utilisation des *<html lang="en">pull request</html>* :
<a href="https://docs.github.com/fr/pull-requests" target="_blank" rel="noopener noreferrer" title="Documentation github - ouvre une nouvelle fenêtre">Documentation github</a>
:::
