# Angular Flex Layout
https://github.com/angular/flex-layout   
http://cssreference.io/flexbox/   
https://gitter.im/angular/flex-layout
* Integrates flexbox layout into Angular.
* Combines Flexbox CSS and mediaQuery.
* Attempts to address some of the issues with manual application of flexbox.
* A pure TypeScript layout engine.
* **Only available for Angular 2+.**
* Independent of Angular Material, though they work together.
* Integrates with the Angular CLI.
* Developers available on gitter.im chat.

## Flexbox
* Allows containers to resize and flex even when available space is not static.
* Works vertically or horizontally.

## API
* `flex-container` and `flex-item` children.
* "main axis" and "cross axis".
* Layout Directives
   * `fxLayout*` to define behavior of containers.
* Flex Directives
   * `fxFlex*` to define behavior of flex containers.
   
### Responsive Layouts
* Includes sizes linked to media queries.
* Directives can take a layout size as a suffix.
   * e.g. `<div fxHide.xs="true">`   
      Hides the div when at the `xs` breakpoint.
   * e.g. `<div fxFlex="50%" fxFlex.xs="100%">`   
      Flexes at different sizes based on breakpoint.

### `fxFlex` Directive
* Parameters
   * `flex-grow` - How much should the element grow.
   * `flex-shrink` - How much should the element shrink as a percentage of the total.
      * This specifies what the rate of scaling is.
   * `flex-base` - What is the element's base state.
* e.g. `<div fxFlex="1 1 auto">`
* Values can be common CSS units or some aliases for common configurations.
* Directives work statically or dynamically. (`fxFlex=""` vs `[fxFlex]=""`)

### `fxFlexOrder` Directive
* Can change element order based on breakpoints.

### Derived `ngClass` Directive
* Subclass of the `ngClass` directive from `@angular/common`.
* Allows responsive suffixes on the `ngClass` directive to change classes based on size breakpoints.
* e.g. `<div ngClass="first second" [ngClass.xs]="{ first: false }">`   
   Will remove the `first` class at the `xs` breakpoint.

### `ObservableMedia` Provider
* Allows programmatic reaction to layout changes using an `Observable`.
* Triggers only on _activations_, not deactivations.
* Starts as an observable wrapper to provide additional functionality.
   * Must be unwrapped with `asObservable`.
* `isActive` can take either a breakpoint alias or a full media query.

### `BREAKPOINTS` Provider
* Allows addition of more breakpoint names and media queries.
