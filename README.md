This sample is a simple  Behavior Driven Development (BDD) and a Javascript
application written in Angular 1, the goal of this application
is show how works protactor with cucumber and Phantom.

## How do we install?

We need Node.js and npm and Bower.

```
$ npm install
$ npm run bower
```

## Usage

```bash
$ npm run start
```

Open your browser and go to <http://localhost:3000/> to try the application.

## Tests

You have to open 3 terminals because you need to:

* launch via application via `npm run start`
* Run PhantomJS (which is in devDependencies of this
  project, so you can run `npm run phantom`) if you prefer selenium you can
  change it
* and finally run the Cucumber tests (via Protractor) with this command:
  `npm run test`
