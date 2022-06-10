---
layout: project
title: Guard::Git
summary: |
  Stops Guard triggering plugins whenever you change branches.

status: finished
project_url: https://rubygems.org/gems/guard-git
github_url: https://github.com/dp28/guard-git
tags:
  - project
  - library
  - ruby
---

A small add-on for [Guard](https://github.com/guard/guard/) that prevents it
triggering plugins when the file changes that otherwise would have triggered
plugins were caused by `git`.

I use `guard` to run `rspec` and `rubocop` in a lot of my side projects and at
work. I typically only want them to fire when I make a change to a file, not
when I change `git` branches.

## Highlights

- My first published ruby gem

- It was a chance to give back to the community of some open source software
  that I've heavily benefited from

- It's been downloaded over 1,000 times

## Downsides

- I haven't used this much because at work I run `guard` inside a Docker
  container which does not have access to `git`
