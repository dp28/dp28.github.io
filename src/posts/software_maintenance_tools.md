---
layout: post
title: "Software maintenance tools and when to use them"
# excerpt: Test
# date: 2022-10-10
draft: false
show_table_of_contents: false
tags:
  - post
  - software-development
---

## Linters

A linter enforces a specific code style by statically analyzing code. Ideally,
it makes code easier to read and removes the need for most discussion on code
style. When used well, linters can also help teach developers new language
features, catch issues before they occur in production, and hint at more
maintainable code design.

### Do use if:

- Everyone on your team agrees to let the linter decide what style is best
- You can guarantee that new code will always be linted _before_ it is merged

### Don't use if:

- Your team can't agree on code style, or individuals maintain components in
  their own style
- You can't run the linter locally
- The linter you're thinking of using cannot autocorrect most issues
- You have a large, old codebase and your linter doesn't support ignoring old
  code or adding `todo`s automatically

### Tips

- Find a style guide and stick with it. Don't spend much time picking or
  ignoring specific linting rules, despite how tempting that is. That loses most
  of the benefits a linter gives you - you want to _stop_ thinking about code
  style.
- Run the linter locally automatically. Often you can integrate it with your
  editor to show errors as you type or fix them automatically on save. If you
  can't do that, set up a git precommit hook to run the linter on changed files.
- You can write your own linting rules, but it's probably only worth doing when
  multiple teams are working on the same codebase.

## Unit testing

Unit tests isolate the component under test, mocking out all dependencies. This
includes databases, API requests, and if you're being strict, class
dependencies. Unit tests are generally _very_ quick to run, but can require a
lot of maintenance if it turns out the interfaces you're mocking need to change
often.

### Do use if:

- You want fast-running tests
- You're confident your team can design loosely-coupled components (or you want
  to strongly encourage loose coupling)
- You're able to easily prohibit external dependencies (eg run tests without
  access to the database)

### Don't use if:

- You have to fight your framework to set up your unit tests
- You trust other tools to enforce interfaces (some strongly-typed languages
  remove the need for several types of unit tests)

### Tips

- True unit tests should focus almost entirely on logic and require very little
  setup or environment loading. Because of this, unless your app is multiple
  years old, it should be possible to run your entire suite locally in less
  than a minute.
- Definitions of unit tests vary. For example, it's common in Ruby on Rails to
  call model tests unit tests, despite the fact that they load the entire Rails
  environment and connect to the database. These often end up much closer to
  what I'd call integration tests. They still have some mocking, but typically
  a lot less than true unit tests as they have the entire environment available.

## Integration testing

Integration tests exercise the full stack within an application. For example, in
a web server they would typically perform an HTTP request and verify that the
appropriate response is returned and that the correct changes were persisted to
the service's database. They only mock out external communication, eg any
requests the server makes to other services.

Some definitions of integration tests also include tests of components within
the system, for example testing that calling a service class performs a change
to the database, rather than just testing HTTP interfaces. These tests are
sometimes also referred to as unit tests, although this doesn't match my
definition above.

### Do use if:

- You want to be able to demonstrate that a specific application works as
  expected. Most applications should have at least some integration tests.
- You think there's a good chance you'll depend on the code working in the future
  (ie the production system will provide real value and not just be a proof of
  concept). Integration tests provide a _lot_ of value when making changes to an
  existing system, so it's almost always worth building up a set of them.

### Don't use if:

- You're deliberately writing throwaway code, for example a proof of concept or
  a spike
- You can't frequently run the entire integration test suite. If you're not
  running it and fixing the failures, it's not worth keeping.

### Tips

- Integration test suites become slow over time. As your application's suite
  grows you will repeatedly need to invest in reducing the time it takes (often
  by investing more in Continuous Integration resources).
- If tests become "flakey" (ie they seem to semi-randomly fail or pass), turn
  them off (by skipping them or deleting them) and investigate them. Common
  causes for these include dependencies between tests, test setup changing the
  current time, and floating point rounding errors.
- Explicitly decide on the level of detail for tests. For example, if you have a
  Rails server with tests for controllers, services, and models, decide where
  edge cases are going to be tested. One strategy is that services are tested
  for edge cases, while controller tests focus on the "happy path" (as they
  delegate to services).

## End-to-end testing

## Unit testing

Automated testing serves several purposes:

- It's evidence that the code you wrote does what you think it does
- It's a safety net that can catch regressions before you release to production
- It can help you design code, exercising the interfaces you build

### Do use if:

- You think there's a good chance you'll depend on the code working in the future
  (ie the production system will provide real value and not just be a proof of
  concept). Automated tests provide a _lot_ of value when making changes to an
  existing system, so it's almost always worth building up a set of them.

### Don't use if:

- You're deliberately writing throwaway code, for example a proof of concept or
  a spike

### Tips

- Decide ahead of time

## Code coverage

## Continuous Integration

## Continuous Deployment

## `git merge` vs `git rebase`
