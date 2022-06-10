---
layout: project
title: Sprint Graph
summary: |
  A Chrome extension for visualizing Jira sprints as a dependency graph
status: maintained
project_url: https://chrome.google.com/webstore/detail/sprint-graph/hecogafddplfnihdjidkifklonijigap
github_url: https://github.com/dp28/sprint-graph
logo:
  name: sprint-graph.svg
  description: Graph
tags:
  - project
  - app
  - javascript
  - software-development
  - chrome-extension
---

This is a Chrome extension that visualizes Jira stories as a graph. It reads the
ticket ids currently shown on the page and builds a graph visualizing their
relationships (both dependencies and parent-child relationships).

It solves a specific problem I have: working out the dependency chains in a
sprint. Jira is good at showing lists of tickets and their current states, but
it is _terrible_ at flagging blockers. The more complex the interactions between
tickets, the worse Jira is. This extension lets me quickly get an overview of a
sprint or an epic in a way that I can't otherwise do.

## Highlights

- I find it genuinely useful and use it at work about once a week

- Depending on how reliable Chrome Web Store's user stats are, a few other
  people use this, too

- It wasn't that hard to throw together

## Downsides

- It's pretty rough. It does the bare minimum to be useful. It'd be great if it
  could show more data or allow updating tickets, but that's just not worth my
  time at the moment given that I can do that using Jira's UI.

- It could break at any time if Jira changes things and I'll only find out the
  next time I use it. Maintenance could be painful.
