---
title: Ajout du statut `UNPUBLISHED` pour les offres + Evolutions de l’API d’Extraction + corrections de bugs sur l’entrepôt
description: Ajout du statut `UNPUBLISHED` pour les offres, evolutions de l’API d’Extraction, ajout de filtres sur la route du catalogue des organisations, modification du retour lors de la création d’un accès à une clé, corrections de bugs de l’entrepôt
tags:
    - Extraction
    - Entrepôt
eleventyNavigation:
    key: Ajout du statut `UNPUBLISHED` pour les offres + Evolutions de l’API d’Extraction + corrections de bugs sur l’entrepôt
    order: -20260923
date: 2026-09-23
---

## Changements

**Ajout du statut `UNPUBLISHED` pour les offres**
Afin de gérer la désactivation de couches sans les supprimer (pour en garder l’ID, les permissions et les statistiques), on ajoute un statut `UNPUBLISHED` aux offres. Ce statut implique les nouveaux comportement suivants :

- DELETE sur une offre en statut `PUBLISHED` : l’offre passe en `UNPUBLISHING` puis en `UNPUBLISHED` une fois la dépublication terminé. A ce moment, l’offre n’est plus accessible (absent du GetCap par exemple) mais n’est pas encore supprimé de l’entrepôt
- Si on fait un PUT sur une offre `UNPUBLISHED`, l’offre passe en `PUBLISHING` puis en `PUBLISHED` une fois la publication terminée. L’offre est de nouveau disponible comme après une publication classique
- Si on fait de nouveau un DELETE sur une offre `UNPUBLISHED`, l’offre est supprimée avec toutes ses dépendances (accès et permission)

Ainsi, si on souhaite supprimer une offre, il faudra faire 2 DELETE à la suite sur celle-ci. De même pour supprimer une configuration, il faudra bien faire 2 DELETE sur son offre avant de pouvoir supprimer la configuration

De plus, il sera impossible de créer une nouvelle offre sur un endpoint s’il existe déjà une autre offre en `UNPUBLISHED` pour la même configuration sur cet endpoint

**Evolutions sur l’[API d’Extraction](../../extraction/)**

- Ajout d’un `jobname` dans les job d’extraction : ce champ permettra de donner un nom personnalisable au job. Pour la route [`POST /extraction/processes/{processID}/execution`](https://data.geopf.fr/extraction/swagger-ui/index.html#/Execute), il est possible de définir ce `jobName` dans la partie `output`. Ce qui donne cet exemple type de body :

```json
{
   "inputs":{
      "compression":"7zip",
      "relations":{
         "region":{
            "attributes":[
               "code",
               "nom",
               "code_insee"
            ],
            "filters":"WHERE nom IN (’Île-de-France’, ’Auvergne-Rhône-Alpes’, ’Provence-Alpes-Côte d’Azur’)"
         },
         "commune":{
            "attributes":[
               "code",
               "nom_com",
               "code_insee"
            ],
            "filters":"WHERE code_insee == ’75013’"
         }
      },
      "srs":"EPSG:4326",
      "format":"PARQUET",
      "append":true,
      "retentionDuration":24
   },
   "outputs":{
      "logs":{
         
      },
      "summary":{
         
      },
      "extractedData":{
         
      },
      "jobName": "Nom personnalisé",
   }
}
```

- Ajout d’une route de restitution des paramètres d’execution d’un job :  `GET /extraction/jobs/{job}/inputs`. Cette route restitue la totalité des inputs utilisé lors de la création du job avec la route [`POST /extraction/processes/{processID}/execution`](https://data.geopf.fr/extraction/swagger-ui/index.html#/Execute). L’objectif est de permettre aux consommateurs de l’API de retrouver les paramètres exacts ayant servi à générer une extraction sans avoir à les conserver côté client. Cela faciliterait la duplication et ou modification d’un ancien paramétrage pour recréer une nouvelle extraction.

**Ajout de filtres sur la route du catalogue des organisations**

Pour la route [`GET /catalogs/organizations`](https://data.geopf.fr/api/swagger-ui/index.html#/Acc%C3%A8s%20publics), ces filtres ont été ajoutés :

- name
- siren
- siret
- tva_intracom

**Modification du retour lors de la création d’un accès à une clé**
Lorsque l’on fait la requête [`POST /users/me/keys/{id}/accesses`](https://data.geopf.fr/api/swagger-ui/index.html#/Utilisateurs/postAccesses), nous avons un actuellement un retour vide en 204.
Le retour va être modifié et sera un JSON de description de l’accès créé (la réponse sera du même type que la route `GET /users/me/keys/{keys}/accesses/{access}`)


## Corrections de bugs

- [Entrepôt] Correction de la lenteur parfois observé sur les requêtes [`GET /datastores/{datastore}`](https://data.geopf.fr/api/swagger-ui/index.html#/Entrep%C3%B4t/get_23)
- [Entrepôt] Correction d’un bug à la récupération des logs de vérification lorsque ceux-ci faisaient plus de 2 Mo
- [Entrepôt] Correction d’un bug lors de l’utilisation du created_by pour la requête [`GET /datastores/{datastore}/processings/executions/{execution}`](https://data.geopf.fr/api/swagger-ui/index.html#/Traitements/getAll_3) dans le Swagger. Cela renvoyait une réponse vide.
- [Entrepôt] Correction des valeurs d’utilisation des endpoints affiché dans la description d’un datastore qui pouvait être incohérentes
- [Entrepôt] Correction d’un bug où la modification d’un document personnel avec la requête [`PUT users/me/documents/{id_document}`](https://data.geopf.fr/api/swagger-ui/index.html#/Documents%20personnels/updateFile) ne modifiait pas systématiquement le fichier
- [Entrepôt] Correction d’une erreur lors de l’utilisation du paramètre fields avec le fitre metadata sur les requêtes [`GET datastores/{datastore}/configurations`](https://data.geopf.fr/api/swagger-ui/index.html#/Configurations%20et%20publications/getAll_6)