<!--
CE DOCUMENT N'A PAS VOCATION A ÊTRE LU DIRECTEMENT OU VIA GITHUB :
les liens seront cassés, l'affichage ne sera pas correcte. Ne faites ça !

Consultez la doc en ligne ici : https://geoplateforme.github.io/sdk-entrepot/

Le lien vers cette page devrait être : https://geoplateforme.github.io/sdk-entrepot/tutoriel_1_archive/
-->

# Tutoriel 1 : publier une archive

La Géoplateforme permet d'héberger vos fichiers pour permettre à vos utilisateur de les télécharger simplement.

Pour cela, vous devez téléverser des données « archive » (c'est à dire qu'elles ne seront pas retouchées par la Géoplateforme).

Pour commencer, nous vous conseillons de suivre ce tutoriel qui vous permet de manipuler des données déjà existantes. Vous pouvez ensuite adapter chaque étape pour livrer vos données.

## Définition de la configuration

Suivez la page [configuration](configuration.md) pour définir le fichier de configuration.

## Récupération du jeu de données

Le jeu de données « 2_dataset_archive » contient des données de type archive à téléverser.

Récupérez les données en lançant la commande :

```sh
python -m sdk_entrepot_gpf example dataset 2_dataset_archive
```

Observez la structure du jeu de données :

```txt
2_dataset_archive/
├── CANTON
│   └── CANTON.zip
├── CANTON.md5
└── upload_descriptor.json
```

La donnée que l'on souhaite héberger est le fichier `CANTON.zip`. Le fichier `CANTON.md5` permettra de valider les données téléversées côté Géoplateforme.

Enfin, le fichier `upload_descriptor.json` permet de décrire la livraison à effectuer.

## Fichier descripteur de livraison

Ouvrez le fichier pour avoir plus de détails.

Il est composé d'une liste de `datasets` représentant chacun une livraison distincte.

Chaque dataset contient :

* la liste des dossiers à téléverser ;
* les informations de la livraison à créer (nom, description, srs et type) ;
* les commentaires et les tags à ajouter à la livraison.

La documentation du fichier descripteur est disponible [ici](upload_descriptor.md).

## Livraison des données

Livrer les données en indiquant le chemin du fichier descripteur au programme :

```sh
python -m sdk_entrepot_gpf delivery 2_dataset_archive/upload_descriptor.json
```

Le programme doit vous indiquer que le transfert est en cours, puis qu'il attend la fin des vérifications côté API avant de conclure que tout est bon.

## Workflow

Une fois les données livrées, il faut traiter les données avant de les publier (c'est à dire configurer un géo-service et le rendre accessible).

Ces étapes sont décrites grâce à un workflow.

Vous pouvez récupérer un workflow d'exemple grâce à la commande suivante :

```sh
python -m sdk_entrepot_gpf example workflow generic_archive.jsonc
```

Ouvrez le fichier. Vous trouverez plus de détails dans la [documentation sur les workflows](workflow.md), mais vous pouvez dès à présent voir que le workflow est composé de 4 étapes. Il faudra lancer une commande pour chacune d'elles.

```mermaid
%% doc mermaid ici https://mermaid-js.github.io/mermaid/#/flowchart?id=flowcharts-basic-syntax
flowchart TD
    A("upload") -->|intégration-archive-livrée| B("dataset")
    B -->|patch-donnée-stockée|C("patch")
    C-->|configuration-archive-livrée| D(configuration)
    D -->|publication-archive-livrée| E(publication)
```

## Traitement et publication

Le workflow « generic_archive » permet de passer de la livraison à un lien permettant de télécharger la donnée. Il comporte 4 étapes :

* `intégration-archive-livrée` : transformation des données livrées temporaires en une Donnée Stockée pérenne ;
* `patch-donnée-stockée` : ajout de la description des Données Stockée;
* `configuration-archive-livrée` : configuration d'un service de téléchargement permettant de télécharger les données ;
* `publication-archive-livrée` : publication du service de téléchargement.

Lancez les 4 commandes suivantes pour exécuter les 4 étapes :

```sh
python -m sdk_entrepot_gpf workflow -f generic_archive.jsonc -s intégration-archive-livrée
python -m sdk_entrepot_gpf workflow -f generic_archive.jsonc -s patch-donnée-stockée
python -m sdk_entrepot_gpf workflow -f generic_archive.jsonc -s configuration-archive-livrée
python -m sdk_entrepot_gpf workflow -f generic_archive.jsonc -s publication-archive-livrée
```

La première commande ne doit pas être instantanée : un traitement est effectué et les logs doivent vous être remontés.

Les trois étapes suivantes sont instantanées. A la fin, vous devez voir s'afficher un lien.

Exemple :

```txt
INFO - Offre créée : Offering(id=62c708e72246434ac40ee3ad)
   - download|https://geoservices-geotuileur.ccs-ign-plage.ccs.cegedim.cloud/download/plage/archive
```

Suivez le lien indiqué pour retrouver la liste des fichiers que vous avez téléversés et qui sont maintenant disponibles en téléchargement.

Vous pouvez alors télécharger le fichier de votre choix en ajoutant son nom à la suite du lien. Dans notre cas, ça serait :

```txt
https://geoservices-geotuileur.ccs-ign-plage.ccs.cegedim.cloud/download/plage/archive/CANTON.zip
```

Pour lister toutes les archives disponibles :

```sh
curl -X 'GET' https://data.geopf.fr/telechargement/capabilities -H "Accept: application/json"
```

## Résumé des commandes

```sh
# récupération des données d'exemple
python -m sdk_entrepot_gpf example dataset 2_dataset_archive
# livraison des données sur la Géoplateforme
python -m sdk_entrepot_gpf delivery 2_dataset_archive/upload_descriptor.json
# récupération du workflow de traitement et publication d'une archive
python -m sdk_entrepot_gpf example workflow generic_archive.jsonc
# exécution des 4 étapes pour le traitement et la publication de l'archive
python -m sdk_entrepot_gpf workflow -f generic_archive.jsonc -s intégration-archive-livrée
python -m sdk_entrepot_gpf workflow -f generic_archive.jsonc -s patch-donnée-stockée
python -m sdk_entrepot_gpf workflow -f generic_archive.jsonc -s configuration-archive-livrée
python -m sdk_entrepot_gpf workflow -f generic_archive.jsonc -s publication-archive-livrée
```