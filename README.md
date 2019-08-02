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

  <!-- Coveralls -->
  <a href='https://coveralls.io/github/ctaylo21/TypescriptReactBoilerplate?branch=master'>
    <img src='https://coveralls.io/repos/github/ctaylo21/TypescriptReactBoilerplate/badge.svg?branch=master' alt='coverage status' />
  </a>

  <!-- Prettier -->
  <a href="https://github.com/prettier/prettie" title="Prettier">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"/>
  </a>

</div>

<h1 align="center">Typescript & React NPM Module Boilerplate</h1>

<div align="center">
  <strong>Write Code, Not Config</strong>
</div>
<div align="center">
  Cutting-edge boilerplate for building Typescript NPM modules. Built on best modern practices.
</div>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Usage](#usage)
- [Installation](#installation)
- [Support](#support)

## Features

- **compliant**: Uses [rollup.js](https://rollupjs.org/guide/en/) to build your NPM module in multiple formats (ESM and CJS) to support all major use cases for NPM.
- **testable**: built for TDD with hot-reloading, code coverage, snapshots, and more with [Jest](https://jestjs.io/).
- **isomorphic**: supports testing in both node and browsers with [jsdom](https://github.com/tmpvar/jsdom) for DOM emulation in tests
- **compatible**: write cutting-edge [Typescript](https://www.typescriptlang.org/) and it will compile it to a version that older browsers support. Supports loading of `.svg` files as React components using rollup.
- **consistent**: uses [eslint](https://eslint.org/) and [prettier](https://github.com/prettier/prettier) to automatically enforce code standards via git hooks using [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged), and [commitzen](https://github.com/commitizen/cz-cli) to enforce `git commit` standards
- **continuous**: uses [Travis CI](https://travis-ci.org/) and [Coveralls](https://coveralls.io/) to create an CI pipeline that builds your code on merges to master, runs tests, and reports on code coverage.

## Usage

- `npm test` or `npm test -- --watch` or `npm test -- --watchAll`

  - Runs jest tests in the terminal
  - Optional `watch` flag only reruns tests that are affected by file changes
  - Optional `watchAll` flag will rerun all tests when something changes

- `npm run build`

  - Builds your module for publishing via npm
  - Creates two variants:
    - ESM (`index.es.js`) - Set as the value for `module` in the `package.json` file. Allows bundlers that support ES modules (like webpack and rollup) to use this module and get benefits like tree shaking.
    - CommonJS (`index.js`) - Set as the value for `main` in the `package.json` file. This is the standard format for NPM modules.
  - Creates an `index.css` that can be imported by adopters using an import like `import 'your-npm-module/dist/index.css';`
  - Updates a `demo.js` bundle in `/docs` so that you can see a demo of your NPM package served at `docs/index.html`

- `npm start`

  - Uses the `src/demo.tsx` file to build a "demo" implementation of your module. You can customize `src/demo.tsx` as needed.
  - Serves your demo app at http://localhost:10001/
  - Runs rollup in watch mode, so any changes to your source code will trigger a rebuild of your bundle
    - **Note**: Bundle changes still require a reload of the browser page

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

   Don't forget to update the description and any URL's in the `package.json` file.

5. Start coding!

**Once you have created and pushed your new repo to GitHub:**

6. Sign in to (or create) your [Travis CI](https://travis-ci.com/) account and follow the [instructions](https://docs.travis-ci.com/user/tutorial/) to enable Travis CI on your repo. This repo already includes a [`.travis.yml`](.travis.yml), so you only need to active your repo.

   1. (Optional): Add your Travis-CI badge to the README

7. Add your repo to your [coveralls](https://coveralls.io) account. Then, grab the token from coveralls and put it in a new file called `.coveralls.yml` file at the project root. It should contain:

   ```
   repo_token: <your_repo_token>
   ```

   1. (Optional): Add your Coveralls badge to the README

8. By running `npm run build`, a demo of your app will be created in the `/docs` folder based upon the `src/demo.tsx` file. Then, you can go to your GitHub repo > settings > GitHub Pages and update the `Source` to point to `master branch / docs folder`. Then, you have a functioning demo of your page at `https://<your-github>.github.io/<your-repo-name>/`

9. (Optional): Add a badge that shows the status of your NPM dev dependencies from david-dm.org.

## Support

If you find any problems or bugs, please open a new [issue](https://github.com/ctaylo21/TypescriptReactBoilerplate/issues).
