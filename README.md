<h1 align="center">JumpStart</h1>

<div align="center">
  <strong>Write Code, Not Config</strong>
</div>
<div align="center">
  An ES6 module starter kit with everything you need, and nothing you don't.
</div>

<br />

## Table of Contents
- [Features](#features)
- [Philosophy](#philosophy)
- [Usage](#usage)
- [Installation](#installation)
- [Support](#support)

## Features
- __testable:__ built for TDD with hot-reloading, code coverage, and testing with [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/), [Sinon](http://sinonjs.org), and [Istanbul](https://github.com/gotwarlost/istanbul)
- __isomorphic__: supports testing in node and browser with [jsdom](https://github.com/tmpvar/jsdom) for DOM emulation in tests
- __compatible__: write cutting-edge javascript and [Babel](https://babeljs.io/) will compile it for browsers
- __consistent__: uses [Jshint](http://jshint.com/) to detect syntax or style errors in your code
- __extendable__: built on the [webpack](https://webpack.js.org/) and ready to be tailored to your needs

## Philosophy

### Testing
JumpStart is built on the concept of [TDD](https://en.wikipedia.org/wiki/Test-driven_development). Writing tests should be easy, and you should be able to run them any any environment. Write a test, see it fail, write the code to make it pass, then rinse and repeat.

Are you at terminal warrior? Jumpstart has you covered. Even if you testing DOM functionality, you'll never have to leave the command line.

Do you want to verify your tests work in the browser? That's supported out of the box.  

The supported `npm` commands will watch your source and automatically reload your tests so feedback is __automatic__ and __fast__.

## Usage

```bash
npm run tdd
``` 

- run mocha tests in `watch` mode so your tests get re-run when the source or tests change.
- using [mocha-webpack](https://www.npmjs.com/package/mocha-webpack), only the tests that are affected by file changes will get run

<p align="center">
  <img src="https://media.giphy.com/media/3ohs82WbHWookAhx16/giphy.gif">
</p>

```bash
npm run tdd:web
```

- builds mocha tests into a bundle that can then be run from the browser
- just open up `test/test.html` in your browser to see the results
- if any file changes occur, this will hot-reload and re-build the bundle. Refresh the `test.html` page to see the updated results.

<p align="center">
  <img width="400px" src="https://i.imgur.com/vyWp0t5.png">
</p>

```bash
npm test
```

- runs mocha tests and code coverage and outputs the results. Doesn't watch files or hot-reload.

```bash
npm build
```

- builds your app for production with both ugilification and minification

```bash
npm start
```

- builds your app in development mode and automatically serves it using the `webpack-dev-server` and the template in `src/templates/index.html`

## Installation

1. Clone the repository into your "new-module" directory

  ```bash
  $ https://github.com/ctaylo21/es6-module-boilerplate.git new-module && cd new-module
  ```

2. Remove the git repository, and the initialize a new one

  ```bash
  $ rm -rf .git && git init
  ```

3. Remove README and replace with your own

  ```bash
  $ rm README.md && touch README.md
  ```

4. Update `package.json` and install dependencies

  ```bash
  $ npm init && npm install
  ```

5. Start coding!
