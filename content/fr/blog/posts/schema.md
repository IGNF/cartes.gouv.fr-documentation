---
title: Schéma
description: Comment intégrer un schéma simple dans une page du site ?
date: git Last Modified
mermaid: true
tags:
  - composant
---

## Exemple d'utilisation dans un fichier `md`

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
