# archetypes/itinerary/es.md
---
# URL y Metadatos Básicos
title: "{{ replace .Name "-" " " | title }}"
translationKey: "{{ substr .Name 0 -3 }}"
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
type: "itinerario"

# Taxonomías Principales
categories: ["itinerario"]
countries: [""]
continents: [""]
travel: []
activities: []
seasons: []
difficulties: ["facil"]
duration: ""                                      # fin-de-semana, viaje-corto, viaje-largo
budget: ""                                        # economico, medio, lujo
planning: []

# Detalles del Viaje
trip_duration: ""                                 # Número real de días
best_months: []                                   # Mejores meses para este viaje
trip_cost: ""                                     # Rango aproximado de coste

# Información Geográfica
destinations:
  - name: ""
    coordinates:
      latitude: 0.0000
      longitude: 0.0000

# Imágenes
featured_image: ""
image_alt: ""
gallery_folder: ""

# SEO y Social
meta_title: ""
meta_description: ""
keywords: []
author: "Exploradores Audaces"

# Schema.org
schema:
  type: "TravelAction"
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

## Día a Día

### Día 1

[Tu contenido aquí]

### Día 2

[Tu contenido aquí]

## Consejos Prácticos

[Tu contenido aquí]