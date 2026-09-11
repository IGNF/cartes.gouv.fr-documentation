---
title: Utilisation comme exécutable
description: Cette page présente le module comme exécutable
eleventyNavigation:
    key: Utilisation comme exécutable
    order: 4
---
<!--
CE DOCUMENT N'A PAS VOCATION A ÊTRE LU DIRECTEMENT OU VIA GITHUB :
les liens seront cassés, l'affichage ne sera pas correct. Ne faites pas ça !

Consultez la doc en ligne ici : https://geoplateforme.github.io/sdk-entrepot/

Le lien vers cette page devrait être : https://geoplateforme.github.io/sdk-entrepot/comme-executable/
-->

## Aide

Vous pouvez consulter l'aide en ajoutant `-h` à la commande.

Cela fonctionne à la racine de l'executable (`egpf -h` ou `python -m sdk_entrepot_gpf -h`) ou dans une sous-commande (`egpf command -h` ou `python -m sdk_entrepot_gpf command -h`).

L'aide est plus complète que les exemples de cette page ! :)

## Configuration

Pensez à [créer un fichier de configuration](configuration.md) indiquant au minimum vos identifiants.

## Vérification de la configuration

Un bon moyen de vérifier que la configuration est correcte est de s'authentifier via l'exécutable (commande `auth`) :

```sh
# Le fichier de configuration est directement trouvé s'il est
# nommé "config.ini" et qu'il est situé dans le dossier de travail
python -m sdk_entrepot_gpf auth

# Sinon indiquez son chemin avec la variable d'environnement SDK_ENTREPOT_CONFIG_FILE (valable pour toutes les commandes suivantes)
export SDK_ENTREPOT_CONFIG_FILE=/autre/chemin/config.ini
python -m sdk_entrepot_gpf auth

# ou sinon indiquez son chemin dans la ligne de commande (doit être précisé dans toutes les lignes de commandes).
# NB: si le chemin est précisé en ligne de commande, alors la variable d'environnement SDK_ENTREPOT_CONFIG_FILE est ignorée.
python -m sdk_entrepot_gpf --ini /autre/chemin/config.ini auth
```

Cela devrait renvoyer :

``` txt
Authentification réussie.
```

## Mes datastores

Dans la configuration, vous devez indiquer l'identifiant du datastore à utiliser.

Si vous ne le connaissez pas, il est possible de lister les communautés auxquelles vous appartenez et, pour chacune d'elles, le datastore qui lui est associé.

La commande `me` permet de lister les communautés auxquelles vous appartenez :

```sh
python -m sdk_entrepot_gpf me
```

Cela devrait renvoyer :

```txt
Vos informations :
  * email : prenom.nom@me.io
  * nom : Prénom Nom
  * votre id : 11111111111111111111

Vous êtes membre de 1 communauté(s) :

  * communauté « Bac à sable » :
      - id de la communauté : 22222222222222222222
      - id du datastore : 33333333333333333333
      - nom technique : bac-a-sable
      - droits : community, uploads, processings, datastore, stored_data, broadcast
```

Dans cet exemple, l'identifiant du datastore à utiliser est `33333333333333333333`.


