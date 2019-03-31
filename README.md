<div align="center">
  <!-- PR's Welcome -->
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"
      alt="PR's Welcome" />
  </a>

  <!-- Commitizen -->
  <a href="http://commitizen.github.io/cz-cli/v" title="Commitizen">
    <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg"/>
  </a>

  <!-- Dependencies -->
  <a href="https://david-dm.org/ctaylo21/TypescriptReactBoilerplate?type=dev" title="devDependencies status">
    <img src="https://david-dm.org/ctaylo21/TypescriptReactBoilerplate/dev-status.svg"/>
  </a>

</div>

<h1 align="center">Typescript React Project Boilerplate</h1>

<div align="center">
  <strong>Write Code, Not Config</strong>
</div>
<div align="center">
  Cutting-edge React project boilerplate built on Webpack 4 and Typescript
</div>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Philosophy](#philosophy)
  - [TDD](#tdd)
  - [Best Practices](#best-practices)
- [Usage](#usage)
- [Installation](#installation)
- [Support](#support)

## Features

- **powerful**: [Webpack 4](https://webpack.js.org/) provides code-splitting, lazy loading, tree shaking, production/development modes, cross-language bundle support, caching, customizable loaders, and much more
- **testable**: built for TDD with hot-reloading, code coverage, snapshots, and more with [Jest](https://jestjs.io/).
- **isomorphic**: supports testing in both node and browsers with [jsdom](https://github.com/tmpvar/jsdom) for DOM emulation in tests
- **compatible**: write cutting-edge [Typescript](https://www.typescriptlang.org/) and it will compile it to a version that older browsers support
- **consistent**: uses [eslint](https://eslint.org/) and [prettier](https://github.com/prettier/prettier) to enforce code standards, and [commitzen](https://github.com/commitizen/cz-cli) to enforce `git commit` standards

## Philosophy

### TDD

This project boilerplate is built on the concept of [TDD](https://en.wikipedia.org/wiki/Test-driven_development).
Writing tests should be easy, and you should be able to run them in any environment.
Write a test, see it fail, write the code to make it pass, then rinse and repeat.

Are you at terminal warrior? This project boilerplate has you covered. Even if you are testing DOM functionality, you'll never have to leave the command line.

The `npm test -- --watch` command will watch your source and automatically reload your tests so feedback is **automatic** and **fast**, just like it should be.

### Best Practices

All the best practices for a project should be available from the beginning of your project. This boilerplate is constantly updated to include some of the best tools and libraries to ensure your Typescript project is professional-grade.

Some examples of these feature include:

- Automated linting & code fixing of committed files using git hooks via [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged). This ensures all commited code matches standards set by [eslint](https://eslint.org/) and [prettier](https://github.com/prettier/prettier).
- Hot reloading of source code for both tests and application code via [webpack](https://webpack.js.org/) and [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
- Standardized commit messages via [commitizen](https://github.com/commitizen/cz-cli)

## Usage

- `npm test` or `npm test -- --watch` or `npm test -- --watchAll`

  - runs jest tests in the terminal
  - Optional `watch` flag only reruns tests that are affected by file changes
  - Optional `watchAll` flag will rerun all tests when something changes

- `npm run build`

  - builds your app bundle for production using webpack's `production` mode. Read more [here](https://medium.com/webpack/webpack-4-mode-and-optimization-5423a6bc597a)
  - includes minification (both CSS and JS), uglification, tree-shaking, module concatentation, chunk splitting, and more

- `npm start`

  - builds your app in development mode and automatically serves it using [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) and the template in `src/templates/index.html`
  - hot-reloading is enabled to automatically rebuild and reload if any source file changes

- `npm run cm`

  - Uses [commitizen](https://github.com/commitizen/cz-cli) to prompt for required commit fields to ensure a standardized commit message

- `npm run lint`

  - Lints your entire project using [eslint](https://eslint.org/) and reports any errors

## Installation

1. Clone the repository into your "new-project" directory

   ```bash
   git clone https://github.com/ctaylo21/TypescriptReactBoilerplate.git new-project && cd new-project
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

If you find any problems or bugs, please open a new [issue](https://github.com/ctaylo21/TypescriptReactBoilerplate/issues).
