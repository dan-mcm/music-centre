# Music Centre

[![style: styled-components](https://img.shields.io/badge/component_style-%F0%9F%92%85%20styled_components-orange.svg?ff69b4)](https://www.styled-components.com/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![XO code linter](https://img.shields.io/badge/code_linter-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![CircleCI](https://circleci.com/gh/daniel40392/music-centre/tree/master.svg?style=svg)](https://circleci.com/gh/daniel40392/music-centre/tree/master)

A website that aims to provide a well-rounded reason for the study of music.

Access:

* AWS Hosting: http://music-centre.info/
* Github Pages: https://daniel40392.github.io/music-centre/

## Overview

Setup with:
* [React](https://reactjs.org/)
* [React Router](https://github.com/ReactTraining/react-router)

Component libraries include:
* [Styled Components](https://www.styled-components.com/)
* [Grid Styled](http://jxnblk.com/grid-styled/).

For Code Styling & Linting:
* [Prettier](https://github.com/prettier/prettier) is used for code styling throughout the project.
* [XO](https://github.com/xojs/xo) is used to enforce linting styles alongside Prettier.


DevOps:
* A [pre-commit](https://www.npmjs.com/package/pre-commit) hook is setup to automatically run the code styler, linter and tests before enabling a successful push to the repo.
* In addition to the pre-commit hook basic [CircleCI](https://circleci.com/) test integration has been setup (see CircleCI badge above for current test status Passing/Failed). This will block merges to the master branch in the event tests fails on a PR.
* A [Dockerfile](./Dockerfile) & [Makefile](./Makefile) are available for portable deployment.

## Running Locally

```bash
npm install
npm start # will start service on port 3000 by default
```

### Using Docker

```bash
# build docker image
docker build . # or you can run the command

# run docker container and portforward port 3000
docker run -ti -p 3000:3000 <docker-image-id>

# publish docker image to docker hub
docker push <docker-repo>
```

### Using Makefile

```bash
# this will default to 'build' command
make

# this will push the image to docker hub
make push

# this will both build and publish for expediency
make deploy
```

## Tests

Handled by [ReactScripts](https://create-react-app.dev/docs/running-tests/) a pre-configured version of [Jest](https://jestjs.io/docs/en/getting-started) to save hassle with [Babel](https://babeljs.io/) configuration.

## Deployment & Hosting

The main website is deployed on [AWS Static Web Hosting](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html) @ http://music-centre.info/
This can be updated via the `npm run aws-deploy` script. (note: this requires [aws-cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) configuration)

A version of the site is also hosted on [GitHub pages](https://pages.github.com/) @ https://daniel40392.github.io/music-centre/.
Due to domain structures the Github pages codebase is maintained on the [deploy-branch](https://github.com/daniel40392/music-centre/tree/deploy-branch) with source code hosted on the [gh-pages](https://github.com/daniel40392/music-centre/tree/gh-pages) branch.
