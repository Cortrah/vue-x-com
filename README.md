# VueCommander

Vue Commander is an experiment in using the command pattern and asynchronous command queues 
to provide an alternative to the standard stylistic usage of vuex in a vue app which I find verbose and inconsistent.

Specifically the goals are to

Unify the syntax of events, router actions, vuex actions and vuex mutations 

Be able to record and playback asynchronous commands for things like transactional boundaries and undo/redo functionality

Maintain compatibility with the vuex and event logs of vue-dev-tools.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```
