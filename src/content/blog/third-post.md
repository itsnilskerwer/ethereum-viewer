---
title: 'What is SPARQL?'
description: 'Explainer for SPARQL'
pubDate: 'Sep 23 2024'
heroImage: 'blog-placeholder-2.jpg'
---
SPARQL is the query language for RDF, allowing you to extract specific data from an RDF dataset by querying for specific triples.

Here’s an example SPARQL query that retrieves all triples of a given RDF/Turtle dataset:

```sparql
CONSTRUCT WHERE { ?s ?p ?o . }
```