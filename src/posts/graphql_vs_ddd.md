---
layout: post
title: GraphQL vs Domain Driven Design
excerpt: |
  Both GraphQL and Domain-Driven Design (DDD) have been in the web development
  limelight recently. But should you use them together?
date: 2022-08-12
show_table_of_contents: false
tags:
  - post
  - software-development
  - graphql
  - ddd
---

How compatible are GraphQL and DDD at a strategic level? When used together long
term, where do they support each other and what is likely to cause friction
between them?

Before comparing them, let's briefly have a look at each in turn.

## GraphQL

In the words of the GraphQL Foundation:

> GraphQL is a query language for APIs and a runtime for fulfilling those
> queries with your existing data.
>
> <cite class="attribution"><a href="https://graphql.org">https://graphql.org</a></cite>

My understanding is that GraphQL aims to:

- Decouple client teams from teams supporting APIs
- Help developers build software faster by making it easy to write
  documentation and build powerful tooling
- Improve the performance of requests

## Domain Driven Design

DDD is a methodology, rather than a concrete technology. It is a software
development approach that focuses on solving business problems by treating the
software as a model of the domain of that business.

DDD aims to:

- Build alignment between developers and their stakeholders so that
  organisations build the right thing
- Manage complexity by decoupling teams working in different domains

# Advantageous overlaps

Both GraphQL and DDD aim to help teams build the right thing, faster. They
both require construction of a **shared language** between collaborators,
emphasize **modelling**, and steer teams towards **loose coupling**.

## Shared language

Both GraphQL and DDD advocate that building a shared language is an effective
tool when trying to get multiple groups to work together.

A [Ubiquitous Language][1] is one of the fundamental tools used in DDD. This is
a shared language developed by both developers and domain experts from the
business. Any software they build should heavily use this language. Someone who
understands the Ubiquitous Language should understand a lot of the Domain Model
without knowing much about programming.

In GraphQL, The primary way for multiple teams to synchronize is by agreeing
upon a schema. The schema defines the available types, how they can be queried,
and the available mutations. A GraphQL schema is an excellent expression of a
Ubiquitous Language as it does not prescribe much of the language used to
build the API, unlike other API paradigms (eg REST). In addition, documentation
can be added alongside its type definitions, making it easy to clarify specific
meanings.

[1]: https://medium.datadriveninvestor.com/ubiquitous-language-in-software-development-37a85f8a0100

## An emphasis on modelling

Unsurprisingly, Domain-Driven Design presents modelling the business
domain as the most important part of building complex software. Similarly,
GraphQL proponents commonly suggest first designing the proposed schema
before implementing the underlying behavior. These approaches have significant
overlapping benefits:

- By using the schema as the primary expression of the Domain Model, then
  designing the schema first means that developers can get quick feedback on
  their understanding of the Domain Model before investing in implementation

- Their are great tools available for exploring GraphQL schemas, for example
  [GraphQL Voyager][2]. These tools can make it easier for less technical
  stakeholders to explore the graph and help ensure the Ubiquitous Language is
  understood by everyone.

[2]: https://github.com/IvanGoncharov/graphql-voyager

## Loose coupling

GraphQL promotes loose coupling between clients and servers through the server's
schema. Clients only need to depend on a subset of that schema, which acts as a
clear boundary between the two. The server can add to the schema or change how
queries are executed without the client needing to make any changes.

DDD goes a step further and advocates building [Bounded Contexts][3] between
logical domains, regardless of how they interact (from services communicating
across a network to simply modules within the same monolith). These explicit
boundaries give each domain the freedom to define its own language without
conflicting with meanings used in other domains.

[3]: https://martinfowler.com/bliki/BoundedContext.html

### CQRS and event-based patterns

DDD recommends using event-based patterns, such as [Event Sourcing][4] and
[Command-Query Responsibility Separation][5](CQRS) as a way of reducing
coupling. GraphQL can support these techniques in a number of ways:

- It inherently divides commands and queries by explicitly defining mutations
  (aka commands) as separate from queries. Mutation resolvers can use different
  underlying data models from query resolvers.
- It can allow listening to events through subscriptions. This approach may not
  be best suited to service-to-service event-based communication, but it can
  be used effectively to power a client-side event-sourced data model.

[4]: https://www.eventstore.com/event-sourcing
[5]: https://www.eventstore.com/event-sourcing#CQRS

# Potential conflicts

GraphQL and DDD don't have the same priorities, so don't agree about everything.
If you're using them together you're likely to come across several circumstances
where they'll attempt to pull you in very different directions.

## Boundary sizes

It's becoming common for organisations that use GraphQL to combine multiple
GraphQL APIs, for example through [schema stitching][6] or
[Apollo Federation][7]. Apollo, one of the leading providers of GraphQL tools,
advocates that:

> Your company should have one unified graph, instead of multiple graphs created
> by each team
>
> <cite class="attribution"><a href="https://principledgraphql.com/integrity">Apollo's first integrity principle</a></cite>

This directly contradicts DDD:

> Total unification of the domain model for a large system will not be feasible
> or cost-effective
>
> <cite class="attribution">Eric Evans (Domain-Driven Design, 2003)</cite>

The issue here is that what terms mean in different contexts can vary. Often
these terms sound similar, but have crucially different meanings in different
contexts. For example, in an ecommerce domain an "order" could mean something a
customer is about to or has already purchased, but in a delivery context it
could mean something that has definitely been purchased. Unifying the
language used throughout all contexts either forces everyone to be able to
disambiguate the different meanings, or creates confusion.

[6]: https://www.graphql-tools.com/docs/schema-stitching/stitch-combining-schemas
[7]: https://www.apollographql.com/docs/federation/
[8]: https://principledgraphql.com/integrity

## Selectivity

GraphQL has the potential to enable very performant requests as it allows the
client to request only the values they need. Ideally, this means that the server
can load or calculate just those fields from its data store. DDD, however,
advocates loading entire entities (eg through the repository pattern). Used
together, this is likely to result in APIs either being less performant than
they could be or in pushing a lot of logic into the data access layer, muddying
responsibilities.

In addition, for a client and server that are part of the same Bounded Context,
DDD suggests the client should load all the fields for each entity. Despite
GraphQL's intentions, this client and server are still tightly coupled as the
client will likely need to request all fields of an entity almost all of the
time.

# Final thoughts

So should you use both GraphQL and DDD together? In most cases, I'd say they
work well together. You just need to be aware that this will cause some friction
and at times you'll have to choose one over the other.

When these conflicts arise, explicitly decide which best fits your goals. If you
don't, you'll likely pick GraphQL by default. As it's a specific technology
rather than a methodology, it's easier to measure and enforce. This means it's
easier to determine when you've successfully rolled out GraphQL, but it's also
easier to fall into the trap of seeing the GraphQL rollout as the end goal. In
reality, neither GraphQL nor DDD are worth implementing unless they're actually
providing the value your organisation needs.

<br/>
<br/>
<br/>

---

## My Personal Experience

I by no means have a perfect understanding of either GraphQL or DDD. However, I
have a fair amount of experience using each of them, both separately and
together. I have built GraphQL APIs both professionally and as part of some
[personal projects](/tag/graphql/) on and off since 2017. I've also worked at
several companies that tried using DDD and I've applied some of those patterns
to my [personal projects](/tag/ddd/). I've _even_ read a good 50% of
"Implementing Domain-Driven Design" by Vaughn Vernon (which has a lot of great
ideas, but is pretty dry).
