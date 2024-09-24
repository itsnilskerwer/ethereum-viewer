---
title: 'What is SPARQL?'
description: 'Explainer for SPARQL'
pubDate: 'Sep 22 2024'
heroImage: 'sparql-hero-image.png'
---
SPARQL is the query language for RDF, allowing you to extract specific data from an RDF dataset by querying for specific triples.

Here’s an example SPARQL query that retrieves all triples of a given RDF/Turtle dataset:

```sparql
CONSTRUCT WHERE { ?s ?p ?o . }
```

From a terminal, one can use curl to query the locally running SPARQL endpoint at http://localhost:3030/EIPS/sparql, like so:

```sparql
curl -X POST \
  -H "Accept: text/turtle" \
  --data-urlencode "query=CONSTRUCT { ?s ?p ?o } WHERE { ?s ?p ?o }" \
  http://localhost:3030/EIPS/sparql
```