???+ warning "Attention"
    Cela ne fonctionnera que si les autres paramètres (nom d'utilisateur, mot de passe et urls) sont corrects.


## Afficher toute la configuration

Vous pouvez afficher toute la configuration via une commande. Cela peut vous permettre d'avoir une liste exhaustive des paramètres disponibles et de vérifier que votre fichier de configuration a bien le dernier mot sur les paramètres à utiliser.

Affichez la configuration (commande `config`) :

```sh
# Toute la configuration
python -m sdk_entrepot_gpf config
# Une section
python -m sdk_entrepot_gpf config store_authentification
# Une option d'une section
python -m sdk_entrepot_gpf config store_authentification password
```

## Récupérer des jeux de données d'exemple

Il est possible de récupérer des jeux de données d'exemple via l'exécutable avec la commande `example`.

Lancez la commande `example dataset` pour lister les jeux disponibles :

```sh
python -m sdk_entrepot_gpf example dataset
```

Lancez la commande `example dataset [NOM]` en précisant le nom du jeu de données à extraire pour récupérer un jeu de données :

```sh
python -m sdk_entrepot_gpf dataset 1_dataset_vector
```

Les données seront extraites dans le dossier courant, vous pouvez préciser la destination en indiquant le dossier où mettre les données :

```sh
python -m sdk_entrepot_gpf dataset 1_dataset_vector mon/dossier
```

## Téléverser des données

Pour téléverser des données, vous devez générer un [fichier descripteur de livraison](upload_descriptor.md).

C'est un fichier au format JSON permettant de décrire les données à livrer et les livraisons à créer.

Ensuite, vous pouvez simplement livrer des données avec la commande `delivery` :

```sh
python -m sdk_entrepot_gpf delivery mon_fichier_descripteur.json
```

Les jeux de données d'exemple sont fournis avec le fichier descripteur (voir [Récupérer des jeux de données d'exemple](#recuperer-des-jeux-de-donnees-dexemple)).

Si votre livraison est interrompue, vous pourrez la reprendre en ajoutant `-b CONTINUE` :

```sh
python -m sdk_entrepot_gpf delivery mon_fichier_descripteur.json -b CONTINUE
```

Ou au contraire vous pouvez la supprimer et la recommencer en ajoutant `-b DELETE` :

```sh
python -m sdk_entrepot_gpf delivery mon_fichier_descripteur.json -b DELETE
```

## Réaliser des traitements et publier des données

Pour réaliser des traitements et publier des données géographiques, vous devez générer un [fichier workflow](workflow.md).

C'est un fichier au format JSON permettant de décrire, en une suite d'étapes, les traitements et les publications à effectuer.

Vous pouvez valider votre workflow :

```sh
python -m sdk_entrepot_gpf workflow -f mon_workflow.json
```

Ensuite, vous pouvez simplement lancer une étape :

```sh
python -m sdk_entrepot_gpf workflow -f mon_workflow.json -s mon_étape
```

En lançant des workflows via l'executable du SDK, vous pouvez utiliser les 4 résolveurs suivants :

* `store_entity` : de type `StoreEntityResolver` pour récupérer des entités de l'API ;
* `user` : de type `UserResolver` pour récupérer des informations sur l'utilisateur connecté ;
* `datetime` : de type `DateResolver` pour récupérer des informations sur la date et l'heure ;
* `params` : de type `DictResolver` pour récupérer des informations arbitraires que vous aurez passé en ligne de commande (via `-p`).

Par exemple, la ligne de commande suivante :

```sh
python -m sdk_entrepot_gpf workflow -f mon_workflow.json -s mon_étape -p edition 2024-01
```

Permet d'avoir un workflow avec une gestion dynamique de l'édition traitée grâce au résolveur `params` :

```txt
{store_entity.stored_data.infos._id [INFOS(name=MES_DONNÉES_{params.edition})]}
```

## Suppression d'entités

Le programme permet de supprimer des entités de type `upload`, `stored_data`, `configuration`, `offering`, `permission` et `key`.

Avant la suppression la liste des entités supprimées sera affichée et l'utilisateur devra valider la suppression (sauf si utilisation de `--force`).

Commande générale :

```sh
python -m sdk_entrepot_gpf {upload,stored_data,configuration,offering,permission,key} UUID --delete [--force] [--cascade]
```

Avec comme options supplémentaires :

* `--force` : aucune question ne sera posée avant la suppression
* `--cascade` : suppression des éléments liés en aval, fonctionne uniquement pour :
    * `stored_data` : suppression des configuration et offres liées
    * `configuration` : suppression des offres liées

???+ note "Nota bene"
    S'il y a des éléments liés en aval et que vous ne demandez pas la suppression il sera impossible de supprimer l'élément ciblé.

Exemples :

```sh
# Suppression d'une livraison
python -m sdk_entrepot_gpf upload UUID --delete
# Suppression d'une donnée stockée (sans demander confirmation, sans supprimer les éléments liés)
python -m sdk_entrepot_gpf stored_data UUID --delete --force
# Suppression d'une configuration (et d'une éventuelle offre liée)
python -m sdk_entrepot_gpf configuration UUID --delete --cascade
```

## Fichiers annexes

Base : `python -m sdk_entrepot_gpf annexe`

Types de lancement :

* liste des annexes, avec filtres en option : `[--info filtre1=valeur1,filtre2=valeur2]`
* afficher des détails d'une annexe, : `ID`
* publication / dépublication d'une annexe : `ID [--publish|--unpublish]`
* publication / dépublication par label : `--publish-by-label label1,label2` et `--unpublish-by-label label1,label2`

## Téléversement d'annexes, de fichiers statiques et de métadonnées, et création de clefs

La commande `delivery` vous permet de téléverser des annexes, des fichiers statiques (style) et des métadonnées mais également de créer des clefs.

Cela passe toujours par la création d'un fichier descripteur (comme pour le [téléversement de données](#televerser-des-donnees)).

Exemple de fichier pour le téléversement d'une annexe, d'un fichier de style et d'une métadonnée ainsi que la création d'une clef :

```json
{
  "annexe" : [
    {
      "file": "/chemin/du/fichier.pdf",
      "paths": ["test2.xml"],
      "labels": ["label1", "label2"],
      "published": false
    }
  ],
  "static" : [
    {
      "file": "mon_style.sld",
      "name": "mon_style",
      "type": "GEOSERVER-STYLE",
      "description": "description"
    }
  ],
  "metadata": [
    {
      "file": "metadata.xml",
      "type": "INSPIRE"
    }
  ],
  "key": [
    {
      "name": "nom",
      "type": "HASH",
      "type_infos": {
        "hash": "hash"
      }
    }
  ]
}
```

## Fichiers statiques

Base : `python -m sdk_entrepot_gpf static`

Types de lancement :

* liste des fichiers statics, avec filtre en option : `[--info filtre1=valeur1,filtre2=valeur2]`
* afficher des détails d'un ficher statique : `ID`

## Fichiers de métadonnées

Base : `python -m sdk_entrepot_gpf metadata`

Types de lancement :

* liste des métadonnées, avec filtre en option : `[--info filtre1=valeur1,filtre2=valeur2]`
* afficher les détails d'une métadonnée : `ID`

## Points d'accès (endpoint)

Base : `python -m sdk_entrepot_gpf endpoint`

Types de lancement :

* liste des points d'accès, avec filtre en option : `[--info filtre1=valeur1,filtre2=valeur2]`
* publication de métadonnées sur le point d'accès : `--publish-metadatas NOM_FICHIER [NOM_FICHIER]`
* dépublication de métadonnées sur le point d'accès : `--unpublish-metadatas NOM_FICHIER [NOM_FICHIER]`

## Gestion des clefs de l'utilisateur

Base : `python -m sdk_entrepot_gpf key`

Types de lancement :

* liste des clefs : (pas de possibilité de filter)
* afficher les détails d'une clef : `ID`

## Tutoriels

Vous pouvez maintenant livrer et publier vos données en utilisant le module comme un exécutable. Voici quelques exemples :

* [Tutoriel 1 : héberger une archive pour la rendre téléchargeable](tutoriel_1_archive.md)
* [Tutoriel 2 : téléverser des données vecteur les publier en flux](tutoriel_2_flux_vecteur.md)
* [Tutoriel 3 : téléverser des données raster les publier en flux](tutoriel_3_flux_raster.md)