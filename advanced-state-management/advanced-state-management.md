# Advanced State Management
Demo Code: https://plnkr.co/edit/n8ksowdW5ZlwwnNH9yoT

## Angular (2+) Differentiators
* Follows the latest web standards.
* Uses TypeScript, so bleeding-edge language features are available.
* Simpler (than Angular 1, at least).
* Super fast.

## New Angular 4 Features
* `ng-version` attribute is added to components with running version.
* Okay, maybe it is semver...
* See information in [Keynote](https://github.com/nazrhyn/angular-summit-2017-notes/blob/master/keynote/keynote.md).

## Redux
Created by Dan Abramov [@dan_abramov](https://twitter.com/dan_abramov)
* Attempts to resolve the issue of scattered state.

### Main Principles
1. Unidirectional data flow
1. Single immutable state
   * Any changes will produce a new reference; changes can be tracked by reference
   * Immutability can be enforced by convention or by a library (e.g. [Immutable.js](https://facebook.github.io/immutable-js/))
1. New states are created without side effects

#### Immutability By Convention
* Arrays
   * Use array methods that do not modify in place. (e.g. `concat` rather than `push`)
* Objects
   * Use `Object.assign({}, <obj>, <modifications>)` in ES6 or a library function that will always create a new object.

#### Immutability By Library
* Enforcement is assured and will make code more resilient to team changes.

### Reducers
* Create new states in response to **actions** applied to the current **state**.
* Pure functions.
   * Deterministic; do not have any side effects other than the output.
* Don't produce side effects.
* Composable (the mathematical property; meaning that they can be extended).

### Middlewares
* Sit between **actions** and **reducers**.
* Used for logging, storage and asynchronous operations.
* Composable.

## ngrx
Created by Rob Wormald [@robwormald](https://twitter.com/robwormald)
* Re-implementation of Redux on top of Angular and RxJS 5.
* Suite: **store**, **effects**, **router**, **db**.
* Still requires the selection of "how" to maintain immutability.

### Why?
* Simplified Development
* Avoids complex dependencies
* Great Performance
* Developer Experience

### ngrx/store
* Reducers are combined to produce a single one that handles the whole state.
* A "root" reducer executes the combined reducer against the state.

#### Example Flow
1. Component subscribes.
    * The view can pare down what it subscribes to of the full state.
1. Component dispatches `ADD_TODO` action.
    * Action must include `type: <unique-value>`.
1. Store executes the reducer for that action.
    * Manages the execution of the action upon the state store.
    * Must always pass the state on if not handling an action.
1. Store notifies the subscribing Component.
1. View updates.

### Dev Tools
* Save/Restore state
   * The application will resume exact as it was at that point in time.
* Live Debugging
* Time Travel
