# Music Centre

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://www.styled-components.com/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![XO code linter](https://img.shields.io/badge/code_linter-XO-5ed9c7.svg)](https://github.com/xojs/xo)


## Summary

This project is a website setup with [React](https://reactjs.org/) & [React Router](https://github.com/ReactTraining/react-router).
It takes advantage of multiple styling libraries including [Styled Components](https://www.styled-components.com/) & [Grid Styled](http://jxnblk.com/grid-styled/).

[Prettier](https://github.com/prettier/prettier) is used for code styling throughout the project.

Future integration is planned with:

* [XO](https://github.com/xojs/xo)
* [pre-commit](https://www.npmjs.com/package/pre-commit)
* [eslinting](https://eslint.org/).

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

To be added with [Jest](https://jestjs.io/)

## Deployment & Hosting

The main website is deployed on [AWS Static Web Hosting](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html) @ http://music-centre.info/
This can be updated via the `npm run aws-deploy` script. (note: this requires [aws-cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) configuration)

A version of the site is also hosted on [GitHub pages](https://pages.github.com/) @ https://daniel40392.github.io/music-centre/.
Due to domain structures the Github pages codebase is maintained on the [deploy-branch](https://github.com/daniel40392/music-centre/tree/deploy-branch) with source code hosted on the [gh-pages](https://github.com/daniel40392/music-centre/tree/gh-pages) branch.
