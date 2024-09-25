---
title: 'What is SPARQL?'
description: 'Explainer for SPARQL'
pubDate: 'Sep 22 2024'
heroImage: 'sparql-hero-image.png'
---
SPARQL is the query language for RDF datasets, allowing you to extract data from the triples.

Here’s an example SPARQL query that retrieves all triples of a given RDF/Turtle dataset:

```sparql
CONSTRUCT WHERE { ?s ?p ?o . }
```

Another example, that retrieves all properties of an EIP:

```sparql
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX gist: <https://ontologies.semanticarts.com/o/gistCore/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX dc: <http://purl.org/dc/elements/1.1/>

CONSTRUCT {
  ?eip a foaf:Document .
  ?eip ?p ?o .
}
WHERE {
  ?eip a foaf:Document .
  ?eip ?p ?o .
}
```

Notice the defined vocabularies (or namespaces) using the keyword PREFIX. This is required if we are searching for relationships that make use of these vocabularies.

For more curated SPARQL Query Examples, visit https://github.com/itsnilskerwer/eip-rdf/blob/main/README.md