---
title: Résolveur
description: Les résolveurs sont des outils permettant de compléter les workflows en remplaçant un pattern par la valeur calculée.
eleventyNavigation:
    key: Résolveur
    order: 9
---

<!--
CE DOCUMENT N'A PAS VOCATION A ÊTRE LU DIRECTEMENT OU VIA GITHUB :
les liens seront cassés, l'affichage ne sera pas correcte. Ne faites ça !

Consultez la doc en ligne ici : https://geoplateforme.github.io/sdk-entrepot/

Le lien vers cette page devrait être : https://geoplateforme.github.io/sdk-entrepot/resolveurs/
-->

## Utilisation

Le nom d'un résolveur est donné à son initialisation. Il est possible d'avoir plusieurs résolveurs d'un même type.

A l'utilisation du SDK comme un exécutable, il y a 4 résolveurs d’instanciés :

* `user` : un [UserResolver](#userresolver)
* `store_entity` : un [StoreEntityResolver](#storeentityresolver)
* `datetime`: un [DateResolver](#dateresolver)
* `params`: un [DictResolver](#dictresolver) avec les valeurs passées en `--params`

A l'utilisation comme module, il n'y a aucun résolveur d’instancié. Il faut instancier des résolveurs dans le programme et les ajouter au `GlobalResolver`.

Dans le fichier de workflow, pour utiliser le résolveur il faut ajouter le pattern permettant d'activer le résolveur selon le type de donnée attendu :

* Texte : `"{nom_du_resolveur.nom_de_la_clef}"`
* Liste: `["_nom_du_resolveur_", "nom_de_la_clef"]` ou `["_nom_du_resolveur.nom_de_la_clef"]`
* Dictionnaire : `{"_nom_du_resolveur_": "nom_de_la_clef"}`

## Résolveurs de base

Il y a 4 résolveurs de base :

* [DictResolver](#dictresolver): permet d'insérer les valeurs contenues dans un dictionnaire ;
* [FileResolver](#fileresolver): insère les valeurs contenues dans un fichier ;
* [StoreEntityResolver](#storeentityresolver): récupère des informations sur les entités depuis la GPF ;
* [UserResolver](#userresolver): récupère des informations de l'utilisateur courant depuis la GPF ;
* [DateResolver](#dateresolver): insertion d'une date au format désiré.

### DictResolver

Permet de résoudre des paramètres clé -> valeur (pas de sous clef)

Prend en initialisation le dictionnaire contenant les valeurs.

Exemple :

```python
from sdk_entrepot_gpf.workflow.resolver.DictResolver import DictResolver
from sdk_entrepot_gpf.workflow.resolver.GlobalResolver import GlobalResolver

dictionnaire = {
    "ajout_text": "valeur 1",
    "ajout_liste": ["val 1", "val 2"],
    "ajout_dict": {"key1": "val1", "key2": "val2"},
}

# initialisation (instanciation du résolveur + ajout)
dict_resolver = DictResolver("my_dict", dictionnaire)
GlobalResolver().add_resolver(dict_resolver)

# texte à résoudre
text = """
insertion de text ici >{my_dict.ajout_text}<
ici une liste >["_my_dict.ajout_liste"]<
ou une liste >["_my_dict_","ajout_liste"]<
ici un dictionnaire >{"_my_dict_": "ajout_dict"}<
"""

# resolution
print(GlobalResolver().resolve(text))
## affichage
#    insertion de text ici >valeur 1<
#    ici une liste >['val 1', 'val 2']<
#    ou une liste >['val 1', 'val 2']<
#    ici un dictionnaire >{'key1': 'val1', 'key2': 'val2'}<

```

### FileResolver

Permet de résoudre des paramètres faisant référence à des fichiers : ce résolveur permet d'insérer le contenu d'un fichier au moment de la résolution.

Ce fichier peut être un fichier texte basique, une liste au format JSON ou un dictionnaire au format JSON.

A l'utilisation de ce résolveur, il faut indiquer le chemin du fichier à insérer relativement au chemin indiqué à l'instanciation du résolveur :

* récupération de texte : `{nom_resolver}.str({chemin_fichier})`
* récupération d'une liste : `{nom_resolver}.list({chemin_fichier})`
* récupération d'un dictionnaire : `{nom_resolver}.dict({chemin_fichier})`

Exemple :

```python
from pathlib import Path
from sdk_entrepot_gpf.workflow.resolver.FileResolver import FileResolver
from sdk_entrepot_gpf.workflow.resolver.GlobalResolver import GlobalResolver

# dans le répertoire courant on a les fichiers suivants
## text simple: "text.txt"
# * contenu => "coucou"
## liste: "liste.json"
# * contenu => ["valeur 1", "valeur 2"]
## dictionnaire: "dict.json"
# * contenu => {"k1":"v1", "k2":"v2"}

# initialisation (le résolveur s'appelle "fichier" et cherche les fichiers relativement au répertoire courant)
file_resolver = FileResolver("fichiers", Path("."))
GlobalResolver().add_resolver(file_resolver)

# texte à résoudre
text = """
insertion de text ici >{fichiers.str(text.txt)}<
ici une liste >["_fichiers_","list(liste.json)"]<
ici un dictionnaire >{"_fichiers_":"dict(dict.json)"}<
"""

# resolution
print(GlobalResolver().resolve(text))
## affichage
#   insertion de text ici >coucou<
#   ici une liste >["valeur 1", "valeur 2"]<
#   ici un dictionnaire >{"k1":"v1", "k2":"v2"}<
```

### StoreEntityResolver

Permet de résoudre des paramètres faisant référence à une entité sur la GPF.
Utilisation du pattern `store_entity_regex` de la configuration.

La structure est légèrement différente: `{nom_résolveur}.{entity_type}.{field_type}.{field} ([INFOS ({key}={val}, [...])], [TAGS ({key}={val}, [...])])`

avec :

* `entity_type` : type de l'entité à récupérer, une des valeurs suivantes : `upload|stored_data|processing_execution|offering|processing|configuration|endpoint|static|datastore` ;
* `field_type` : `tags` pour récupérer la valeur d'un tag, `infos` pour récupérer une valeur du dictionnaire décrivant l'entité ;
* `field`: si `tags` nom du tag dont on veut la valeur, si `infos` clef du dictionnaire dont on veut la valeur ;
* `INFOS ({key}={val}, ...)` : (optionnel) filtre sur les entités hors tag, voir la doc de la requête de liste des entités pour connaître la liste des clefs possibles ;
* `TAGS ({key}={val}, ...)` : (optionnel) filtre sur les tags (s'il y a des tags sur cette entité).

Si on a plusieurs résultats le premier résultat est utilisé.

Exemple (fonctionne après la livraison des données du [tutoriel 2 pour les flux vecteur](tutoriel_2_flux_vecteur.md) ) :

```python
from sdk_entrepot_gpf.workflow.resolver.StoreEntityResolver import StoreEntityResolver
from sdk_entrepot_gpf.workflow.resolver.GlobalResolver import GlobalResolver
from sdk_entrepot_gpf.io.Config import Config

# configuration
Config().read("config.ini")

# initialisation
file_resolver = StoreEntityResolver("store_entity")
GlobalResolver().add_resolver(file_resolver)

# texte à résoudre
text = """
id d'un traitement par son nom  >{store_entity.processing.infos._id [INFOS(name=Intégration de données vecteur livrées en base)]}<
id d'un upload par son nom >{store_entity.upload.infos._id [INFOS(name=EXAMPLE_DATASET_VECTOR)]}<
id d'un upload par son nom et tag >{store_entity.upload.infos._id [INFOS(name=EXAMPLE_DATASET_VECTOR), TAGS(tuto=oui)]}<
valeur du tag "tuto" d'un upload par son nom >{store_entity.upload.tags.tuto [INFOS(name=EXAMPLE_DATASET_VECTOR)]}<
"""

# resolution
print(GlobalResolver().resolve(text))
## affichage
#    id d'un traitement par son nom  >0de8c60b-9938-4be9-aa36-9026b77c3c96<
#    id d'un upload par son nom >a2703a39-d3d5-48f2-8372-bbabfc08cdf4<
#    id d'un upload par son nom et tag >a2703a39-d3d5-48f2-8372-bbabfc08cdf4<
#    valeur du tag "tuto" d'un upload par son nom >oui<

```

### UserResolver

Permet de résoudre des paramètres avec les informations sur l'utilisateur authentifié. Les informations disponibles sont celles renvoyée par la route [/users/me](https://data.geopf.fr/api/swagger-ui/index.html#/Utilisateurs/get).

Classe dérivée de DictRevolver, la plus-value sur la classe DictRevolver est que les infos de l'utilisateur sont directement récupérées par le constructeur de la classe.

```python
from sdk_entrepot_gpf.workflow.resolver.UserResolver import UserResolver
from sdk_entrepot_gpf.workflow.resolver.GlobalResolver import GlobalResolver
from sdk_entrepot_gpf.io.Config import Config

# configuration
Config().read("config.ini")

# initialisation
file_resolver = UserResolver("user")
GlobalResolver().add_resolver(file_resolver)

# texte à résoudre
text = """
nom de l'utilisateur >{user.last_name}<
prénom de l'utilisateur >{user.first_name}<
"""

# resolution
print(GlobalResolver().resolve(text))
```

### DateResolver

Permet d'insérer la date actuelle ou une date relative à la date actuelle dans le workflow.

Utilisation, résolveur nommé *my_date* et date actuelle `19/02/2024 14:01`:

* date actuelle : `my_date.now.date` => `19/02/2024`
* heure actuelle : `my_date.now.time` => `14:01`
* date et heure actuelle : `date.now.datetime`=> `19/02/2024 14:01`
* changement du pattern de sortie : `date.now.strtime(%Y-%m-%dT%H:%M:%S)` => `2024-02-19T14:01:02`

* date et heure actuelle + ajouter/enlever du temps :
  * `my_date.now.add(hour=4,year=1,month=2,day=3,minutes=5).datetime` => `22/04/2025 18:06`
  * `my_date.now.datetime.add(year=-1).datetime` => `19/02/2023 14:01`
  * `my_date.now.datetime.add(weak=-1).datetime` => `19/02/2023 14:01`

donc `{nom_resolver}.now[.add\(year(s)=X,month(s)=X,day(s)=X,hour(s)=X,minute(s)=X,second(s)=X,week(s)=X\)].(date|time|datetime|strtime\({pattern}\))`

Pour `add` on a les options : `year`,`month` ,`day`, `hour`, `minute`, `second`, `week` (ou avec des `s`) qui permettent d'ajouter (valeur positive) ou enlever (valeur négative) du temps à la date. Il n'y a pas d'ordre dans les paramètres et ils ne sont pas tous obligatoires.

Les pattern pour les dates (date, time, datetime, pattern donné avec strtime) suivent les [patterns de datetime](https://docs.python.org/fr/3/library/datetime.html#strftime-and-strptime-format-codes). Les pattern des sorties par défaut (date, time, datetime) sont dans la configuration.

```ini
datetime_pattern = %d/%m/%Y %H:%M
date_pattern = %d/%m/%Y
time_pattern = %H:%M
```

Exemple :

```python
from sdk_entrepot_gpf.workflow.resolver.DateResolver import DateResolver
from sdk_entrepot_gpf.workflow.resolver.GlobalResolver import GlobalResolver
from sdk_entrepot_gpf.io.Config import Config

# configuration
Config().read("config.ini")

# initialisation
date_resolver = DateResolver("date")
GlobalResolver().add_resolver(date_resolver)

# texte à résoudre
text = """
## Affichage date courante
datetime courant > {date.now.datetime} <
date courant > {date.now.date} <
heure courant > {date.now.time} <
date actuelle pattern différent > {date.now.strtime(%Y-%m-%dT%H:%M:%S)} <

## Ajout de temps
date +1an > {date.now.add(year=1).date} <
date +1semaine > {date.now.add(week=1).date} <
heure +4h > {date.now.add(hours=4).time} <
datetime +1an 4h > {date.now.add(year=1, hours=4).datetime} <
date +1an 4h pattern différent > {date.now.add(year=1, hours=4).strtime(%Y-%m-%dT%H:%M:%S)} <

## différentes modifications de date :
Y+1 M+2 D+3 H+4 M+5 > {date.now.add(year=1,month=2,day=3,hour=4,minute=5).datetime} <
Y-1 M+2 D+3 H-4 M+5 > {date.now.add(year=-1,month=2,day=3,hour=-4,minute=5).datetime} <
Y-1 M+2 D+3 H-4 M+5 > {date.now.add(years=-1,months=2,days=3,hours=-4,minutes=5).datetime} <
"""

# resolution
print(GlobalResolver().resolve(text))

## affichage
#    ## Affichage date courante
#    datetime courant > 20/02/2024 11:08 <
#    date courant > 20/02/2024 <
#    heure courant > 11:08 <
#    date actuelle pattern différent > 2024-02-20T11:08:03 <
#
#    ## Ajout de temps
#    date +1an > 20/02/2025 <
#    date +1semaine > 27/02/2024 <
#    heure +4h > 15:08 <
#    datetime +1an 4h > 20/02/2025 15:08 <
#    date +1an 4h pattern différent > 2025-02-20T15:08:03 <
#
#    ## différentes modifications de date :
#    Y+1 M+2 D+3 H+4 M+5 > 23/04/2025 15:13 <
#    Y-1 M+2 D+3 H-4 M+5 > 23/04/2023 07:13 <
#    Y-1 M+2 D+3 H-4 M+5 > 23/04/2023 07:13 <
```

## Créer son résolveur

Pour créer votre résolveur, vous devez créer une classe qui hérite de la classe `AbstractResolver`.

Dans le constructeur de votre classe, il faudra implémenter les tâches qui doivent être effectuées une fois. Par exemple, de récupérer les informations de l'utilisateur (qui, à priori, ne changent pas à chaque résolution).

Dans la fonction `resolve` de votre classe, il faudra implémenter la résolution du paramétrage à partir de la string `string_to_solve` avant de retourner la valeur résolue.