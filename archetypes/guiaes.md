# archetypes/guide/es.md
---
# URL y Metadatos Básicos
title: "{{ replace .Name "-" " " | title }}"
translationKey: "{{ substr .Name 0 -3 }}"
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
type: "guia"

# Taxonomías Principales
categories: ["guia"]
countries: [""]                                   # minúsculas, nombre en español
continents: [""]                                  # europa, asia, africa, norte-america, sur-america, oceania
travel: []                                        # aventura, cultural, naturaleza, ciudades
activities: []                                    # senderismo, museos, gastronomia, parques, playa, aguas-termales, vida-salvaje
seasons: ["todo-el-ano"]                         # primavera, verano, otono, invierno, todo-el-ano
difficulties: ["facil"]                           # facil, moderado, desafiante
planning: []                                      # vuelos, alojamiento, alquiler-coche, transporte-publico, equipaje, seguro

# Información Geográfica
destinations:
  - name: ""
    coordinates:
      latitude: 0.0000
      longitude: 0.0000

# Imágenes
featured_image: ""                               # /images/[pais]/featured/imagen.webp
image_alt: ""
gallery_folder: ""                               # /images/[pais]/content/

# SEO y Social
meta_title: ""
meta_description: ""
keywords: []
author: "Exploradores Audaces"

# Schema.org
schema:
  type: "Guide"
  datePublished: {{ .Date }}
  dateModified: {{ .Date }}
  wordCount: ""
  author: "Exploradores Audaces"

# Social Sharing
og_title: ""
og_description: ""
og_image: ""
og_type: "article"
---

## Resumen

[Tu contenido aquí]

## Qué Ver

[Tu contenido aquí]

## Información Práctica

[Tu contenido aquí]