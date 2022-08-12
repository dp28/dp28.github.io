---
layout: post
title: GraphQL vs Domain Driven Design
excerpt: Can they work together?
date: 2022-08-12
# draft: true
tags:
  - post
  - software-development
  - graphql
  - ddd
---

Both GraphQL and Domain-Driven Design (DDD) have had some time in the web
development limelight over the last few years. But what happens if you use both
at the same time?

# Setting the stage

My aim is to focus on how compatible GraphQL and DDD are at a strategic level:
where they support each other and what is likely to cause friction between them
over the long term. Therefore I'll focus on their guiding principles more than
the specific tools and patterns used by either of them.

I by no means have a perfect understanding of either GraphQL or DDD. However, I
have a fair amount of experience using each of them, both separately and
together. I have built GraphQL APIs both professionally and as part of some
[personal projects](/tag/graphql/) on and off since 2017. I've also worked at
several companies that tried using DDD and I've applied some of those patterns
to my [personal projects](/tag/ddd/). I've even read about 50% of
"Implementing Domain-Driven Design" by Vaughn Vernon (which has a lot of great
ideas, but is pretty dry).

Before we get into working out how well GraphQL and DDD work together, let's
briefly have a look at each in turn.

## GraphQL

> GraphQL is a query language for APIs and a runtime for fulfilling those
> queries with your existing data.
>
> <cite class="attribution"><a href="https://graphql.org">https://graphql.org</a></cite>

GraphQL aims to:

- Empower developers with easy-to-write documentation and powerful tooling (and
  therefore help them build software faster)
- Decouple client teams from teams supporting APIs
- Offer both great query performance and insights into which parts of an API are
  valuable by allowing clients to ask for only what they need

## DDD

DDD is a methodology, rather than a concrete technology. It is a way of
approaching developing software that focuses on building a domain model with a
strong understanding of the business domain. It was introduced in 2003 by Eric
Evans in the book "Domain Driven Design", which describes design patterns that
can be useful when following this methodology.

DDD aims to:

- Build alignment between developers and their stakeholders to help developers build the right thing
- Manage complexity by decoupling teams working in different domains

# Where they complement each other

Both GraphQL and DDD aim to help teams **build the right thing, faster**. They
use very similar techniques to achieve this, including:

- a **shared language** to forge a common understanding between collaborators
- facilitating fast feedback by **emphasizing modelling**
- steering teams towards **loose coupling**

## Shared language

Both GraphQL and DDD advocate that building a shared language is an effective
tool when trying to get multiple groups to work together.

A [Ubiquitous Language][1] is one of the fundamental tools used in DDD. A team
practicing DDD builds a Ubiquitous Language in partnership with domain experts
from the business side of the organization. The Domain Model they build (ie the
core part of their software that implements business rules) should heavily use
this language. Someone who understands the Ubiquitous Language should understand
a lot of the Domain Model without knowing much about programming. In turn, the
Domain Model should define the terms in the Ubiquitous Language through their
use in code, so anyone reading the code should be able to pick up the
Ubiquitous Language.

The primary way for multiple teams to synchronize in GraphQL is by agreeing upon
a schema. The schema defines the available types, how they can be queried, and
the available mutations. A GraphQL schema is an excellent expression of a DDD
Ubiquitous Language as, unlike some other methods of building APIs (eg REST), it
does not prescribe specific verbs for request types, nor define a set group of
possible errors.

In addition, GraphQL schemas are partially self-documented as the types and
links between types are exposed. Further documentation can be added alongside
the type definitions in code, making a GraphQL API an excellent record of a
Ubiquitous Language.

[1]: https://medium.datadriveninvestor.com/ubiquitous-language-in-software-development-37a85f8a0100

## An emphasis on modelling

As suggested by its name, Domain-Driven Design presents modelling the business
domain as the most important part of building complex software. Similarly,
a common approach when building a GraphQL API is to use a schema-first
development methodology, where developers first design the proposed schema
before implementing the underlying behavior.

These approaches have significant overlapping benefits. If the team sees the
GraphQL schema as the primary expression of the Domain Model, then designing the
schema first means that the development team can get quick feedback on their
understanding of the Domain Model before spending too much time implementing.
In addition, the strongly-typed schema and popularity of GraphQL have given rise
to a wide range of tools for exploring a schema-only design, from reading the
Schema Definition Language itself to visual representations of the graph (eg
using [GraphQL Voyager][2]). These tools can make it easier for less technical
stakeholders to explore the graph and help ensure the Ubiquitous Language is
understood by everyone.

[2]: https://github.com/IvanGoncharov/graphql-voyager

## Loose coupling

