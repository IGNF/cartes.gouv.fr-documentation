# Documentation développeur

## Installation

Voir [la documentation d'installation](installation.md).

## Soumettre une contribution

Voir [CONTRIBUTING.md](../CONTRIBUTING.md).

## Développement

- Modifier le fichier [`eleventy.config.js`](eleventy.config.js) pour configurer les paramètres de build d'Eleventy différemment.
- Ajouter des composants du DSFR dans le dossier [`_includes/components`](_includes/components) et des [mises en page](https://www.11ty.dev/docs/layouts/) dans le
  dossier [`_includes/layouts`](_includes/layouts).
    - Ajouter de nouveaux conteneurs markdown dans le fichier [`markdown-custom-containers.js`](markdown-custom-containers.js).

_[Voir aussi la documentation des composants](https://codegouvfr.github.io/eleventy-dsfr/fr/blog/tags/composant/)_

- Ajouter des chaînes de caractères localisées dans le dossier `_data/i18n/[lang]/index.js`.
    - Pour ajouter une nouvelle traduction, ajouter un dossier `[lang]` dans [`content`](content), un nouveau fichier `_data/i18n/[lang]/index.js` et l'inclure dans [`_data/i18n/index.js`](_data/i18n/index.js).
- Ajouter des styles personnalisés et des images dans le dossier [`public`](public).
    - Celui-ci sera copié tel quel dans le dossier de sortie. Cela signifie que `./public/css/*` persistera dans `./_site/css/*` après la construction du livrable.
- Compléter le [README](README.md) et la [documentation](content/fr/blog/posts). 😀

## Déploiement

- Voir un [exemple de worklow de déploiement sur GitHub Pages](https://github.com/codegouvfr/eleventy-dsfr/blob/gh-pages/.github/workflows/11ty-gh-pages.yml) sur la branche `gh-pages`.

En cas d'erreur lors du build :

```bash
Error: Get Pages site failed
Error: HttpError: Not Found
```

Essayer [cette configuration](https://stackoverflow.com/a/73967433).

- _[OPTIONNEL]_ [Configurer la redirection](https://www.11ty.dev/docs/i18n/#distinct-urls-using-implied-default-language)
  de toutes les URLs des pages dont la langue est celle par défaut.
