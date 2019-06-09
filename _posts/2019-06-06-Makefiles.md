---
layout: post
title: Makefiles
published: true
---

# Example Makefiles

## Javascript and serverless

~~~make
PHONY: test install deploy

install: node_modules

test: install
    npm test
    
deploy: install
ifndef STAGE
	$(error "STAGE must be defined as an environment variable")
endif
	npx serverless deploy --stage $(STAGE)

node_modules: package.json
    npm install
    touch node_modules
~~~ 

## Python 3 and serverless

~~~make
PHONY: test install deploy

install: node_modules virtualenv

test: virtualenv
    pytest
    
deploy: install
ifndef STAGE
	$(error "STAGE must be defined as an environment variable")
endif
	npx serverless deploy --stage $(STAGE)
    
virtualenv: virtualenv/bin/pip requirements.txt
	virtualenv/bin/pip install -r requirements.txt
    touch virtualenv
	
virtualenv/bin/pip:
	python3 -m venv virtualenv

node_modules: package.json
    npm install
    touch node_modules
~~~


