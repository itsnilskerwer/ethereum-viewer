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

Another example, that retrieves all authors of an EIP:

```sparql
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX gist: <https://ontologies.semanticarts.com/o/gistCore/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
CONSTRUCT { 
 ?eip gist:hasParticipant ?eipEditor . }
WHERE {
 ?eip a foaf:Document .
 ?eip gist:hasParticipant ?eipEditor .
}
```

Notice the defined vocabularies (or namespaces) at the top of the query, using the keyword PREFIX. Including prefixes is required if we make use of these vocabularies inside our query.

For more curated SPARQL Query Examples, visit https://github.com/itsnilskerwer/eip-rdf/