# Inter Component Communication
https://github.com/Farata/angular2typescript/
## Components
* Component definition object can take `styles` as an array of styles to apply rather than the file.
   * `:host` pseudo-selector will match the component element.

## Angular CLI
* **angular-cli.json** can contain multiple applications.
* `ng serve --app <name>` will run the named app.
* `--open` will open the page in the default browser.

## Component Input/Output
* Components are black boxes with in/out doors -- loose coupling.
* `@Input()` marks data coming from parent; `@Output()` marks data going out.
   * Annotations can be on properties, setters, more?

### Input
* Changes to inputs can be watched using lifecycle hooks.

### Output
**Definition:** `@output() lastPrice: EventEmitter<IPriceQuote> = new EventEmitter();`   
**Emission:** `this.lastPrice.emit(<value>);`   
**Consumption:** `<component (lastPrice)="handler($event)" ...></component>`
* Output properties need to be `EventEmitter<T>`.

## Mediator Pattern
https://en.wikipedia.org/wiki/Mediator_pattern
* Mediator can be a common parent or possibly a service.
* Components won't talk to each other, but to the mediator.

## Projecting HTML Fragments to Child Component Templates
* This was called "transclusion" in Angular 1.
* `<ng-content>` flags the insertion point for projection.
   * The `select="<selector>"` attribute can allow multiple projection points.

## Shadow DOM
* Shadow DOM provides an encapsulation boundary between components and their parents.
* Subtrees are rendered as part of the HTML document but elements are not attached to the parent document.
* With Shadow DOM the CSS styles of Web components  won’t be merged with the main DOM CSS.
* `ViewEncapsulation` defines the encapsulation behavior on the `encapsulation` property of the component definition object.
   * `Emulated` - Emulate the encapsulation of Shadow DOM.
   * `Native` - Use native browser support for Shadow DOM for encapsulation.
   * `None` - Do not encapsulate child components.

## Route Parameters
* Inject `ActivatedRoute` into the child component to read route parameters.
   * `.snapshot` gets params once.
   * `.paramMap.subscribe()` can watch changes for parameters.

## Component Lifecycle
Creation, initialization, change-detection binding, destruction and more.
* If you provide the lifecycle hook functions, angular will call them.
* Some are invoked only once, others are invoked upon certain events.
* Lifecycle hooks are implemented via interfaces as `OnInit -> ngOnInit() { }`.
* Setting `changeDetection` to `ChangeDetectionStrategy.OnPush` will cause the change detector to only evaluate components if their input values have changed.

## Injecting a Child Component
* `@ViewChild`
   * Setting an identifier on components with `#<identifier>` allows identification.
   * Annotate a component property with `@ViewChild('<identifier>')` to inject a reference to that component.
* `@ViewChildren(<component-type>) name: QueryList<<component-type>>` injects all children of that type.
