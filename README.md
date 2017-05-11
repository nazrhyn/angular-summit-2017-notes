# Angular Summit 2017
These are notes from all of the sessions I went to.

## Sessions
### Wednesday
1. **[Keynote](https://github.com/nazrhyn/angular-summit-2017-notes/blob/master/keynote/keynote.md)** - Michael Carducci ([@michaelcarducci](https://twitter.com/michaelcarducci) | [/carducci](https://github.com/carducci))   
    _The State of Angular in 2017_   
    The entire landscape of AngularJS has been changing rapidly. What does it all mean?
    
    It seems as though Angular2 was just released, and Angular 4 is already being finalized. Angular uses semver, which means 4 contains breaking changes again. What does this mean for our Angular2 (and Angular1) projects, and what happened to Angular3? Find out in this keynote - The State of Angular in 2017
1. **[Angular Flex Layout](https://github.com/nazrhyn/angular-summit-2017-notes/blob/master/angular-flex-layout/angular-flex-layout.md)** - Ekaterina Orlova ([@cheerypick](https://twitter.com/cheerypick) | [/cheerypick](https://github.com/cheerypick))   
    _The power of Flexbox and RWD the Angular way_   
    **Slides:** [local](https://github.com/nazrhyn/angular-summit-2017-notes/blob/master/angular-flex-layout/angular-flex-layout.pdf) | [online](http://slides.com/cherrypick/deck-9)   
    The Flexbox Layout is an indispensable tool for defining UI layouts and easy solving some common issues like vertical centering, same-height columns, reordering and changing direction. It supported by all the main browsers and platforms and works for the responsive web design perfectly. How to use the power of this CSS box model in Angular developer-friendly way using APIs?
    
    Meet Flex Layout from Angular Material team - the smartest way to automate the process of applying appropriate Flexbox CSS to browser view hierarchies. No more complexities and workarounds of traditional, CSS way, but the real power to easily and intuitively specify different layouts, sizing, visibilities for different viewport sizes and display devices.
    
    Let’s discover Angular Flex Layout advantages by real-life examples and check how easy to add the responsiveness to any SPA using the Responsive API features.
1. **[Angular Mobile Toolkit](https://github.com/nazrhyn/angular-summit-2017-notes/blob/master/angular-mobile-toolkit/angular-mobile-toolkit.md)** - Christina Kayastha ([@christikaes](https://twitter.com/christikaes) | [/christinakayastha](https://github.com/christinakayastha))   
    _Progressive Web Apps_   
    **Slides:** [local](https://github.com/nazrhyn/angular-summit-2017-notes/blob/master/angular-mobile.toolkit/angular-mobile.toolkit.pdf)   
    One of the things that makes Angular so powerful is all of the tooling that it comes with. One piece of tooling is the Angular Mobile Toolkit and how it helps you easily setup Progressive Web Apps. PWAs will help you create an offline first experience, so that even users with little or no connectivity can experience your web app.
    
    In this talk we will talk about the basics of what makes a PWA, and go through the steps of implementing a service worker. We will tie it all together with the Angular Mobile Toolkit.
1. **[Dynamic Directives](https://github.com/nazrhyn/angular-summit-2017-notes/blob/master/dynamic-directives/dynamic-directives.md)** - Peter Pavlovich ([@ppavlovich](https://twitter.com/ppavlovich) | [/pavlovich](https://github.com/pavlovich))   
    _Part 2: Taking directives to the next level_   
    Directives are, arguably, one of the most attractive features of Angular. But much of their power goes unused by most developers. Dynamic templates, scope isolation, and powerful, flexible compilation are all tools the savvy Angular developer needs to master.
    
    In this session, we will build on your basic understanding of Angular directives and explore the more complex and powerful options available to directive authors. We will discover and explain the use of some of the more powerful but often overlooked or hidden features that make directives such an indispensable part of the Angular framework.
    
    From dynamically generated templates to isolating your scope to proper use of pre, post and linking functions, if you write directives, you will not want to miss this opportunity to master these capabilities.
1. **[Advanced State Management With Redux and ngrx](https://github.com/nazrhyn/angular-summit-2017-notes/blob/master/advanced-state-management/advanced-state-management.md)** - Gerard Sans ([@gerardsans](https://twitter.com/gerardsans) | [/gsans](https://github.com/gsans))   
    _Angular 4+_   
    **Slides:** [local](https://github.com/nazrhyn/angular-summit-2017-notes/blob/master/advanced-state-management/advanced-state-management.pdf)   
    Redux is an architecture made famous by Facebook and React. It is based on Flux and Elm so it provides a solid base to create complex applications.
    
    In this talk we are going to use a basic application to showcase Redux while using Angular and ngrx/store. Finally we will cover asynchronous scenarios with ngrx/effects.

### Thursday
1. **[Angular Redux](https://github.com/nazrhyn/angular-summit-2017-notes/blob/master/angular-redux/angular-redux.md)** - Christina Kayastha ([@christikaes](https://twitter.com/christikaes) | [/christinakayastha](https://github.com/christinakayastha))   
    **Slides:** [local](https://github.com/nazrhyn/angular-summit-2017-notes/blob/master/angular-mobile.toolkit/angular-mobile.toolkit.pdf)   
    Angular Redux is a great library that provides redux bindings for state management in Angular.
    
    State management is essential in large scale Single Page Applications-it helps keep code easy to learn and debug. In this talk we will introduce the concept of Redux and show how Redux can be used to managed state in Angular.
    
1. **[Implementing Inter-component Communication in Angular 4](https://github.com/nazrhyn/angular-summit-2017-notes/blob/master/inter-component-communication/inter-component-communication.md)** - Yakov Fain ([@yfain](https://twitter.com/yfain) | [/yfain](https://github.com/yfain))   
    **Slides:** [local](https://github.com/nazrhyn/angular-summit-2017-notes/blob/master/inter-component-communication/inter-component-communication.pdf)   
    Angular is a component-based framework with a well-defined API for passing data to and getting data from a component. Any application is a tree of components that often need to communicate with each other.
    
    In this presentation, you'll see how to create reusable application components that can exchange data with each other in a loosely-coupled manner. You'll see how components can communicate via a common parent or via an injectable service. You'll see how to pass data using the router, input and output parameters, events and callbacks. You'll also learn how to use projection to pass HTML fragments to a component's template. You'll see how to pass parameters to routes. We'll also touch upon the incorporation of the third-party JavaScript libraries into an Angular 4 app.
    
1. **[Communication with the server via HTTP and WebSocket protocols](https://github.com/nazrhyn/angular-summit-2017-notes/blob/master/http-and-websocket-communication/http-and-websocket-communication.md)** - Yakov Fain ([@yfain](https://twitter.com/yfain) | [/yfain](https://github.com/yfain))   
    _Angular 4+_   
    **Slides:** [local](https://github.com/nazrhyn/angular-summit-2017-notes/blob/master/http-and-websocket-communication/http-and-websocket-communication.pdf)   
    In this session, you'll see how to create an Angular 4 app that can communicate with the servers via a pull (HTTP) and push (WebSocket) modes. We'll program a simple Node server and then will go through a number of code samples that communicate with it using HTTP and WebSocket protocols.
    
    We'll start with creating a simple NodeJS server, and then will enable it to handle HTTP requests from an Angular app. Then you'll see how to wrap a service into an observable stream. Finally, we'll teach our server to perform a data push to an Angular client using the WebSocket protocol.
    
1. **[Angular on the Desktop with Electron](https://github.com/nazrhyn/angular-summit-2017-notes/blob/master/desktop-angular-with-electron/desktop-angular-with-electron.md)** - Troy Miles ([@therockncoder](https://twitter.com/therockncoder) | [/rockncoder](https://github.com/Rockncoder))   
    “Electron” is the secret sauce used by startups and billion dollar companies to create cross-platform desktop apps. It lies at the heart of favorite apps like Atom, Slack, Visual Studio Code, Ionic Lab, and GitBook. Electron is an open source project from GitHub.
    
    In this session, we walk through developing an Angular with Electron. We'll use the command line tools to create our app. Walk through the development workflow of adding features and debugging our code. And then we will show our app running on Linux, MacOS, and Windows.
    
    Since Electron includes the rendering engine of Chromium, CSS animations, and high-speed graphics are a breeze. We demo both animations and D3.js running in our cross-platform app.
    
    We will wrap up with valuable tips on maintaining our app, updating it and finally submitting it to the Mac and Window App Stores.

1. **[Angular Material](https://github.com/nazrhyn/angular-summit-2017-notes/blob/master/angular-material/angular-material.md)** - Christina Kayastha ([@christikaes](https://twitter.com/christikaes) | [/christinakayastha](https://github.com/christinakayastha))   
    **Slides:** [local](https://github.com/nazrhyn/angular-summit-2017-notes/blob/master/angular-material/angular-material.pdf)   
    One of the things that makes Angular so powerful is all of the tooling that it comes with. AngularMaterial is a UI Component Library that makes it easy to build a nice looking app very easily. In this talk we will explore how to setup and use AngularMaterial in your Angular apps.
    
    We will talk about some Material Design guiding principles, and see how AngularMaterial makes incorporating these easy! Get ready to skin your app with some awesome, clean, and stunning components!

## Slides
All slides in this repository were included with permission of their respective authors. All slide authors retain the copyright for their slides.
