# Gosrock-storybook

[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release&style=flat-square)](https://github.com/semantic-release/semantic-release) [![gosrock](https://img.shields.io/github/workflow/status/Gosrock/Gosrock-storybook/Rollup%20React%20Component%20NPM%20Package/main?style=flat-square)](https://github.com/Gosrock/Gosrock-storybook/actions/workflows/npm-publish.yml) [![gosrock](https://img.shields.io/npm/v/gosrock-storybook?color=green&style=flat-square)](https://www.npmjs.com/package/gosrock-storybook) [![gosrock](https://img.shields.io/npm/l/gosrock-storybook?style=flat-square)](https://github.com/Gosrock/Gosrock-storybook/blob/main/LICENSE)

## :bulb: Getting started

- add dependency

```sh
npm install gosrock-storybook
```

- how to use

```jsx
import { GoBackButton } from 'gosrock-storybook';
// need to add css file Don't forget
import 'gosrock-storybook/dist/gosrockStyle.css';

function App() {
  return (
    <>
        <GoBackButton primary={true} label={'asdf'}></GoBackButton>
    <>
  );
}
```

#

## :books: Document

we are make our components in story book. So if we add some components you can find document and example of useage in storybook.

check our stories and document via github page
:arrow_right::arrow_right::arrow_right:
[storybook url](https://gosrock.github.io/Gosrock-storybook/)

---

## :full_moon_with_face: how we work?

we are using [husky](https://github.com/typicode/husky) to add custom git hook
and prettier the code, [commitlint](https://github.com/conventional-changelog/commitlint) to validate commit msg
and using [commitizen](https://github.com/commitizen/cz-cli) to easy commint

see [.husky](https://github.com/Gosrock/Gosrock-storybook/tree/main/.husky) file pre-commit , prepare-commit-msg , commit-msg shell command

---

## :smoking: How to contribute

step 1.

- clone the repo (who member of @gosrcok)

```sh
npm install -g commitizen
// you sholud install commitizen to use git cz command
npm install
```

step 2.

- work around with [story book](https://storybook.js.org/)

```sh
npm run storybook
```

step 3.

- commit with [commitizen](https://github.com/commitizen/cz-cli)

```sh
 git add .
 git commit
```

if you type `git commit` than commitizen automatically come out and choose type of change.
![무제](https://user-images.githubusercontent.com/13329304/149973077-afe241d3-e9d7-4c9a-9864-0518dc64769c.jpg)

---

step 4.

- I need package my output.

:bangbang: we are using [semantic-release](https://github.com/semantic-release/semantic-release) to deploy npm package with github action.
`so you need to keep angular commit message convention`

if you want to upgrade the version than add commit message with in `["fix" , "feat" , "perf"]`

include `fix` -> upgrade version 0.0.1
include `feat` -> upgrade version 0.1.0
include `perf` -> upgrade version 1.0.0

see the below meaning of the commit msg.

see [how does it works](https://github.com/semantic-release/semantic-release/blob/master/README.md#how-does-it-work) in semantic-release document

| Commit message                                                                                                                                                                                   | Release type                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                                                             | ~~Patch~~ Fix Release                                                                                           |
| `feat(pencil): add 'graphiteWidth' option`                                                                                                                                                       | ~~Minor~~ Feature Release                                                                                       |
| `perf(pencil): remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | ~~Major~~ Breaking Release <br /> (Note that the `BREAKING CHANGE: ` token must be in the footer of the commit) |

if push or merge event occur in main branch ( see .github/workflows)
than semantic-release-action is see all commit msg to deploy automatically version upgrade.
