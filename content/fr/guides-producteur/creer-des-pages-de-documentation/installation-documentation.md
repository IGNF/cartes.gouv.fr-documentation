---
title: Installation de la documentation
tags:
    - Installation
    - Documentation
    - Github
    - Fork
    - Clone
eleventyNavigation:
    key: Installation de la documentation
    parent: Créer des pages de documentation
    order: 1
    nav: guides-producteur
pictogram: document/document-download.svg
---

{% from "components/component.njk" import component with context %}

Cette page explique la procédure d’installation du projet de documentation de **Cartes.gouv.fr**, afin d’ouvrir à l’édition les pages de documentation des partenaires.

:::info
Cette documentation est technique mais vous permet de visualiser vos ajouts/modifications/suppressions dans un navigateur avant d’en demander la fusion avec le dépôt principal _<html lang="en">github</html>_.
:::

---

## 1 - Installation de l’environnement de travail :

---

### 1.1 - Prérequis :

Pour disposer d’un environnement de travail confortable, il est recommandé de disposer des logiciels suivants :

- _<html lang="en">Visual Studio Code</html>_ (<a href="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer" title="https://code.visualstudio.com/download - ouvre une nouvelle fenêtre">https://code.visualstudio.com/download</a>) comme éditeur pour tous les langages utilisés par le site, notamment le _<html lang="en">markdown</html>_ (mais vous pouvez utiliser un autre éditeur si vous préférez)
- _<html lang="en">NodeJS</html>_ (<a href="https://nodejs.org/fr/download/prebuilt-installer" target="_blank" rel="noopener noreferrer" title="https://nodejs.org/fr/download/prebuilt-installer - ouvre une nouvelle fenêtre">https://nodejs.org/fr/download/prebuilt-installer</a>) pour pouvoir construire le site localement sur votre poste de travail et le prévisualiser.
- _<html lang="en">Git</html>_ (<a href="https://gitforwindows.org/" target="_blank" rel="noopener noreferrer" title="https://gitforwindows.org/ - ouvre une nouvelle fenêtre">https://gitforwindows.org/</a>), lien pour Windows) pour interagir avec le dépôt de code et <a href="https://github.com/" target="_blank" rel="noopener noreferrer" title="https://github.com - ouvre une nouvelle fenêtre">_<html lang="en">github.com</html>_/</a>.

_<html lang="en">Git</html>_ et _<html lang="en">NodeJS</html>_ sont indispensables pour aller plus loin dans l’installation.

---

### 1.2 - Variables d’environnement du compte :

Si vous travaillez derrière un _<html lang="en">proxy</html>_, il est nécessaire de vérifier vos variables d’environnement **de compte** (pas les variables système). Ajouter les variables **« HTTP_PROXY »** et **« HTTPS_PROXY »** si elles n’existent pas encore. Renseignez-vous auprès de votre sesrvice informatique si vous ne connaissez pas les valeurs à indiquer (ces variables sont propres à chaque organisme).

---

## 2 - Installation de la documentation en local :

---

### 2.1 - Dupliquer le dépôt (_<html lang="en">fork</html>_) :

Rendez-vous sur le _<html lang="en">github</html>_ du projet : <a href="https://github.com/IGNF/cartes.gouv.fr-documentation" target="_blank" rel="noopener noreferrer" title="https://github.com/IGNF/cartes.gouv.fr-documentation - ouvre une nouvelle fenêtre">https://github.com/IGNF/cartes.gouv.fr-documentation</a>. Il faut dupliquer le projet sur votre espace _Github_ afin de pouvoir faire les changements de votre côté, les prévisualiser, puis les soumettre au dépôt principal.

Dans le coin supérieur droit de la page, cliquez sur **« Fork »** (**« Dupliquer »** en français) puis **« Create a new fork »**.

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant la description précédente](/img/guides-producteur/creer-des-pages-de-documentation/installation-documentation/01_Dupliquer-le-depot.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

---

Dans le champ **« Description »**, vous pouvez renseigner la description de votre _fork_/duplication. Si vous le souhaitez, sélectionnez **« Copier la branche PAR DÉFAUT »** uniquement.

Cliquez sur **« Create a new fork »** (**« Créer une duplication »** en français).

Votre _fork_/duplication du dépôt sera disponible sous l’URL **« https://github.com/{votre_pseudo_github}/cartes.gouv.fr-documentation »**. Vous bénéficiez alors d’un espace de travail qui vous est propre. Vous pourrez choisir de soumettre au dépôt principal seulement les éléments que vous choisissez.

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant le résultat de la duplication](/img/guides-producteur/creer-des-pages-de-documentation/installation-documentation/02_Resultat-duplication.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

---

### 2.2 - Cloner le dépôt sur votre ordinateur :

Sous Windows, après avoir installé _Git for Windows_, vous devriez avoir accès au clic droit dans l’explorateur à un menu contextuel **« Git Bash here »** qui vous permet de lancer une invite de commande qui est très adaptée à l’utilisation de _Git_ et offre une bonne coloration syntaxique. Il est recommandé de la préférer à l’invite de commande par défaut de Windows.

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant le clic-droit > Git Bash Here](/img/guides-producteur/creer-des-pages-de-documentation/installation-documentation/03_Ouvrir-git-bash.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

    <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--center">
            ![Image décrivant l’apparence de la console git](/img/guides-producteur/creer-des-pages-de-documentation/installation-documentation/04_Resultat-ouvrir-git-bash.png){.fr-responsive-img .frx-border-img}
        </div>
    </div>

Les lignes de commandes qui suivent pourront être copiées, puis collées (**« maj+Inser »** ou **clic droit** > **« paste »**) et executées (**Entrée**) dans l’invite de commande qui a été ouverte.

Rendez-vous dans votre dossier à l’endroit où vous souhaitez coller le projet de documentation, puis faites un **clic droit** > **« Git Bash Here »** et collez la commande suivante (en remplaçant l’url par celle de votre _fork_) :

```bash
{% raw %}
git clone https://github.com/{votre_pseudo_github}/cartes.gouv.fr-documentation
{% endraw %}
```

Votre _fork_ est maintenant cloné en local sur votre ordinateur.

---

### 2.3 - Installer les dépendances :

Déplacez-vous dans le dossier que vous venez de créer avec la commande suivante :

```bash
{% raw %}
cd cartes.gouv.fr-documentation
{% endraw %}
```

Puis lancez la commande suivante :

```bash
{% raw %}
npm install
{% endraw %}
```

Cette commande crée un sous-dossier **« node_modules »** dans lequel vont s’installer toutes les dépendances du projet, conformément à ce qui est décrit dans les fichiers _package.json_ et _package-lock.json_.

:::info
Cette commande n’est obligatoire que pour la première installation, ou s’il y a des mises à jour de dépendances.
:::

---

Votre copie est maintenant installée correctement ! Rendez-vous page suivante pour commencer vos modifications.

---

:::callout Pour aller plus loin
Si vous souhaitez avoir plus de détails sur l’utilisation des _forks_/duplications :
<a href="https://docs.github.com/fr/pull-requests/collaborating-with-pull-requests/working-with-forks" target="_blank" rel="noopener noreferrer" title="Documentation Github - ouvre une nouvelle fenêtre">Documentation Github</a>
:::
