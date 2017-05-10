# Keynote
* There is no semver? (Even though this guy says it is.)
   * Anything higher than 1.x is all "Angular".
   * "Breaking change" is being taken very seriously; even something that becomes a warning that wasn't is breaking.
   * Moving to a modern staggered release schedule.
      * Patches every week.
      * 3 minor releases.
      * Major every 6 months.
      * Stable versions are maintained for 2 release periods (12 months).
* Angular used to be an internal product; the customer was Google.
* Typescript is an "officially supported development language" within Google now.
* Angular still going up in search volume (significantly as compared to React).
* More Angular jobs every day.

## Angular 3
* There is no Angular 3.
* `@angular/router` was already at version 3, so they skipped to 4.


## Angular 4
* Reduced code footprint.
* Supports TypeScript 2.1/2.2.
   * Supports strict null checks as a compilation option.
* TypeScript 1.8 is no longer supported.
* Ahead Of Time (AOT) compilation.
   * Template building and checking happens at build time now.
* Animations package removed from `@angular/core`.
* `<template>` is now `<ng-template`.
* `*ngIf` supports an `else` condition now.
   * `*ngIf="<condition>; else <else-template>"`
* New `titleCase` pipe ("pipes" are Angular 1 "filters").
* Some improvements to HTTP and template overrides.
* New Meta service to handle meta tags.
* Support for `input type="email"`.
* New interface `ParamMap` / `QueryParamMap` to manage URL parameters.
* Enhancements to the `CanDeactivate` interface.
* New `ngPlural` / `ngPluralCase` directives.
* Template source maps can be created now.

### Angular Universal
* Allows rendering of Angular templates on the server side.

## Angular 5
* Releasing in September 2017.

## The Future of the Web
* Progressive web apps?
   * Software running everywhere.
   * Usurping walled gardens?
