# HTTP and Websocket Communication
## NPM
* Creating a script called `pre<name>` or `<post>name` will cause those scripts to run before `<name>`.

## TypeScript
* `tsc -w` will watch and rebuild.
* `nodemon` can be used to watch a file and re-run it when it changes.

## HTTP
* `HttpModule` in imports provides `Http` from `@angular/http`.
* Methods return an `Observable<Response>` that needs to be unwrapped with `.json()`.
* `http.get('<route>')` does not execute the XHR until a subscription is registered.

### Development
* While developing, it can be useful to set up a proxy to the server.
   * Configured in `proxy-conf.json`.
   * Run using `ng serve --proxy-config proxy-conf.json`.
* Angular can be just-in-time or ahead-of-time compiled.
   * With AOT, templates and components will be precompiled with the `ngc` compiler.
   * `ng build` = JIT   
     `ng build --prod` = AOT + optimization   
     `ng build --prod --aot=false` = AOT + unoptimized

## Websockets
* Aaand, then he didn't talk about Angular 2+ websocket code at all.
