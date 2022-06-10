---
layout: project
title: Repertoire
summary: A web app to make cooking simpler
status: in progress
project_url: https://repertoire.djpdev.com/
logo:
  name: repertoire.png
  description: List
tags:
  - project
  - app
  - javascript
  - react
  - ruby
  - rails
  - graphql
  - ddd
  - recipes
---

This is the most recent incarnation of my recipe app. I think this is my fourth
iteration ([GitHub suggests there have been 5 beforehand](https://github.com/dp28?tab=repositories&q=recipe)
but I worked on three of them in tandem).

## Goals

### Realistic goals

In all likelihood, this app won't result in much. If I follow my previous
patterns, I'll get bored, move on, then start another recipe-related project at
a later date. Given that, I have a few goals for this project.

Firstly, I'd like to **explore Domain Driven Design in Rails**. While I have
done this to some extent before, I'd like to:

- Use event sourcing enough to get a good feel for its pros and cons
- Work out how useful the repository pattern can be in avoiding ActiveRecord's
  pitfalls
- Try to get back to some classic Object-Oriented Design habits. I tend to
  prefer functional programming, but I don;t want to forget the positives of
  OOD. I also feel like Rails typically promotes a fairly weak form of OOD where
  a lot of logic gets pushed into essentially procedural "service objects".
- See what happens when I fundamentally change a data model. Rather than
  thinking about recipes, I'm modelling them as a collection of steps. By
  changing my thinking, I hope to be able to unlock a lot of features that would
  otherwise be a lot harder to design.

### Less realistic goals

I cook quite a bit. I very often cook from my phone, looking up recipes online
and following them. Unfortunately, I hate recipe websites.

Recipe websites are optimized to make money. They have a load of irrelevant
content for SEO purposes. That's great for helping me find a recipe, but just
gets in the way when I want to start cooking. The adds are even worse, popping
up and covering the content I actually want to read. When I do actually get to
the content, it's formatted in a way that makes it easy to skim-read the recipe,
not in a way that's actually easy to follow on a phone (I have to scroll back up
to the ingredients section _all the time_).

Recipe websites also don't work well with the way I cook. I'm often cooking
multiple recipes, and may have leftovers I'm trying to incorporate. I'm not good
at time estimation <span class="comment">a pretty classic software engineer trait</span>,
so the rough estimates on recipe websites aren't very useful.

Finally, recipe websites don't take advantage of the machines displaying them.
Most sites are little better than a page in a book. If you're lucky they might
scale the ingredients or change the units, but not much more. I think there are
_loads_ of ways computers could simplify the cooking process if recipes were
just slightly more structured.
