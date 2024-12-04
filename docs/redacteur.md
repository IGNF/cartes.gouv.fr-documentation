# Documentation rédacteur

## Installer le projet et le déployer localement

Installer le projet localement pour prévisualiser les modifications que vous effectuez est recommandé.

Voir [la documentation d'installation](installation.md).

### Prévisualisation sur VS Code

A la suite de l'installation de VS Code, vous pouvez prévisualiser l'écriture de contenu de plusieurs facons. Néanmoins, cette prévisualisation n'englobera pas les composants DSFR. Il faudra déployer le site en local pour avoir une image complète de prévisualisation.

#### Dans la même fenêtre

`crtl+k` puis `V` ou cliquer sur le bouton de prévisualisation

![alt text](img/image-2.png)
![alt text](img/image-4.png)

#### Dans un autre onglet de VS Code

`Ctrl + Shift + V`

![![alt text](image-6.png)](img/image-5.png)

## Soumettre une contribution

Pour soumettre une demande ou un problème concernant le site de la documentation : voir [CONTRIBUTING.md](../CONTRIBUTING.md).

## Structure

Tout le contenu du site se trouve dans le répertoire `content`. En tant que rédacteur, aucune modification n'est généralement nécessaire dans d'autres répertoires.

A date, le site de la documentation n'est pas traduit en anglais et seule la partie en français `content/fr/` est enrichie.

Le contenu de la barre de navigation principale n'est pas directement déterminée par l'arborescence des dossiers et fichiers mais par le contenu des cartouches de chaque fichier.
Il est toutefois conseillé d'avoir une arborescence qui correspond à cette navigation pour faciliter le repérage.

Documentation : https://codegouvfr.github.io/eleventy-dsfr/fr/blog/navigation/

## Syntaxe Markdown

Référence : https://codegouvfr.github.io/eleventy-dsfr/fr/blog/md-cheatsheet/

Bases d'écriture : https://commonmark.org/help/

## Composants

De nombreux composants qui n'existent pas dans la syntaxe markdown standard sont disponibles pour enrichir le contenu des pages.

Consultez [composants.md](composants.md).

## Rédiger un tutoriel

### Création d'un tutoriel

Créer un fichier `index.md` dans un dossier propre au tutoriel dans le dossier `content/fr/tutoriels/`

### Respect du système de design de l'État

Se référer au système de design de l'État (DSFR) afin de le respecter. Notamment à propos des couleurs permises et des différents composants disponibles à utiliser.

Système de design de l'État : https://www.systeme-de-design.gouv.fr/

### Gestion des espacements

Veiller à espacer les différents composants afin d'avoir un rendu facilement lisible. Le DSFR est restrctif sur les espacements, il propose des classes pour les effectuer :
- `.fr-mt-1w` margin top de 1w
- `.fr-mb-1w` margin bottom de 1w
- `.fr-my-1w` margin top et bottom de 1w

### Gestion des images

Faire attention au formatage des images, une image `.PNG` ne sera pas reconnu contrairement à une image `.png`.

Stocker les images dans un dossier propre au tutoriel dans le dossier `public/img/tutoriels/`.

### Prettier

Désactier Prettier car il peut causer des mauvaises modifications en Markdown.