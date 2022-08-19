---
layout: post
title: What do software developers actually do?
excerpt: Hopefully a bit more than write code
date: 2022-08-19
show_table_of_contents: false
tags:
  - post
  - software-development
---

I've been a professional software developer for about eight years now and I
occasionally get asked this question. I typically give a short reply about
writing code, but that's not a great answer for a few reasons. That's partly
because it doesn't really answer the question, but it's also not really true:
coding is only one part of the job. Below I'll try and give a more accurate
answer.

### My background

I've been employed as a software developer (or software engineer - I use the
terms interchangeably) at four different companies. In all cases I've been a web
developer, ie working on applications that are exposed on the internet and
typically accessed by end users using a web browser. There are lots of other
types of developers (eg mobile developers or embedded systems developers), and
while a lot of my experience as a web developer will be familiar to them, not
everything will apply to them.

### Who we work with

Despite the stereotypes, software development is highly collaborative. Therefore
a key part of understanding what software developers do is knowing who they work
with. This typically includes:

- The other developers on my team. Most teams I've been on have had 3-6
  developers.
- A Product Manager (PM), who's responsible for deciding what the team does
  based on the needs of the rest of the business.
- A Team Lead or Engineering Manager, who manages the team. Sometimes this
  person is also playing the role of PM (although this is rarely
  ideal).
- _Maybe_ a designer, who designs what user interfaces should look like and how
  users will interact with the interface.

### The Software Development Lifecycle

Most of my work is covered by the Software Development Lifecycle. I found this
to be a desperately dull topic during my Computer Science degree, but having
lived this day in, day out for quite a while I think it really is a good
overview of the job.

There are lots of different versions of this lifecycle available, but here's how
I think of it:

![The software development lifecycle](/post-images/software-development-lifecycle.svg)

#### Identify a problem

Typically, the PM records information about a particular problem in
a ticket. Developers discuss this problem with the PM to agree on a
clear set of requirements for the solution. If the developers decide that a
particular problem is too large to be tackled, they work with the PM to break it
into smaller problems (in most teams I've been part of we'd split something up
if we thought it would take one person more than one week to finish).

There are three main types of problem:

- A feature request - a request for new behaviour for the system
- A bug - something's broken, potentially in an unknown way, and we need to fix
  it
- A technical improvement (or "refactoring") - a change to code that won't
  change the behaviour of the system, but will make it easier to make further
  changes

#### Prioritize the problem

PMs are in charge of prioritizing the work for the team, but developers have
significant input. Developers estimate how long each bit of work will take, and
advocate for the importance of specific issues.

#### Design a solution

Once a problem has clear requirements and is prioritized, it's ready to be
picked up by a developer. Different teams handle this process slightly
differently, but it usually starts with some design. This can be a collaborative
process (a conversation between a team or multiple people drawing a diagram), or
it can be a purely mental exercise by the person who's going to implement the
solution.

#### Implement a solution

The developer writes code to solve the problem. This will probably use the
design from the step before, but may not. Most software applications have a
large number of components and tens of thousands of lines of code, so there is
generally no one who completely understands the full system (or even large parts
of it). It's not uncommon to discover during coding that the original design
needs to be changed to fit into the existing system.

Developers typically code alone, but this can also be collaborative,
particularly when one person is working in an area they have rarely seen before.

_Aside:_ This specific step in the process is what I'd consider "programming":
I have a well-understood problem and I'm writing code to solve that problem. In
my opinion, the difference between a programmer and a software developer is that
a programmer only writes code to solve a specific problem, while a software
developer follows the Software Development Lifecycle to continuously improve a
system that solves a problem.

#### Test the solution

Developers generally test their code in three ways:

- Manual testing: testing the system as if you were a user
- Automated testing: writing code that checks that the new code behaves as
  expected
- Automated regression testing: running all the other automated tests that have
  been written to test all past changes to make sure the new change didn't break
  anything else

#### Review the implementation

Other developers read the new code and possibly test it themselves. They
critique the solution and suggest improvements. Often these comments are focused
on improving the readability of the code to make it as easy as possible for
future developers to understand what the code is doing and how to change it.
Code reviews can be a multi-step process as reviewers leave comments, developers
make the suggested changes, then reviewers have another look.

In some industries and companies, code reviews can be required by law. It's
common for larger companies to require that at least two people (an implementer
and at least one reviewer) to see any piece of code before it is deployed.

#### Deploy the solution

For the most part, developers write and test code on their local computer.
However, the web applications actual users have access to are generally running
on servers somewhere else, referred to as "the production environment".
Deployment is the process of getting the new code running on those production
servers.

This process differs from company to company. Sometimes it's an arduous manual
process, sometimes it's completely automated after enough people approve a code
review. There's almost always some level of automation to make it possible to
deploy new code to an application without stopping it, which is complicated to
do manually.

#### Monitor the system

Most companies have some level of monitoring set up on their production systems.
This can be as simple as reporting the number of errors there have been or
how much disk space is left on the servers, or as complex as full-blown
recording of every action a user makes on the site, replayable as a video.

Developers use this information in three main ways:

- For automated alerting. If a monitoring system detects a particularly high
  error rate, it will page an on-call developer. This lets us know about issues
  before users complain.
- To understand the behaviour of the system. Web applications are complex,
  particularly old systems with lots of users. Developers look through reports
  and logs to determine the cause of bugs and to confirm that code they recently
  deployed is behaving as expected.
- To see how users actually interact with the system. Along with PMs, developers
  see how users interact with recent changes to the system to determine if they
  are useful, need more work, or should be removed.

All three of these can lead to identifying new problems to solve, which leads
back to the first step.

### Everything, together, all at once

As I have done here, the Software Development Lifecycle is usually presented
from the perspective of a single change to the system: a one-way multi-step
process from problem identification to deployment and monitoring. However, in
real life, a software developer isn't only working on a single problem, getting
it all the way through that flow, then starting again. Instead, we're working on
multiple different problems at once.

A typical day in my life as a software developer might look something like
this:

1. At the morning standup (a status meeting), I see that two other people have
   code needing review, so I review that code and leave some comments.
2. I test that the code that I wrote yesterday works.
3. I notify my team that that code is ready for review, writing up a description
   of what it does, why we're doing it, and why I designed it the way I did.
4. By this point, one developer has updated their code to address my comments,
   so I re-review it and approve the change.
5. We have weekly meeting as a team with our PM where we break down and estimate
   multiple different problems so that the PM can prioritize them.
6. My team has approved my code, so I deploy it to production.

### Other activities

The Software Development Lifecycle doesn't cover _everything_ software
developers do, but it's close. Most of the other things we do are heavily
related to it, often with the aim of making the process more effective. We spend
time learning new technology that might allow us to design, implement, and test
faster. We teach other developers technical skills to make our team faster. We
learn from people in other areas of the business so that we better understand
their problems and can design better solutions.
