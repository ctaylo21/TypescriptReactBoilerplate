# es6-module-boilerplate
A boilerplate for writing  modules in ES6.

## Usage

1. Clone the repository into your "new-module" directory

  ```bash
  $ https://github.com/ctaylo21/es6-module-boilerplate.git new-module
  ```

2. Rename, and then change into the directory

  ```bash
  $ mv es6-module-boilerplate new-module && cd new-module
  ```

3. Remove the git repository, and the initialize a new one

  ```bash
  $ rm -rf .git && git init
  ```

4. Remove README and replace with your own

  ```bash
  $ rm README.md && touch README.md
  ```

5. Update `package.json` and install dependencies

  ```bash
  $ npm init && npm install
  ```

6. Start coding!

  ```bash
  $ $EDITOR .
  ```

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
