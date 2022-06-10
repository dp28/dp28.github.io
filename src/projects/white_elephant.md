---
layout: project
title: White Elephant
summary: |
  A gift exchange game where players can steal gifts from each other.
  Also known as Yankee Swap or Dirty Santa.
status: finished
project_url: https://white-elephant.djpdev.com/
github_url: https://github.com/dp28/white-elephant
logo:
  url: https://white-elephant.djpdev.com/logo192.png
  description: Wrapped gifts
tags:
  - project
  - javascript
  - react
---

It was pretty difficult to meet up with people in the run up to Christmas in
2020 <span class="comment">thanks, covid</span>. I wrote this app to make it a
little easier for groups of people to exchange gifts remotely. I've really
enjoyed playing white elephant in person, so this seemed like a good idea.

## Design

This is a React app hosted in S3 behind Cloudflare. I've used this approach for
a few sites at this point, so it was something I could get running quickly.

This uses peer-to-peer communication using WebRTC. I entertained the idea of
publicizing this app more broadly. If it gained traction, I didn't want to have
to deal with any server costs. This design allowed me to play with peer-to-peer
systems and offload all of the computation onto clients.

## Highlights

- This is probably the first of my side projects that people I didn't directly
  know beforehand used in production. Both my work and my wife's work used this
  for a holiday gift exchange.

- It's free to host, and should scale fairly well

- I've used this for other things, like deciding which player/civilization
  people should play as in games (eg Age of Empires). It can be more fun than
  randomizing game starts.

## Downsides

- Peer-to-peer meant that it was hard to persist data. The host of the game has
  to be online at all times.

- Peer-to-peer is also somewhat confusing in the code, as every client could be
  either a host or a participant.
