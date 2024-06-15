#!/bin/bash

# Crear la carpeta si no existe
folderPath="/mnt/c/Projects/nandolopez.github.io/src/content/blog"
mkdir -p "$folderPath"

# Topics y tags de ejemplo
topics=("Angular", "Github", "Windows", "Ubuntu")
tags=("tag1" "tag2", "tag3", "tag4", "tag5")

# Función para generar fechas aleatorias
get_random_date() {
    startDate=$(date -d "2023-01-01" +%s)
    endDate=$(date -d "2030-12-31" +%s)
    randomDate=$(date -d "@$((startDate + RANDOM % (endDate - startDate)))" +%Y-%m-%d)
    echo "$randomDate"
}

# Crear 31 archivos .md con contenido
for i in {1..31}; do
    title="Titulo de ejemplo $i"
    description="Descripción de ejemplo $i"
    pubDate=$(get_random_date)
    updateDate=$(get_random_date)
    topic=${topics[$RANDOM % ${#topics[@]}]}
    fileName="file$i.md"
    filePath="$folderPath/$fileName"

    content=$(cat <<EOF
---
title: "$title"
description: "$description"
index: true
pubDate: "$pubDate"
update_date: "$updateDate"
meta_title: "$title"
meta_description: "$description"
topic: "$topic"
status: published
tags: "$(IFS=', '; echo "${tags[*]}")"
---

# $title

**$description**

![Example Image](https://via.placeholder.com/150)

## Sección 1

Texto de ejemplo para la sección 1. Aquí puedes incluir un [enlace de ejemplo](https://example.com).

## Sección 2

Más texto de ejemplo, incluyendo **negritas** y *cursivas*. 

![Otra Imagen](https://via.placeholder.com/200)

## Conclusión

Este es un archivo de ejemplo para demostrar la estructura YAML y el contenido en markdown.
EOF
    )

    # Guardar el contenido en el archivo
    echo "$content" > "$filePath"
done

echo "Archivos .md creados en $folderPath"
