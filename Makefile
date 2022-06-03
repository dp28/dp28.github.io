.PHONY: install clean start build

install: node_modules

clean:
	rm -rf node_modules dist

start: node_modules
	npm run dev

build: node_modules
	npm run build

node_modules: package.json
	npm ci
	touch node_modules
