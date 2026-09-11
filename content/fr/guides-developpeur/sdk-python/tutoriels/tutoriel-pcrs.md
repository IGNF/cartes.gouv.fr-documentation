<!--
CE DOCUMENT N'A PAS VOCATION A ÊTRE LU DIRECTEMENT OU VIA GITHUB :
les liens seront cassés, l'affichage ne sera pas correcte. Ne faites ça !

Consultez la doc en ligne ici : https://geoplateforme.github.io/sdk-entrepot/

Le lien vers cette page devrait être : https://geoplateforme.github.io/sdk-entrepot/tutoriel_pcrs/
-->

# Tutoriel : publier un flux PCRS

La [Géoplateforme](https://geoplateforme.github.io/) permet d'héberger et diffuser vos données PCRS raster/image (Plan Corps de Rue Simplifié). Nous vous invitons à prendre connaissance de ses [concepts clefs](https://geoplateforme.github.io/entrepot/production/concepts/).

Pour cela, vous allez devoir téléverser des dalles « PCRS » qui permettront de créer une pyramide image qui sera diffusée en flux.

Ce tutoriel vous accompagne étape par étape en listant les commandes à lancer et en vous fournissant les différents fichiers nécessaires.

Voici les prérequis pour suivre ce tutoriel :

* Vous devez disposer d'un compte Géoplateforme (création en suivant ce [tuto](https://geoplateforme.github.io/tutoriels/production/controle-des-acces/entrepot/creation_compte/) ou sur [cartes.gouv](https://cartes.gouv.fr/))
* Vous devez disposer d'un datastore (pour sa création, vous pouvez contacter [geoplateforme@ign.fr](mailto:geoplateforme@ign.fr) ou faire une demande [ici](https://cartes.gouv.fr/entrepot/demande-de-creation) en précisant votre établissement, qu'il s'agit d'une diffusion partenaire PCRS et votre identifiant utilisateur que vous trouvez sur votre [espace](https://cartes.gouv.fr/mon-compte))
* Vous devez avoir installé python et le module [SDK](index.md) sur votre poste de travail

Avant de commencer, voici quelques bonnes pratiques et conseils pour que les opérations se déroulent dans les meilleures conditions.

* Découpez votre projet PCRS en dalles recouvrant des petites surfaces (200m de côté par exemple, 1km au maximum).
* Utilisez des données en format TIFF compressé en JPEG (vous pouvez vérifier le format de vos données avec gdalinfo ou tiffinfo)
* Travaillez sur l’ordinateur (ou le serveur) sur lequel sont stockés les données

Nous vous rappelons également qu’un projet PCRS représente un gros volume de données et que son transfert sur la Géoplateforme peut prendre du temps. A cet égard, il conviendra de s’assurer que le débit de sortie dont vous disposez soit suffisant pour ne pas avoir une phase de téléversement qui s’éternise.

# Préparation de l’espace de travail et configuration SDK

Liste des différents fichiers nécessaires :

* un fichier de configuration pour définir vos paramètres SDK (`config.ini`)
* un fichier descripteur qui détaille votre livraison (`PCRS_descriptor.jsonc`)
* un fichier de workflow en plusieurs étapes qui effectuera les traitements (`PCRS.jsonc`)

Vous devez créer un dossier de travail dans lequel ces fichiers seront déposés au fur et à mesure comme suit :

```text
Dossier_PCRS/
├── config.ini
├── PCRS_descriptor.jsonc
├── PCRS.jsonc
└── $votre_chantier_PCRS/
    ├── dalle_1.tif
    ├── dalle_2.tif
    ├── ...
    └── dalle_n.tif
```

À la racine de votre dossier de travail, créez le fichier de configuration `config.ini` contenant les informations suivantes :

```ini
# Informations pour l'authentification
[store_authentification]
# paramètres du SDK
client_id=gpf-warehouse
client_secret=BK2G7Vvkn7UDc8cV7edbCnHdYminWVw2
# Votre login
login=********
# Votre mot de passe
password=********

# Informations pour l'API
[store_api]
# L'identifiant de votre datastore
datastore=********
```

Il faut compléter le fichier avec votre login/mot de passe et l'identifiant du datastore qui vous a été alloué.

Vous pouvez tester la validité de votre fichier avec la commande suivante :

```sh
python3 -m sdk_entrepot_gpf me
```

???+ warning "Attention"
    Les commandes sont à lancer depuis une **invite de commande système** et non la console python.

    Il faut vous placer **à la racine de votre dossier de travail**.

    Selon votre installation, il est possible qu'il faille utiliser `python` et non `python3`. Il faudra alors penser à modifier les commandes indiquées dans cette page. Par exemple cette commande serait : `python -m sdk_entrepot_gpf me`


Cela devrait renvoyer :

```text
Vos informations :
  * email : ********
  * nom : ********
  * votre id : ********

Vous êtes membre de 1 communauté(s) :

  * communauté « ******** » :
      - id de la communauté : ********
      - id du datastore : ********
      - nom technique : ********
      - droits : community, uploads, processings, datastore, stored_data, broadcast
```

Il peut être nécessaire de rajouter certains paramètres pour que cela fonctionne comme le proxy si vous en utilisez un. Vous pouvez suivre la page [configuration](configuration.md) pour compléter votre fichier si nécessaire.

???+ info "Note : Authentification à double facteurs"
    Si vous utilisez une authentification à double facteurs, il faudra ajouter le paramètre `totp_key` dans le fichier `config.ini`. Ce paramètre correspond à la clé de génération OTP et non au code temporaire (ex : `totp_key=O42E4NRXMQ3TAR2PKR3KGULVGBVUPM3B`). Toutes les applications OTP ne permettent pas de récupérer cette clé (ce n'est par exemple pas le cas de [FreeOTP](https://play.google.com/store/apps/details?id=org.fedorahosted.freeotp&hl=fr)), nous préconisons l'utilisation d'[Aegis](https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis&hl=fr).

    Si vous n'arrivez pas à récupérez la clé, vous pouvez repasser sur une authentification simple.

## Livraison

Vous allez devoir créer un fichier `PCRS_descriptor.jsonc` qui décrit votre livraison à la racine de votre dossier de travail avec les informations suivantes :

```json
{
    "datasets": [
        {
            "data_dirs": [
                "$votre_chantier_PCRS"
            ],
            "upload_infos": {
                "description": "Description de votre chantier (département, zone, date...)",
                "name": "$votre_chantier_PCRS",
                "srs": "EPSG:2154",
                "type": "RASTER"
            },
            "comments": [
                "Votre commentaire"
            ],
            "tags": {
                "datasheet_name": "$votre_chantier_PCRS",
                "type": "PCRS"
            }
        }
    ]
}
```

???+ info "Note : système de référence de vos données"
    Si vos données ne sont pas en LAMB93 (`EPSG:2154`), il faudra modifier la valeur associée à la clef `srs`.
    Par exemple, si vous utilisez le système `CC47`, il faudra indiquer `"srs": "EPSG:3947"`.

Il faut remplacer 3 fois dans le fichier `$votre_chantier_PCRS` par une valeur sous la forme `PCRS_chantier_********` (par exemple: PCRS_chantier_D046, nous vous encourageons à utiliser cette nomenclature). Cette valeur sera utilisée pour nommer la livraison, la pyramide et vos couches. Elle vous permettra également de retrouver votre fiche de données sur cartes.gouv.fr. Vous pouvez aussi ajouter une description et un commentaire.

???+ warning "Attention"
    La valeur `$votre_chantier_PCRS` étant utilisée pour définir le nom des couches WMS et WMTS, vous serez bloqués à l'étape de publication si une couche existe déjà avec ce même nom puisque deux couches d'un même service doivent avoir des noms différents à l'échelle de la Géoplateforme. Nous vous invitons donc à vérifier que la valeur que vous définissez n'est pas déjà utilisée en consultant les GetCapabilities des services [WMTS](https://data.geopf.fr/wmts?service=WMTS&request=GetCapabilities) et [WMS-Raster](https://data.geopf.fr/wms-r?service=WMS&request=GetCapabilities).

Vous déposerez vos données dans un répertoire du même nom `$votre_chantier_PCRS` à la racine de votre dossier de travail comme suit :

```text
Dossier_PCRS/
├── config.ini
├── PCRS_descriptor.jsonc
├── PCRS.jsonc
└── $votre_chantier_PCRS/
    ├── dalle_1.tif
    ├── dalle_2.tif
    ├── ...
    └── dalle_n.tif
```

Vous pouvez maintenant effectuer la livraison en lançant la commande depuis la racine de votre dossier de travail ou en indiquant le chemin du fichier descripteur au programme :

```sh
python3 -m sdk_entrepot_gpf delivery PCRS_descriptor.jsonc
```

Le programme doit vous indiquer que le transfert est en cours, puis qu'il attend la fin des vérification côté API avant de conclure que tout est bon `INFO - BILAN : les 1 livraisons se sont bien passées` (cela peut être long selon la taille de la livraison et la qualité de votre connexion, ne fermez pas votre terminal pendant ce temps).

Si le transfert est interrompu pour quelque raison que ce soit, vous pouvez reprendre la livraison avec la commande :

```sh
python3 -m sdk_entrepot_gpf delivery PCRS_descriptor.jsonc -b CONTINUE
```

Deux vérifications sont effectuées sur la livraison :

* la **vérification standard** qui s'assure que les données ne sont pas corrompues lors du transfert ;
* la **vérification raster** qui s'assure que les données sont valides ;

Si au moins l’une des deux vérification échoue, vous pourrez obtenir les logs d'erreur détaillés en indiquant l'id de votre livraison dans la commande :

```sh
python3 -m sdk_entrepot_gpf upload ******** --checks
```

S'il y a des problème avec la **vérification standard**, cela signifie que des données ont mal été téléversées. Il faudra supprimer les fichier concernés et les relivrer :

```sh
python3 -m sdk_entrepot_gpf upload ******** --delete-failed-files
python3 -m sdk_entrepot_gpf delivery PCRS_descriptor.jsonc -b RESUME
```

S'il y a des problèmes avec la **vérification raster**, cela signifie que vos données ne sont pas valides. Il faudra notamment vérifier que les données sont bien dans la projection indiquée au moment de la livraison (`EPSG:2154` par défaut). La projection d'une livraison n'est pas modifiable, il faut refaire une livraison dans ce cas.


## Traitements

### Génération de la pyramide

Une fois les données livrées, il faut créer la pyramide image pour pouvoir la diffuser en flux (WMS-Raster et WMTS).

Ces étapes vont être réalisées grâce à un workflow.

Vous pouvez récupérer le workflow `PCRS.jsonc` grâce à la commande suivante :

```sh
python3 -m sdk_entrepot_gpf example workflow PCRS.jsonc
```

Pour plus de détails, vous pouvez consulter la [documentation sur les workflows](workflow.md).

Une fois que vous avez placé le fichier `PCRS.jsonc` dans votre arborescence,, vous pouvez générer la pyramide en lançant la commande :

```sh
# partie génération de la pyramide
python3 -m sdk_entrepot_gpf workflow -f PCRS.jsonc -s pyramide --param producteur $votre_chantier_PCRS
```

Il s’agit d’une opération assez longue, dépendamment du nombre de dalles livrées. Nous avons estimé une moyenne d'une dizaine d'heures par tranche de 500 dalles (TIFF de 20 000px x 20 000px). Des logs doivent vous être remontés et se terminer par :

```text
INFO - Exécution de l'action 'pyramide-0' : terminée
```

Si vous perdez la connexion ou que vous fermez votre terminal pendant la génération, vous pouvez retrouvez la génération en cours avec la commande :

```sh
python3 -m sdk_entrepot_gpf workflow -f PCRS.jsonc -s pyramide --param producteur $votre_chantier_PCRS -b CONTINUE
```

### Publication des couches WMS et WMTS

Une fois la pyramide générée, il ne reste plus qu’à publier vos couches. Pour cela, lancez la commande :

```sh
# partie publication
python3 -m sdk_entrepot_gpf workflow -f PCRS.jsonc -s publication --param producteur $votre_chantier_PCRS
```

Deux offres (une WMTS et une WMS-Raster) devraient être créées, cela vous sera confirmé par :

```text
INFO - Offre créée : Offering(id=********, layer_name=$votre_chantier_PCRS)
```

Vous pouvez maintenant retrouver vos données dans cartes.gouv (https://cartes.gouv.fr/entrepot/$id_datastore/donnees/$votre_chantier_PCRS) ou les visionner dans un SIG comme QGIS en renseignant les urls des GetCapabilities des services ([WMTS](https://data.geopf.fr/wmts?service=WMTS&request=GetCapabilities) et [WMS-Raster](https://data.geopf.fr/wms-r?service=WMS&request=GetCapabilities)).

???+ warning "Attention"
    Les urls indiquées dans cartes.gouv correspondent à des GetCapabilities filtrés par votre datastore. Cette fonctionnalités est en cours de développement et les urls ne sont pas encore valides.

## Nettoyage

### Suppression de la livraison

Afin de ne pas surcharger l'espace de livraison et de ne pas atteindre vos quotas lors de livraisons ultérieures, une fois que vous avez validez que vos flux fonctionnent correctement, nous vous recommandons de supprimer la livraison avec la commande suivante :

```sh
python3 -m sdk_entrepot_gpf workflow -f PCRS.jsonc -s upload_delete --param producteur $votre_chantier_PCRS
```

Le programme doit vous indiquer que la suppression s'est bien passée `INFO - Suppression effectuée.`.

### Suppression d'un flux

Si vous souhaitez supprimer un flux, cela passe par la dépublication de vos couches et la suppression de la pyramide. Pour cela, lancez la commande :

```sh
python3 -m sdk_entrepot_gpf workflow -f PCRS.jsonc -s depublication --param producteur $votre_chantier_PCRS
```

Le programme va vous demander de confirmer les entités à supprimer `INFO - Voulez-vous effectuer la suppression ? (oui/NON)`, vous allez devoir répondre `oui` si les entités listées en vert au-dessus correspondent bien à celles à supprimer.

## Mise à jour

Si une mise à jour concerne l'ensemble du territoire d'une APLC (Autorité Publique Locale Compétente), nous préconisons de construire une nouvelle pyramide et de diffuser des nouvelles offres en reprenant le [tutoriel](tutoriel_pcrs.md) du début avec les nouvelles données.

Si une mise à jour ne concerne qu'une emprise limitée, vous allez pouvoir créer une nouvelle pyramide qui prendra en compte les nouvelles dalles et mettre à jour les offres.

Pour cela, livrez les nouvelles dalles en ajoutant un tag `version` à votre fichier descripteur :

```json
{
    "datasets": [
        {
            "data_dirs": [
                "$votre_chantier_PCRS_v2"
            ],
            "upload_infos": {
                "description": "Description de votre chantier (département, zone, date...) maj v2",
                "name": "$votre_chantier_PCRS_v2",
                "srs": "EPSG:2154",
                "type": "RASTER"
            },
            "comments": [
                "Votre commentaire"
            ],
            "tags": {
                "datasheet_name": "$votre_chantier_PCRS",
                "type": "PCRS",
                "version": "2"
            }
        }
    ]
}
```

```sh
python3 -m sdk_entrepot_gpf delivery PCRS_descriptor_maj.jsonc
```

Puis, générez la nouvelle pyramide avec la commande suivante (laissez le paramètre `old_version` vide si il s'agit d'une mise à jour de la pyramide initiale) :

```sh
python3 -m sdk_entrepot_gpf workflow -f PCRS.jsonc -s pyramide_maj --param producteur $votre_chantier_PCRS --param old_version "" --param new_version 2
```

Dans le cas d'une mise à jour itérative, renseignez le paramètre `old_version` :

```sh
python3 -m sdk_entrepot_gpf workflow -f PCRS.jsonc -s pyramide_maj --param producteur $votre_chantier_PCRS --param old_version 2 --param new_version 3
```

Vous pouvez ensuite mettre à jour les offres avec la commande :

```sh
python3 -m sdk_entrepot_gpf workflow -f PCRS.jsonc -s publication_maj --param producteur $votre_chantier_PCRS --param old_version "" --param new_version 2
```

Une fois que vous avez validé les nouvelles offres, vous pouvez si vous souhaitez faire de l'historisation pour comparer (attention aux quotas de votre datastore) :

```sh
# Si vous souhaitez publier l'ancienne pyramide
python3 -m sdk_entrepot_gpf workflow -f PCRS.jsonc -s publication_old --param producteur $votre_chantier_PCRS --param old_version ""
```