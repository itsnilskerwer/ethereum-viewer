---
title: 'What is RDF / Turtle?'
description: 'Explainer for RDF and Turtle'
pubDate: 'Sep 22 2024'
heroImage: 'triple.png'
---
RDF (Resource Description Framework) is a data model that structures data as semantic triples, or RDF triples or simply triples.

Triples are made up of subject, predicate, object ```< s, p, o . >```.

For example, if i want to say "Bob knows John" in RDF syntax, I would write:

```RDF
<http://example.name#BobSmith12> <http://xmlns.com/foaf/0.1/knows> <http://example.name#JohnDoe34>.
````

Turtle (Terse RDF Triple Language) is simply a more compact syntax for expressing RDF data, if multiple triples use the same subjects. Therefore Turtle is simply a shorthand form for writing RDF data and we can still call our data "RDF" if it is written in Turtle format.

Another thing we can do is define our vocabularies (or namespaces) that we use for describing relationships. There are plenty of well-written vocabularies available on the internet for re-use. In the example above, we could define the namespace of the FOAF (Friend of a Friend) vocabulary with a "@prefix" keyword. This would then look like this:

```RDF
@prefix foaf: <http://xmlns.com/foaf/0.1/>
<http://example.name#BobSmith12> foaf:knows <http://example.name#JohnDoe34>.
```

RDF can be used to describe all kinds of data. RDF format unpacks the data's meaning for humans and machines, and allows maximum interoperability. Check out an example of an RDF dataset at https://github.com/itsnilskerwer/eip-rdf/blob/main/EIP-777.ttl.