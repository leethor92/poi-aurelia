# `poi-client`

This project is bootstrapped by [aurelia-cli](https://github.com/aurelia/cli).

For more information, go to https://aurelia.io/docs/cli/webpack

## Run dev app

Run `au run`, then open `http://localhost:8080`

To open browser automatically, do `au run --open`.

To change dev server port, do `au run --port 8888`.

To enable Webpack Bundle Analyzer, do `au run --analyze`.

To enable hot module reload, do `au run --hmr`.

## Build for production

Run `au build --env prod`.

## Unit tests

Run `au test` (or `au jest`).

To run in watch mode, `au test --watch` or `au jest --watch`.

## Deployment

This application is deployed using Netifly:
https://hopeful-snyder-1e5ef0.netlify.com/

## Application
This application was built using Aurelia with Javascript & typescript. This application relies on preloaded information from a web-service API:
https://github.com/leethor92/poi-island-webservice
Please ensure API service is running on AWS to use this application.

The below user has been preloaded "homer": { "firstName": "Homer", "lastName": "Simpson", "email": "homer@simpson.com", "password": "secret" }
