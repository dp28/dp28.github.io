---
layout: project
title: Score Card
summary: |
  A Progressive Web App and Alexa Skill for recording game scores
status: abandoned
project_url: https://card-scores.herokuapp.com/
github_url: https://github.com/dp28/score-card
logo:
  name: score-card.png
  description: A hand of cards
tags:
  - project
  - javascript
  - react
  - voice
  - ddd
---

This was a simple project to record and calculate the scores of card games and
board games. The React app is pretty simple, but the project gave me a chance
to explore a few technologies I hadn't used much:

- Websockets
- Amazon Alexa Skills

## Design

This was a React app and Node server hosted on Heroku. It also provided an API
that powered an Alexa Skill. It was backed by Mongo DB (because that was cheap
and easy).

I experimented with a Domain-Driven Design approach here, using event sourcing.
The domain code was shared between the client and server as they both

## Highlights

- I was able to produce a voice-controlled app that would also synchronize with
  multiple web UIs. Using human-readable (and memorable) ids made this process
  much simpler than it otherwise could have been.

- This made it through Amazon's approval process

- Deploying to Heroku directly rather than using `git` allowed me to have a
  monorepo without heroku dictating my app structure

## Downsides

- It no longer works. I haven't played as many board games and card games
  recently, so it didn't feel worth maintaining.

- Voice interfaces are awkward to test and not fully under your control. The
  experience when using them is often much clunkier than I'd hope.

- A spreadsheet almost completely solves this problem

- The Alexa development portal was awkward to use (and fairly new)
