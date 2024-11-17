# archetypes/itinerary/en.md
---
# URL and Basic Metadata
title: "{{ replace .Name "-" " " | title }}"
translationKey: "{{ substr .Name 0 -3 }}"
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
type: "itinerary"

# Main Taxonomies
categories: ["itinerary"]
countries: [""]
continents: [""]
travel: []
activities: []
seasons: []
difficulties: ["easy"]
duration: ""                                      # weekend, short-trip, long-trip
budget: ""                                        # budget, mid-range, luxury
planning: []

# Trip Details
trip_duration: ""                                 # Actual number of days
best_months: []                                   # List best months for this trip
trip_cost: ""                                     # Approximate cost range

# Geographic Info
destinations:
  - name: ""
    coordinates:
      latitude: 0.0000
      longitude: 0.0000

# Images
featured_image: ""
image_alt: ""
gallery_folder: ""

# SEO and Social
meta_title: ""
meta_description: ""
keywords: []
author: "Bold Explorers"

# Schema.org
schema:
  type: "TravelAction"
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

## Day by Day

### Day 1

[Your content here]

### Day 2

[Your content here]

## Practical Tips

[Your content here]
