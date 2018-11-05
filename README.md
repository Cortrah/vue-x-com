# VueCommander

Vue Commander is an experiment in using the command pattern and asynchronous command queues 
to provide an alternative to the standard stylistic use of vuex in a vue app.

Specifically the goals are to

Unify the syntax of events, router actions, vuex actions and vuex mutations 

Be able to record and playback asynchronous commands for things like transactional boundaries and undo/redo 

Maintain compatibility with the vuex and event logs of vue-dev-tools.

It would be nice if The command queues could sit in a hierarchy where they can choose 
whether to process a command itself or forward a command up to the next level, wait for it's completion
and then continue processing, but this might cause a problem in maintaining the order of processing 
if they are allowed to make changes to the store, so to start just use one main event bus, 
In the future look at if we can use a rule of thumb that says
anything that modifies the store must bubble up to the top.

Another area to explore is whether commands should have classes of types 
or whether each command just has it's parameter types and we use the name of the command to determine types
If so many would probably want to be based on browser event types
But there would be an additional set for, controlling the queue, navigation, session, and domain events

Control; Enqueue, Dequeue, Play, Pause, Reverse
Navigation: with to, from and data params possibly browser history 
Session: LoggedIn LoggedOut etc
Stage: TableJoined, StartGame, GameTick, 
Domain: CardSelected, ActorTargeted, MistleImpact

Other types
Layout: resize, scroll, zoom
Network, connected, unconnected, retrieved
Input, mouse, key, drag and drop, focus, blur
Animation
Transition
Media
Progress


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
