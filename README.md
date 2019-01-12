
<div align="center">
  <!-- PR's Welcome -->
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"
      alt="PR's Welcome" />
  </a>

  <!-- Dependencies -->
  <a href="https://david-dm.org/ctaylo21/JumpStart?type=dev" title="devDependencies status">
    <img src="https://david-dm.org/ctaylo21/JumpStart/dev-status.svg"/>
  </a>

</div>

<h1 align="center">JumpStart</h1>

<div align="center">
  <strong>Write Code, Not Config</strong>
</div>
<div align="center">
  Cutting-edge JavaScript project boilerplate built on Webpack 4 and Babel 7
</div>

## Table of Contents
- [Features](#features)
- [Supported Languages and Libraries](#supported-languages-and-libraries)
- [Philosophy](#philosophy)
- [Usage](#usage)
- [Installation](#installation)
- [Support](#support)

## Features
- __powerful__: [Webpack 4](https://webpack.js.org/) provides code-splitting, lazy loading, tree shaking, production/development modes, cross-language bundle support, caching, customizable loaders, and much more
- __testable__: built for TDD with hot-reloading, code coverage, and testing with [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/), [Sinon](http://sinonjs.org), and [Istanbul](https://github.com/gotwarlost/istanbul)
- __isomorphic__: supports testing in both node and browsers with [jsdom](https://github.com/tmpvar/jsdom) for DOM emulation in tests
- __compatible__: write cutting-edge javascript and [Babel](https://babeljs.io/) will compile it to a version that older browsers support
- __consistent__: uses [eslint](https://eslint.org/) to enforce code standards across your project

## Supported Languages and Libraries

- __SASS/CSS__: Supports SASS/CSS being loaded by webpack as JS modules. See the [sass-loader usage section](https://github.com/webpack-contrib/sass-loader#usage) for details on the benefits of doing so.
- __ES6/ES5__: Both modern and legacy javascript will be supported across relevant browsers via [Babel](https://babeljs.io/).
- __HTML__: HTML files are created quickly via the [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) with support for multiple template libraries, minification, and more.

## Philosophy

JumpStart is built on the concept of [TDD](https://en.wikipedia.org/wiki/Test-driven_development).
Writing tests should be easy, and you should be able to run them in any environment.
Write a test, see it fail, write the code to make it pass, then rinse and repeat.

Are you at terminal warrior? JumpStart has you covered. Even if you are testing DOM functionality, you'll never have to leave the command line.

Do you want to verify your tests work in the browser? That's also supported out of the box.

The provided `npm` commands will watch your source and automatically reload your tests so feedback is __automatic__ and __fast__, just like it should be.

## Usage

- `npm run tdd`

    - runs mocha tests in the terminal using [mocha-webpack](https://www.npmjs.com/package/mocha-webpack)
    - Includes improved `watch` mode so only the tests that are affected by file changes will get run

    <p align="center">
      <img src="https://media.giphy.com/media/3ohs82WbHWookAhx16/giphy.gif">
    </p>

- `npm run tdd:web`

    - builds and opens webpage via [webpack-serve](https://github.com/webpack-contrib/webpack-serve) that runs mocha tests in browser
    - rebuilds and re-runs tests if any relevant files change
    - Runs webpack with `eval` style source mapping to allow debugging of actual generated code.

    <p align="center">
      <img width="400px" src="https://i.imgur.com/vyWp0t5.png">
    </p>

- `npm test`

    - runs mocha tests and calculates code coverage and outputs the results
    - Doesn't watch files or hot-reload

    <p align="center">
      <img width="400px" src="https://i.imgur.com/o1fPDAi.png">
    </p>

- `npm run build`

    - builds your app bundle for production using webpack's `production` mode. Read more [here](https://medium.com/webpack/webpack-4-mode-and-optimization-5423a6bc597a)
    - includes minification (both CSS and JS), uglification, tree-shaking, module concatentation, chunk splitting, and more

- `npm start`

    - builds your app in development mode and automatically serves it using [webpack-serve](https://github.com/webpack-contrib/webpack-serve)	 and the template in `src/templates/index.html`
    - hot-reloading is enabled to automatically rebuild and reload if any source file changes

- `npm run stats`

	- builds your app with production settings and outputs a graph that visualizes your bundle sizes in an interactive, zoomable tree map via the [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)

	<p align="center">
      <img width="400px" src="https://cloud.githubusercontent.com/assets/302213/20628702/93f72404-b338-11e6-92d4-9a365550a701.gif">
    </p>

	
## Installation

1. Clone the repository into your "new-project" directory

    ```bash
    git clone https://github.com/ctaylo21/JumpStart.git new-project && cd new-project
    ```

2. Remove the git repository, and then initialize a new one

    ```bash
    rm -rf .git && git init
    ```

3. Remove README and replace with your own

    ```bash
    rm README.md && touch README.md
    ```

4. Update `package.json` and install dependencies

    ```bash
    npm init && npm install
    ```

    Don't forget to update the description any URL's in the `package.json` file.

5. Start coding!

## Support

If you find any problems or bugs, please open a new [issue](https://github.com/ctaylo21/JumpStart/issues).
