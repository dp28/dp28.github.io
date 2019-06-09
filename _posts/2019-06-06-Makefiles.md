---
layout: post
title: Makefiles
published: true
---

Testing this blogging mechanism

Can it display code? Maybe Make works??

~~~ make
install: test

test: node_modules
    npm test

node_modules:
    npm install
    touch node_modules
~~~ 

spacer

~~~ javascript
function test() {
  const isES6 = () => true;
}
~~~ 

Why is this code block not working properly?


~~~ bash
make test
~~~
