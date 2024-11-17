# archetypes/tipen.md
---
# URL and Basic Metadata
title: "{{ replace .Name "-" " " | title }}"
translationKey: "{{ substr .Name 0 -3 }}"
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
type: "tip"

# Main Taxonomies
categories: ["tip"]
travel: []                                        # adventure, cultural, nature, cities
activities: []                                    # hiking, museums, food, parks, beach, hot-springs, wildlife
planning: []                                      # flights, accommodation, car-rental, public-transport, packing, insurance
seasons: []                                       # spring, summer, fall, winter, all-year
budget: ""                                        # budget, mid-range, luxury

# Images
featured_image: ""                               # /images/tips/featured/image.webp
image_alt: ""                                    # Descriptive alt text
gallery_folder: ""                               # /images/tips/content/

# SEO and Social
meta_title: ""                                   # Leave empty to use title
meta_description: ""                             # 150-160 characters
keywords: []                                     # ["keyword1", "keyword2"]
author: "Bold Explorers"                         # Default author

# Schema.org
schema:
  type: "Article"                                # Don't change this
  datePublished: {{ .Date }}                     # Auto-generated
  dateModified: {{ .Date }}                      # Update when modified
  wordCount: ""                                  # Fill after writing
  author: "Bold Explorers"                       # Default author

# Social Sharing
og_title: ""                                     # Leave empty to use meta_title
og_description: ""                               # Leave empty to use meta_description
og_image: ""                                     # Leave empty to use featured_image
og_type: "article"                               # Don't change this
---

## Overview

[Your content here]

## Key Points

[Your content here]

## Tips & Recommendations

[Your content here]

## Additional Resources

[Your content here]
