node-js-open-shift-sandbox
==========================

[![Build Status](https://img.shields.io/travis/amercier/node-openshift-sandbox/master.svg?style=flat-square)](https://travis-ci.org/amercier/node-openshift-sandbox)
[![Dependency Status](http://img.shields.io/gemnasium/amercier/node-openshift-sandbox.svg?style=flat-square)](https://gemnasium.com/amercier/node-openshift-sandbox)


This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.4.2.

Getting Started
---------------

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

Build & development
-------------------

Run `npm run build` for building and `npm start` for preview.

Testing
-------

Running `npm test` will run the unit tests with karma.

Deployment
----------

This application is deployed on [OpenShift](https://www.openshift.com/) by [Travis CI](https://travis-ci.org/). Successful builds on `master` branch are automatically
deployed.
