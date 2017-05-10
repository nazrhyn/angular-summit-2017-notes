# Dynamic Directives
* Directives are...
   * Compiled top down
   * Pre-linked top down
   * Linked bottom up
* The Directive Definition Object
   * If `transclude` is `true|function`, they are compiled bottom up.
   * If `require` is an object and `bindToController` is truthy, the required controllers are automatically bound to the associated controller.
