# cartes.gouv.fr-documentation

Ce dépôt constitue un site de documentation statique associé à [cartes.gouv.fr](https://cartes.gouv.fr/) et aux services de la Géoplateforme.

Il est construit sur la base des templates de [codegouvfr/eleventy-dsfr](https://github.com/codegouvfr/eleventy-dsfr) et sur le générateur de site statique [Eleventy](https://www.11ty.dev/).

## Prise en main

-   [Guide de contribution](CONTRIBUTING.md)
-   [Principes généraux](docs/index.md)
-   [Documentation rédacteur](docs/redacteur.md)
-   [Documentation développeur](docs/developpeur.md)

## Déploiements

La branche `main` est automatiquement déployée sur github pages en quelques minutes à l'adresse : [https://ignf.github.io/cartes.gouv.fr-documentation](https://ignf.github.io/cartes.gouv.fr-documentation)

Il faut ensuite un tag respectant le versioning sémantique (`vX.Y.Z`) pour qu'une image prête pour la production soit générée sur le registre ghcr.io avec une url de la forme :

```
ghcr.io/ignf/cartes.gouv.fr-documentation:vX.Y.Z
```

Le déploiement de cette image n'est ensuite plus du ressort de ce dépôt.

## Licence

Le dépôt est publié sous licence MIT pour le code et sous licence Etalab 2.0 pour les autres contenus.
