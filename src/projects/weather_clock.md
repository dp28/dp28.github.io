---
layout: project
title: Weather Clock
summary: |
  A prototype for a physical clock that would show the weather

status: finished
project_url: https://weather-clock.djpdev.com/
github_url: https://github.com/dp28/weather-clock
tags:
  - project
  - app
  - weather
  - javascript
  - react
---

I wanted to build an LED clock using a circle of 60 LEDs and use them to show
more than just the time. I thought it could be useful to show the weather, too.
Before building anything physical, I decided to prototype it fully in software
as that would be faster. Plus I'd need to write some software anyway.

The clock uses a weather API to get the forecast for Boston, Massachusetts. It
then displays:

- The current time (the purple light is the hour, the dark green is the minute,
  the light green is the second)
- The current temperature (moving backwards from the current hour, each red
  light is an increment of +2 Celsius, or each teal light is an increment of -2
  Celsius)
- The weather forecast for the next 12 hours (each 5 lights represents the
  forecast for an hour. The more grey, the more cloud. The more blue, the more
  rain. The more yellow, the more sun/clear night. The more white, the more snow.)

## Highlights

- It works (for Boston, at least)

- It demonstrated that the concept (in it's current form at least) was probably
  too confusing to be useful

## Downsides

- I never ended up using it
