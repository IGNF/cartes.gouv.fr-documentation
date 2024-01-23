---
title: Schéma
description: Comment intégrer un schéma simple dans une page du site ?
date: git Last Modified
mermaid: true
tags:
  - composant
---

## Exemple d'utilisation dans un fichier `md`

NB : Le cartouche du fichier doit contenir : `mermaid: true` pour que le js de mermaid qui effectue la transformation du schéma en SVG soit inclus avec la page.

````md
```mermaid
flowchart LR
A[Hard] -->|Text| B(Round)
B --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
```
````

## Rendu

```mermaid
flowchart LR
A[Hard] -->|Text| B(Round)
B --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
```
