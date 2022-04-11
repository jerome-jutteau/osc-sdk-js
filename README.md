# Outscale SDK for Javascript

Welcome to Outscale SDK for [javascript](XXX)/[typescript](XXX).

## How to use the SDK ?

XXX
Simply grab go module:
```bash
$ export GO111MODULE=on
$ go get github.com/outscale/osc-sdk-go/v2
```

See [examples](examples/) folder to jump straight into the code!

# Contributing

Check [contributing documentation](CONTRIBUTING.md).

# License

> Copyright Outscale SAS
>
> BSD-3-Clause

This project is compliant with [REUSE](https://reuse.software/).






# outscale-api@0.1.0

This generator creates TypeScript/JavaScript client that utilizes [Fetch API](https://fetch.spec.whatwg.org/). The generated Node module can be
 used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Referenc
e](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run ```npm publish```

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install outscale-api@0.1.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save

