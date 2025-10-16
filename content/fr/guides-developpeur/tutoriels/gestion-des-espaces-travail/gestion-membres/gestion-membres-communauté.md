---
title: Gestion des droits des membres d'une communauté
mermaid: true
eleventyNavigation:
    key: Gestion des droits des membres d'une communauté
    parent: Gestion des membres d'une communauté
    order: 1
    nav: guides-developpeur
---

Lorsque l'on appartient à une communauté avec le droit `COMMUNITY`, on a la possibilité d'en gérer les membres :

- Voir la liste des membres et leurs droits
- Ajouter un nouveau membre
- Modifier les droits d'un membre
- Exclure un membre

Le membre superviseur de la communauté ne peut pas être exlu et possède forcément tous les droits.

## Présentation des droits

Les droits sur une communauté sont très globaux : ils ne portent pas sur chaque entité mais sur les routes. La plupart concernent les communautés associées à un entrepôt. On suppose que des personnes partageant une communauté travaillent ensemble. Les lectures au sein d'un espace de travail sont globalement toujours permises (même pour un membre n'ayant aucun droit spécifique).

Les droits sont :

- `ANNEX` : autorise le téléversement, la publication et la suppression des annexes
- `UPLOAD` : autorise la création de livraisons, le téléversement de fichiers dans les livraisons, la fermeture/ouverture et la suppression
- `BROADCAST` : autorise la configuration et la publication d'offres
- `PROCESSING` : autorise la création d'exécutions de traitements et leur déclenchement
- `COMMUNITY` : autorise la modification d'une communauté et la gestion de ses membres. Voir la liste des membres est l'une des rares lectures à n'être autorisée qu'en cas de possession de ce droit.

## Connaître ses droits

Lorsque l'on récupère ses informations personnelles sur l'Entrepôt, on voit la liste des communautés auxquelles on appartient, ainsi que nos droits dans chacune.


??? request-get "{{ urls.api_entrepot }}/users/me"

    === "Corps de réponse JSON"

        ``` json
        {
            "email": "dave.lopper@ign.fr",
            "creation": "2023-02-01T09:45:10.725069Z",
            "last_call": "2023-03-24T17:02:32.676055Z",
            "communities_member": [
                {...},
                {
                    "rights": [
                        "ANNEX",
                        "UPLOAD",
                        "BROADCAST",
                        "PROCESSING",
                        "COMMUNITY"
                    ],
                    "community": {
                        "name": "Communauté des tutoriels",
                        "technical_name": "tutoriels",
                        "datastore": "{datastore}",
                        "supervisor": "{user}",
                        "public": true,
                        "_id": "{community}"
                    }
                },
                {...}
            ],
            "technical": false,
            "administrator": false,
            "_id": "{user}",
            "last_name": "Lopper",
            "first_name": "Dave"
        }
        ```

## Lister les membres


??? request-get "{{ urls.api_entrepot }}/communities/{community}/users"

    === "Corps de réponse JSON"

        ``` json
        [
            {
                "rights": [
                    "BROADCAST",
                    "PROCESSING",
                    "UPLOAD",
                    "COMMUNITY",
                    "ANNEX"
                ],
                "user": {
                    "email": "dave.lopper@ign.fr",
                    "_id": "{user}",
                    "last_name": "Lopper",
                    "first_name": "Dave"
                }
            },
            {
                "rights": [
                    "BROADCAST",
                    "COMMUNITY"
                ],
                "user": {
                    "email": "anne.halise@ign.fr",
                    "_id": "{user}",
                    "last_name": "Halise",
                    "first_name": "Anne"
                }
            }
        ]
        ```

## Ajouter / modifier un membre

Une seule route de l'API va permettre d'ajouter ou modifier les droits d'un membre (en mode "UPSERT"). Pour ajouter une personne, il faut avoir son identifiant Entrepôt. Cela implique qu'elle ait joué la requête de récupération des ses informations personnelles. Si la personne était déjà membre, on remplace ses droits par ceux définis dans le corps. Sinon on ajoute la personne avec ces droits.

??? request-put "{{ urls.api_entrepot }}/communities/{community}/users/{user}"

    === "Corps de réponse JSON"
        ```json
        {
            "rights": [
                "UPLOAD",
                "BROADCAST",
                "COMMUNITY"
            ]
        }
        ```

## Exclure un membre

??? request-delete "{{ urls.api_entrepot }}/communities/{community}/users/{user}"

