# Gosrock-storybook

[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release&style=flat-square)](https://github.com/semantic-release/semantic-release) [![gosrock](https://img.shields.io/github/workflow/status/Gosrock/Gosrock-storybook/Rollup%20React%20Component%20NPM%20Package/main?style=flat-square)](https://github.com/Gosrock/Gosrock-storybook/actions/workflows/npm-publish.yml) [![gosrock](https://img.shields.io/npm/v/gosrock-storybook?color=green&style=flat-square)](https://www.npmjs.com/package/gosrock-storybook) [![gosrock](https://img.shields.io/npm/l/gosrock-storybook?style=flat-square)](https://github.com/Gosrock/Gosrock-storybook/blob/main/LICENSE)

## :bulb: Getting started

- add dependency

```sh
npm install gosrock-storybook
```

- how to use

```jsx
import { Header, Button } from 'gosrock-storybook';
// need to add css file Don't forget
import 'gosrock-storybook/dist/index.esm.css';

function App() {
  return (
    <>
        <Header></Header>
        <Button primary={true} label={'asdf'}></Button>
    <>
  );
}
```

#

## :books: Document

we are make our components in story book. So if we add some components you can find document and example of useage in storybook.

check our stories
:arrow_right::arrow_right::arrow_right:
[storybook url](https://gosrock.github.io/Gosrock-storybook/)

## :full_moon_with_face: How to Contribute

we are using [husky](https://github.com/typicode/husky) to add custom git hook and [commitlint](https://github.com/conventional-changelog/commitlint) to validate commit msg , prettier the code.

in package.json

```json
"lint-staged": {
    "**/*.{js,jsx,json,tsx}": [
      "prettier --write"
    ]
  }
```

and see .husky pre-commit , prepare-commit-msg , commit-msg shell command

and using [commitizen](https://github.com/commitizen/cz-cli) to easy commint

- clone the repo (who member of @gosrcok)

```sh
npm install -g commitizen
// you sholud install commitizen
npm install
```

- work around with story book
  see source in src/stories folder

- commit with [commitizen](https://github.com/commitizen/cz-cli)

```sh
 git add .
 git commit
```

if you type `git commit` than commitizen automatically come out and choose
![무제](https://user-images.githubusercontent.com/13329304/149973077-afe241d3-e9d7-4c9a-9864-0518dc64769c.jpg)

type of change.

:bangbang: we are using [semantic-release](https://github.com/semantic-release/semantic-release) to deploy npm package with github action.
`so you need to keep angular commit message convention`

see [how does it works](https://github.com/semantic-release/semantic-release/blob/master/README.md#how-does-it-work) in semantic-release document

| Commit message                                                                                                                                                                                   | Release type                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                                                             | ~~Patch~~ Fix Release                                                                                           |
| `feat(pencil): add 'graphiteWidth' option`                                                                                                                                                       | ~~Minor~~ Feature Release                                                                                       |
| `perf(pencil): remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | ~~Major~~ Breaking Release <br /> (Note that the `BREAKING CHANGE: ` token must be in the footer of the commit) |

so event occur if push or merge event ( see .github/workflows)

```yml
on:
  push:
    branches:
      - main
```

than semantic-release-action is see all commit msg to deploy automatically version upgrade.

fix -> 0.0.1
feat -> 0.1.0
perf -> 1.0.0
