# tiny-ui

## Overview

TINYpulse Front-end framework.

## Development with tiny-ui

The following docs describe how you can test and develop further this application.

### Installing dependencies

The application relies upon various Node.js tools, such as Karma. You can install these by running:

```
npm install
```

Most of the scripts described below will run this automatically but it doesn't do any harm to run
it whenever you like.

### Building

You can compile the Javascript code by using below command (or just `npm install`):

```
npm run build
```

To increase the version number (major, minor or patch) and minify resources use these commands:

```
npm run release-major
npm run release-minor
npm run release-patch
```

Checkout `dist` folder for the production ready version of the plugin, `public` folder for development.

For development, run `npm run watch` then it will listen all Javascript file changed and automatically run `build` task for you.

### Running unit tests

We are using [Jasmine][jasmine] and [Karma][karma] for our unit tests/specs.

- Start Karma with `npm test`
  - A browser will start and connect to the Karma server. Chrome is the default browser, others can
  be captured by loading the same url as the one in Chrome or by changing the `test/karma.conf.js`
  file.
- Start Karma for development with `npm run local-test`
  - Karma will sit and watch your application and test Javascript files. To run or re-run tests just
    change any of your these files.
  - Remember to run `npm run watch` fisrt.

[jasmine]: http://pivotal.github.com/jasmine/
[karma]: http://karma-runner.github.io
