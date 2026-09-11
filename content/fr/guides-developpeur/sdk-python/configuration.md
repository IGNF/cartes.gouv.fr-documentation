---
title: Configuration
description: Ce module Python vient avec une configuration par défaut vous permettant de définir un minimum de paramètres.
eleventyNavigation:
    key: Configuration
    order: 2
---

<!--
CE DOCUMENT N'A PAS VOCATION A ÊTRE LU DIRECTEMENT OU VIA GITHUB :
les liens seront cassés, l'affichage ne sera pas correct. Ne faites pas ça !

Consultez la doc en ligne ici : https://geoplateforme.github.io/sdk-entrepot/

Le lien vers cette page devrait être : https://geoplateforme.github.io/sdk-entrepot/configuration/
-->

Ce module Python vient avec une configuration par défaut vous permettant de définir un minimum de paramètres.
Vous pouvez cependant surcharger chaque paramètre par défaut en redéfinissant sa valeur dans un nouveau fichier de configuration.

Certains paramètres (comme vos identifiants d'API) **doivent** être redéfinis.

La configuration est composée de sections elles-même composées d'options.

Voici un exemple reprenant la structure d'un fichier de configuration :

```ini
[section_1]
option_1=valeur_1_1
option_2=valeur_1_2

[section_2]
option_1=valeur_2_1
option_2=valeur_2_2
option_3=valeur_2_3
```

Nous pouvons faire référence à la `valeur_1_1` par l'intitulé `section_1.option_1`.

## Votre fichier de configuration

Créez un fichier `config.ini` à la racine du projet ou dans votre dossier de travail.

Il faudra à minima renseigner vos identifiants API (section `store_authentification`) et éventuellement l'entrepôt principal (*datastore*) sur lequel vous allez travailler (section `store_api`).

Voici un exemple de ce que cela peut donner :

```ini
# Informations pour l'authentification
[store_authentification]
# Si besoin, normalement déjà défini dans sdk_entrepot_gpf/_conf/default.ini
client_id=gpf-warehouse
client_secret=BK2G7Vvkn7UDc8cV7edbCnHdYminWVw2
# Votre login
login=LOGIN
# Votre mot de passe
password=PASSWORD

# Informations pour l'API
[store_api]
# L'identifiant de votre entrepôt
datastore=DATASTORE_ID_TO_MODIFY
```

Explications sur les paramètres :

* `store_authentification` : paramètres concernant l'authentification sur la Géoplateforme :
  * `client_id` et `client_secret` : informations pour récupérer le token d'authentification, valeurs récupérées depuis le Swagger de l'API de la Géoplateforme au moment de l'authentification. Ces valeurs sont normalement gérées dans la configuration par défaut `sdk_entrepot_gpf/_conf/default.ini`.
  * `login` : votre nom d'utilisateur ;
  * `password` : votre mot de passe ;
* `store_api` : paramètres concernant l'API Entrepôt de la Géoplateforme :
  * `datastore` : l'identifiant du datastore principal de travail (optionnel, voir ci-dessous).

Dans la configuration, vous pouvez indiquer l'identifiant du datastore à utiliser. Celui-ci est lié à la communauté à laquelle vous appartenez.

Si vous ne le faites pas, vous devrez le préciser à l'appel des fonctions ou des commandes qui interagissent avec un datastore.

Si vous ne savez pas quoi mettre, il est possible de lister les communautés auxquelles vous participez et, pour chacune d'elles, le datastore qui lui est associé. Cela vous permet de récupérer cet identifiant.

La commande pour lister les communautés auxquelles vous appartenez est la suivante :

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

## Utilisations

### Utilisation via l'exécutable

Ce module Python est utilisable comme exécutable. Dans ce cas, vous avez deux manières d'indiquer au programme votre fichier de configuration :

* vous pouvez nommez le fichier `config.ini` et le mettre dans le répertoire courant ;
* vous pouvez indiquer au programme le chemin vers votre fichier via le paramètre `--ini` :

```sh
python -m sdk_entrepot_gpf --ini chemin/vers/config.ini TASK
```

Où `TASK` sera à remplacer par la tâche que vous souhaitez effectuer.

### Utilisation via un script

Si vous utilisez ce module Python dans un script, il faudra ouvrir le fichier de configuration via la classe `Config`(`sdk_entrepot_gpf.io.Config.Config`) au début de celui-ci :

```python
# Importez la classe Config
from sdk_entrepot_gpf.io.Config import Config

# Ajoutez votre fichier de configuration (adaptez le chemin)
Config().read("config.ini")

# Suite de votre script...
```

## Cas d'utilisation particuliers

### Utiliser un environnement particulier (qualification)

La configuration par défaut utilise l'environnement de production. Pour utiliser un autre environnement, il faudra configurer des valeurs spécifiques pour l'URL de récupération du token et l'URL d'entrée de l'API.

Pour cela, il faut ajouter deux lignes dans le fichier de configuration. Voici un exemple avec l'environnement de qualification actuel :

```ini
[store_authentification]
# L'url de récupération du token d'authentification (cf. doc)
token_url=https://sso-qua.priv.geopf.fr/realms/geoplateforme/protocol/openid-connect/token
# Autres paramètres à conserver (client_id, ...)

[store_api]
# L'url d'entrée de l'API (cf. doc)
root_url=https://data-qua.priv.geopf.fr/api
# Autres paramètres à conserver (datastore, ...)
```

Explications sur les paramètres :

* `store_authentification` : paramètres concernant l'authentification sur la Géoplateforme :
  * `token_url` : URL pour récupérer le jeton d'authentification (consulter la doc de l'API si nécessaire) ;
