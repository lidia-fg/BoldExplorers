# archetypes/tipes.md
---
# URL y Metadatos Básicos
title: "{{ replace .Name "-" " " | title }}"
translationKey: "{{ substr .Name 0 -3 }}"
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
type: "consejo"

# Taxonomías Principales
categories: ["consejo"]
travel: []                                        # aventura, cultural, naturaleza, ciudades
activities: []                                    # senderismo, museos, gastronomia, parques, playa, aguas-termales, vida-salvaje
planning: []                                      # vuelos, alojamiento, alquiler-coche, transporte-publico, equipaje, seguro
seasons: []                                       # primavera, verano, otono, invierno, todo-el-ano
budget: ""                                        # economico, medio, lujo

# Imágenes
featured_image: ""                               # /images/consejos/featured/imagen.webp
image_alt: ""                                    # Texto alt descriptivo
gallery_folder: ""                               # /images/consejos/content/

# SEO y Social
meta_title: ""                                   # Dejar vacío para usar title
meta_description: ""                             # 150-160 caracteres
keywords: []                                     # ["palabra1", "palabra2"]
author: "Exploradores Audaces"                   # Autor por defecto

# Schema.org
schema:
  type: "Article"                                # No cambiar
  datePublished: {{ .Date }}                     # Auto-generado
  dateModified: {{ .Date }}                      # Actualizar al modificar
  wordCount: ""                                  # Rellenar después de escribir
  author: "Exploradores Audaces"                 # Autor por defecto

# Social Sharing
og_title: ""                                     # Dejar vacío para usar meta_title
og_description: ""                               # Dejar vacío para usar meta_description
og_image: ""                                     # Dejar vacío para usar featured_image
og_type: "article"                               # No cambiar
---

## Resumen

[Tu contenido aquí]

## Puntos Clave

[Tu contenido aquí]

## Consejos y Recomendaciones

[Tu contenido aquí]

## Recursos Adicionales

[Tu contenido aquí]