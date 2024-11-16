# archetypes/blog.md
---
# URL y Metadatos Básicos
title: "{{ replace .Name "-" " " | title }}"
translationKey: "{{ .Name }}"
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
type: "blog"

# Taxonomías Principales
categories: ["blog"]
continents: [""]  # europa, asia, africa, norte-america, sur-america, oceania
countries: [""]
travel: []  # aventura, naturaleza, ciudades, cultural
activities: []  # senderismo, museos, gastronomia, parques, playa, aguas-termales
seasons: []  # primavera, verano, otono, invierno, todo-el-ano
difficulties: ["facil"]  # facil, moderado, desafiante
duration: ""  # fin-de-semana, viaje-corto, viaje-largo
budget: ""  # economico, medio, lujo
planning: []  # vuelos, alojamiento, alquiler-coche, transporte-publico, equipaje, seguro

# SEO y Social
meta_title: ""  # Si se deja vacío, usará el title
meta_description: ""
keywords: []

# Imágenes
featured_image: ""
image_alt: ""
gallery_folder: ""

# Datos Adicionales
author: "Exploradores Audaces"

# Schema.org
schema:
  type: "Article"
  datePublished: {{ .Date }}
  dateModified: {{ .Date }}
  wordCount: ""
  author: "Exploradores Audaces"

# Social Sharing
og_title: ""  # Si se deja vacío, usará el meta_title
og_description: ""  # Si se deja vacío, usará el meta_description
og_image: ""  # Si se deja vacío, usará el featured_image
og_type: "article"
---

## Introducción

[Tu contenido aquí]

## Experiencia

[Tu contenido aquí]

## Conclusión

[Tu contenido aquí]