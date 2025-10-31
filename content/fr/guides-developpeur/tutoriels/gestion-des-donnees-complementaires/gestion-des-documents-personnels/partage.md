---
title: Partage d'un document personnel
layout: layouts/parent.njk
eleventyNavigation:
    key: Partage d'un document personnel
    parent: Gestion des documents personnels
    order: 1
    nav: guides-developpeur
pictogram: digital/data-visualization.svg
---

{% from "components/component.njk" import component with context %}

Il existe deux possibilités de partage de documents personnels : 

* le partage nominatif : la personne pourra alors voir le document dans sa liste et le télécharger
* le partage public : une URL aléatoire permet alors à n'importe qui de télécharger le fichier

## Le partage nominatif

Il est nécessaire d'avoir les identifiants des personnes avec lesquelles on souhaite partager notre document.

L'ajout au chemin du nom technique de l'entrepôt permet de gérer l'unicité d'un chemin de publication d'une annexe seulement au sein d'un entrepôt. Ce nom est récupérable avec l'appel **GET** `/datastores/{identifiant de l'entrepôt de travail}`. Dans l'exemple qui suit, la racine d'accès public aux annexes de mon entrepôt est {{ urls.annexes }}/{technical_name}.

Publier une annexe revient à modifier son statut de publication.

??? POST "{{ urls.api_entrepot }}/users/me/documents/{document}/sharings"

```title="Contenu"
{{ urls.api_entrepot }}/users/me/documents/{document}/sharings
```

```json
[
    "{compte 1}",
    "{compte 2}"
]
```

```json
{
    "name": "Mon super croquis",
    "description": "Un petit coucou géoréférencé à l'IGN",
    "size": 5435,
    "mime_type": "application/octet-stream",
    "labels": [
        "tutoriels",
        "croquis"
    ],
    "_id": "{document}"
}
```
???
<br>

Désormais, les comptes ciblés pourront voir le document dans leur liste avec l'appel :

??? GET "{{ urls.api_entrepot }}/users/me/documents"

```title="Contenu"
{{ urls.api_entrepot }}/users/me/documents
```

    {{ component("table", {
        headers: ["Corps de requête Multipart"],
        data: [
            ["shared = `true`"]
        ]
    }) }}

???
<br>

Et ces comptes pourront télécharger le fichier via l'API Entrepôt ({{ urls.api_entrepot }}/users/me/documents/{document}/file, la même URL qu'avec' le compte propriétaire). Ce partage implique d'être authentifié pour le destinataire (donc d'avoir un compte) et de partager explicitement avec tous les destinataires.

## Le partage public

Ce mode de partage est plus simple mais moins sécurisé. Il consiste à associer au fichier une URL publique qui pourra être consultée anonymement.


??? PATCH "{{ urls.api_entrepot }}/users/me/documents/{document}"

```title="Contenu"
{{ urls.api_entrepot }}/users/me/documents/{document}
```

```json
{
    "public_url": true
}
```

```json
{
    "name": "Mon super croquis",
    "description": "Un petit coucou géoréférencé à l'IGN",
    "size": 5435,
    "mime_type": "application/octet-stream",
    "labels": [
        "tutoriels",
        "croquis"
    ],
    "public_url": "https://data.geopf.fr/documents/89476dA1gBOOJWU9yXp8QcpZwnTt4ICxlhWtIIQHPbMGLo.bin",
    "_id": "{document}"
}
```
???
<br>

Une URL publique a été générée aléatoirement, une extension en accord avec le type de fichier a été mise. Il est possible de supprimer cet accès public en précisant `"public_url": false`. À chaque partage public, l'URL sera différente.