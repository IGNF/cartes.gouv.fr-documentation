---
title: Développement
description: Cette page présente la partie développement
eleventyNavigation:
    key: Développement
    order: 8
---

<!--
CE DOCUMENT N'A PAS VOCATION A ÊTRE LU DIRECTEMENT OU VIA GITHUB :
les liens seront cassés, l'affichage ne sera pas correcte. Ne faites ça !

Consultez la doc en ligne ici : https://geoplateforme.github.io/sdk-entrepot/

Le lien vers cette page devrait être : https://geoplateforme.github.io/sdk-entrepot/development/
-->

## Mise en place

Récupérez le code :

```sh
git clone git@github.com:geoplateforme/sdk_entrepot.git
```

Ouvrez le dossier nouvellement créé avec votre éditeur favori (ici [Visual Studio Code](https://code.visualstudio.com/)) :

```sh
code sdk_entrepot
```

Si nécessaire, effectuez les installations systèmes suivantes :

```sh
sudo apt install python3 python3-pip python3-venv
```

Puis mettez à jour `pip` et `virtualenv` :

```sh
python3 -m pip install --user --upgrade pip virtualenv setuptools
```

Créez un environnement isolé : (il sera créé dans le dossier où la commande est lancée donc il est préférable de se placer à la racine du dépôt que vous venez de cloner)

```sh
python3 -m venv env
```

Activez l'environnement :

```sh
source env/bin/activate
```

Installez les dépendances de développement :

```sh
python3 -m pip install --upgrade pip
python3 -m pip install --upgrade setuptools
python3 -m pip install --upgrade flit
python3 -m flit install --extras all
```

Lancez les tests pour vérifier que tout fonctionne correctement :

```sh
./check.sh
```

## Documentation

### Test local

Vous pouvez générer la doc en local via la commande :

```sh
mkdocs serve
```

Vous pouvez ensuite la consulter ici : [http://127.0.0.1:8000](http://127.0.0.1:8000)

### Publication

Pour générer la doc et la publier [en ligne](https://geoplateforme.github.io/sdk-entrepot/), il faut pour le moment :

* récupérer le code à jour sur la branche de votre choix ;
* générer et pousser le doc via la commande : `mkdocs gh-deploy`.

C'est terminé ! Vous pouvez consulter la branche [gh-pages](https://github.com/Geoplateforme/sdk-entrepot/tree/gh-pages) qui doit être mise à jour.

## Développement et tests

Pour tester le programme, vous aurez besoin de créer un fichier `config.ini`, cf. [configuration](configuration.md).

Les classes python sont couvertes avec un maximum de tests unitaires merci de penser à couvrir le code ajouté ou à modifier les tests existants au besoin.

Pensez à activer l'environnement avant de lancer les tests :

```sh
source env/bin/activate
```

Pour automatiser dans VSCode : [doc ici](https://code.visualstudio.com/docs/python/environments#_work-with-python-interpreters)

À la fin de votre développement, lancez `./check.sh` pour vérifier que votre code respecte les critères de qualité.

### Consigne développement

- Nomenclature Python (classes en PascalCase, constantes en UPPER_CASE, le reste en snake_case)​
- Variables suffixées par leur type (cf. "variable-rgx" du .pylintrc)​
  - `s_` : string​
  - `i_` : integer​
  - `f_` : float​
  - `l_` : list (et autres énumérables)​
  - `d_` : dict​
  - `b_` : bool​
  - `e_` : error​
  - `p_` : Path​
  - `o_` : object​
- Programmation typée (vérifiée avec mypy; [memo type](https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html))
- Toutes les classes et fonctions doivent être documentées.
- Utilisation de `pathlib.Path` et non de `os.path​`.
- Gérer l'affichage des messages avec `Config().om​`, ne pas utiliser de `print()` ou autre logger.
  - `Config().om.debug("message")`
  - `Config().om.info("message")`
  - `Config().om.warning("message")`
  - `Config().om.error("message")`
  - `Config().om.critical("message")`
- Configuration centralisée via la classe Config()​ (cf. [Utilisation comme module Python](comme-module.md))

## Déploiement des versions dev et prod sur PyPI

### A. Principe

Le principe est de mettre à jour une version de code dans Github. Puis de merger cette version dans la branche dev (ou prod selon votre besoin). Enfin, de faire une release sur test.pypi (ou pi selon votre besoin).

### B. Mise à jour de la branche dev

Pour effectuer un déploiement de la librairie `sdk_entrepot_gpf`, il faut d'abord modifier le numéro de version dans le fichier `sdk_entrepot_gpf/__init__.py`.

```py
__version__ = <x.y.z>
```

Par exemple, on a "0.1.9". On va donc écrire "0.1.10".
Commiter en précisant le numéro de version dans le message de commit.

Puis il faut résoudre ou faire les pull request avec la branche dev en fonction de l'avancement du projet pour avoir une branche dev à jour.

### Création de la pre-release sur test.pypi

Pour publier une nouvelle version, qui va être ensuite publiée comme librairie sur PyPi, il faut [créer une (pre)-release](https://github.com/Geoplateforme/sdk_entrepot/releases/new) :

- créez une release de test sur la branche **dev** versionnée selon le modèle `tx.y.z` (ex : t1.2.3) pour déployer une nouvelle version du module en test :
  - choose a tag : taper "t0.1.10" et cliquer sur "Create new tag".
  - target : choisir "dev"
  - ajouter un titre ("Test 1.2.3") et une description des principales modifications apportées.
  - Cocher la case pre-release. Cliquer sur "Publish release" (les tests vont se lancer...)
  - Vérifier la publication sur [test.pypi](https://test.pypi.org/project/sdk_entrepot_gpf/)

### C. Mise à jour de la branche prod

Il faut merger dans github sa version de code dans la branche prod, ou bien, merger dev dans prod si on reprend le code ci-dessus.

Puis il faut résoudre ou faire les pull request avec la branche prod en fonction de l'avancement du projet pour avoir une branche prod à jour.

### Création de la pre-release sur pypi

Pour publier une nouvelle version, qui va être ensuite publiée comme librairie sur PyPi, il faut [créer une (pre)-release](https://github.com/Geoplateforme/sdk_entrepot/releases/new) :

- créez une release sur la branche **prod** versionnée selon le modèle `vx.y.z` (ex : v1.2.3) pour déployer une nouvelle version du module en production :
  - choose a tag : taper "v0.1.10" et cliquer sur "Create new tag".
  - target : choisir "prod"
  - ajouter un titre ("Version 1.2.3") et une description des principales modifications apportées.
  - Cliquer sur "Publish release" (les tests vont se lancer...)
  - Vérifier la publication sur [pypi](https://pypi.org/project/sdk_entrepot_gpf/)

### Publication sur PyPI à la main si besoin

La publication du package sur PyPI est automatique sur Github grâce aux actions [CI Dev](https://github.com/Geoplateforme/sdk_entrepot/actions/workflows/ci-dev.yml) et [CI Prod](https://github.com/Geoplateforme/sdk_entrepot/actions/workflows/ci-prod.yml) :

Si besoin, voici les commandes pour effectuer à la main la publication :

```sh
export FLIT_PASSWORD=<token>
```

Publication sur TestPyPI :

```sh
flit publish --pypirc .pypirc --repository testpypi
```

Publication sur PyPI :

```sh
flit publish --pypirc .pypirc --repository pypi
```