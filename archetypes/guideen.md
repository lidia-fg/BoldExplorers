# archetypes/guide/en.md
---
# URL and Basic Metadata
title: "{{ replace .Name "-" " " | title }}"
translationKey: "{{ substr .Name 0 -3 }}"
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
type: "guide"

# Main Taxonomies
categories: ["guide"]
countries: [""]                                   # lowercase, english name
continents: [""]                                  # europe, asia, africa, north-america, south-america, oceania
travel: []                                        # adventure, cultural, nature, cities
activities: []                                    # hiking, museums, food, parks, beach, hot-springs, wildlife
seasons: ["all-year"]                            # spring, summer, fall, winter, all-year
difficulties: ["easy"]                            # easy, moderate, challenging
planning: []                                      # flights, accommodation, car-rental, public-transport, packing, insurance

# Geographic Info
destinations:
  - name: ""
    coordinates:
      latitude: 0.0000
      longitude: 0.0000

# Images
featured_image: ""                               # /images/[country]/featured/image.webp
image_alt: ""
gallery_folder: ""                               # /images/[country]/content/

# SEO and Social
meta_title: ""
meta_description: ""
keywords: []
author: "Bold Explorers"

# Schema.org
schema:
  type: "Guide"
  datePublished: {{ .Date }}
  dateModified: {{ .Date }}
  wordCount: ""
  author: "Bold Explorers"

# Social Sharing
og_title: ""
og_description: ""
og_image: ""
og_type: "article"
---

## Overview

[Your content here]

## What to See

[Your content here]

## Practical Information

[Your content here]