Software systems are easiest to change if their components are loosely coupled.
This means that the components only depend on a small number of well-defined
interfaces rather than specific knowledge of other components. This makes it
easy to replace one component without breaking all the components that depended
on it.

### Distinct boundaries

GraphQL promotes loose coupling between clients and servers through the server's
schema. Clients only need to depend on that schema, which acts as a clear
boundary between the two. The server can change how queries are executed without
the client needing to make any changes.

DDD goes a step further and advocates building [Bounded Contexts][3] between
logical domains, regardless of how they interact (they be services communicating
across a network or just modules within the same monolith). Wherever they're
located, they are explicit boundaries that give each domain the freedom to use
the language it wants to without depending on the meanings used in other
domains.

[3]: https://martinfowler.com/bliki/BoundedContext.html

### CQRS and event-based patterns

Another group of techniques that DDD recommends as a way of reducing coupling is
to use event-based patterns, such as [Event Sourcing][4] and
[Command-Query Responsibility Separation][5](CQRS). GraphQL can support these
techniques in a number of ways:

- GraphQL inherently divides commands and queries by explicitly defining
  mutations (aka commands) as separate from queries. Resolvers implementing
  mutations are free to use a different underlying data model than any query
  uses.
- GraphQL enables subscribing to events through subscriptions. This approach may
  not be best suited to service-to-service event-based communication, but it can
  be used effectively to power a client-side event-sourced data model or other
  event-based system.

If you're considering using any of these patterns, GraphQL will naturally assist
you.

[4]: https://www.eventstore.com/event-sourcing
[5]: https://www.eventstore.com/event-sourcing#CQRS

# Potential conflicts

GraphQL and DDD don't agree about everything. This is natural; they're not
trying to solve the exact same problem and they don't have the same priorities.
If you're using them together you're likely to come across several circumstances
where they'll attempt to pull you in two very different directions.

## Boundary sizes

> Your company should have one unified graph, instead of multiple graphs created
> by each team
>
> <cite class="attribution"><a href="https://principledgraphql.com/integrity">Apollo's first integrity principle</a></cite>

directly conflicts with

> Total unification of the domain model for a large system will not be feasible
> or cost-effective
>
> <cite class="attribution">Eric Evans (Domain-Driven Design, 2003)</cite>

It's becoming common for organisations that use GraphQL to combine multiple
GraphQL APIs, for example through [schema stitching][6] or by using
[Apollo Federation][7]. Apollo, one of the leading providers of GraphQL tools,
advocates that a company should have a [single, unified graph][8]. This directly
contradicts DDD's recommendation to have Bounded Contexts where the Ubiquitous
Languages can be different between contexts.

The issue here is that what terms mean in different contexts can vary. Often
these terms sound similar, but have crucially different meanings in different
contexts. For example, in an ecommerce domain an "order" could mean something a
customer is about to or has already purchased, but in a delivery context it
could mean something that has definitely been purchased. Unifying the
language used throughout all contexts either forces everyone to be able to
disambiguate the different meanings, or risks confusion.

[6]: https://www.graphql-tools.com/docs/schema-stitching/stitch-combining-schemas
[7]: https://www.apollographql.com/docs/federation/
[8]: https://principledgraphql.com/integrity

## Selectivity

GraphQL has the potential to enable very performant requests as it allows the
client to request only the values they need. Ideally, this means that the server
can load or calculate just those fields from its data store. DDD, however,
advocates loading entire entities or even aggregates, often through the
repository pattern. This is likely to result in GraphQL APIs built using DDD to
either be less performant than they could be or to push a lot of logic into the
data access layer.

In addition, if a client and server are part of the same Bounded Context, from a
DDD perspective the client should arguably be loading all of the fields of a
given entity. This means that despite GraphQL's intentions, the client and
server are still tightly coupled as the client will likely need to request all
fields of an entity almost all of the time. Admittedly, this isn't a problem for
servers that support multiple clients (which is where GraphQL particularly
shines) as they are likely in their own Bounded Contexts.

# Final thoughts

So should you use both GraphQL and DDD together? In most cases, I'd say they
work well together. You just need to be aware that this will cause some friction
and at times you'll have to choose one over the other.

When these conflicts arise, explicitly decide which best fits your goals. If you
don't, you'll likely pick GraphQL by default. As it's a specific technology
rather than a methodology, it's easier to measure and enforce. This means it's
easier to determine when you've successfully rolled out GraphQL, but it's also
easier to fall into the trap of seeing a GraphQL rollout as a success in itself,
rather than whether it is actually providing the value your organisation needs.

# Resources

- https://en.wikipedia.org/wiki/Domain-driven_design
- https://techbeacon.com/app-dev-testing/why-you-need-domain-driven-design-even-though-you-think-you-dont
