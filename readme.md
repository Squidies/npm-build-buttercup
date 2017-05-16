## npm-build-buttercup
---

### Install*

`$ git clone https://github.com/Squidies/npm-build-buttercup.git`

`$ cd npm-build-buttercup`

`$ npm install`

<sub>\* (node.js required)</sub>

### List of commands

`$ npm run <command>`

#### `buttercup`

Builds all assets in the `src/` directory and outputs to `dist/`, loads a server for live reloading, and continuously watches for changes.

#### `buttercup:build`

builds all assets but does not run a reloading server or watch files.

#### `buttercup:prod`

adds minification to `buttercup:build` task


#### Notes

`pug-cli` on npm currently not up to date with version on github [(Issue #59)](https://github.com/pugjs/pug-cli/issues/59) which adds ability to ignore files/folders with a prepending underscore "`_`" character. To get to current version, from the command-line you can run `npm i pugjs/pug-cli` to download directly from the projects github repository and override current npm installed version or you can manually download `pug-cli` from github, extract it and place in `node_modules` folder to override current npm version.