* `store_api` : paramètres concernant votre Entrepôt sur la Géoplateforme :
  * `root_url` : URL racine de l'API (consulter la doc de l'API si nécessaire).

### Utiliser un compte de service

Vous pouvez utiliser un compte de service en modifiant les paramètres de la section `store_authentification`. Voici un exemple :

```ini
[store_authentification]
# On modifie le type d'authentification
grant_type=client_credentials
# On indique le nom du compte de service
client_id=ID_TO_MODIFY
# On indique le secret du compte de service
client_secret=SECRET_TO_MODIFY
```

Explications sur les paramètres :

* `store_authentification` : paramètres concernant l'authentification sur la Géoplateforme :
  * `grant_type` : type de l'authentification (`password` si on a un couple login/password ou `client_credentials` si on a un couple `client_id`/`client_secret`) ;
  * `client_id` : votre groupe d’appartenance ;
  * `client_secret` : le secret associé au compte.

### Utilisation derrière un proxy

Vous pouvez indiquer les paramètres proxy dans les sections `store_authentification` et `store_api`. Voici un exemple :

```ini
[store_authentification]
http_proxy=http://proxy.ign.fr:3128
https_proxy=http://proxy.ign.fr:3128
# Autres paramètres à conserver (client_id, ...)

[store_api]
http_proxy=http://proxy.ign.fr:3128
https_proxy=http://proxy.ign.fr:3128
# Autres paramètres à conserver (datastore, ...)
```

## Authentification à double facteurs

Si vous utilisez une authentification à double facteurs, il faudra ajouter le paramètre `totp_key` dans le fichier `config.ini`. Ce paramètre correspond à la clé de génération OTP et non au code temporaire. Toutes les applications OTP ne permettent pas de récupérer cette clé (ce n'est par exemple pas le cas de [FreeOTP](https://play.google.com/store/apps/details?id=org.fedorahosted.freeotp&hl=fr)), nous préconisons l'utilisation d'[Aegis](https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis&hl=fr).

Si vous n'arrivez pas à récupérer la clé, vous pouvez repasser sur une authentification simple.

```ini
[store_authentification]
totp_key=O42E4NRXMQ3TAR2PKR3KGULVGBVUPM3B
# Autres paramètres à conserver (client_id, ...)
```