# es6-module-boilerplate
A boilerplate for writing  modules in ES6.

## Usage

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

## Example Usage

Run tests and code coverage

```bash
npm test
```

Run tests in TDD style (with watch/rerun on changes)

```bash
npm run tdd
```

Run app

```bash
npm start
```
