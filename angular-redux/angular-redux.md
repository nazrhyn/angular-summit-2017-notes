# Angular Redux
Predictable state container for web applications.
* State management makes applications easier to debug and learn.
* Descendent of [Flux](https://facebook.github.io/flux/).
* See [Advanced State Management](https://github.com/nazrhyn/angular-summit-2017-notes/blob/master/advanced-state-management/advanced-state-management.md) for more details on state containers and Redux.

## Core Principles
* All application **state** is stored in a single **store**.
* The only way to change **state** is by emitting **actions**.
* **Reducers** describe how to transform state based on **actions**.

## Code Examples
* See **[code/plain-javascript](https://github.com/nazrhyn/angular-summit-2017-notes/tree/master/angular-redux/code/plain-javascript)** for a simple example.
* See **[code/angular-redux](https://github.com/nazrhyn/angular-summit-2017-notes/tree/master/angular-redux/code/angular-redux)** for an Angular 2+ example.
   * Make sure `npm install -g @angular/cli` is done.
   * Run `ng serve` in that directory.
