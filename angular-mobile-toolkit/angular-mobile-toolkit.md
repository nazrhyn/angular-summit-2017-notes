# Angular Mobile Toolkit
* Mobile is important because of global adoption and the crossing stats between PC and Mobile/Tablet internet access.
* User experiences must be: reliable, fast, engaging.

## Progressive Web Apps
* Requires HTTPS.
* Sites can prompt to "add to home screen".
* Using those links opens the site/app in full-screen mode; it looks like an app.
* Use [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) Chrome addon to evaluate PWA quality.
* Check browser support at [Is Service Worker Ready](https://jakearchibald.github.io/isserviceworkerready/).
* [Push Companion](https://web-push-codelab.appspot.com/) to test push notifications.
* Some more information about offline caching strategies at [The Offline Cookbook](https://jakearchibald.com/2014/offline-cookbook/).
* Render as much as possible statically.
* Use PWA to provide focused functionality related to data that users are _likely_ to want available offline.

### Reliability
* Uses Service Workers.
* See code examples (not entirely functional)

### Engagement
* Creating a manifest is required.
* Push notifications require a server to make the pushes that determines what users to push to.
* Service worker handles pushes from server and formats them for display.
   * Notifications have various configurations.

## Angular Mobile
https://mobile.angular.io
* Not getting updates.
* Not ready for use

## Angular CLI
* _Does_ have support for PWAs.
* After `ng new <name>`...
   1. `npm install --save @angular/service-worker`
   1. Add `"serviceWorker": true` to **.angular-cli.json** at `apps[N]`.
   1. When built, it will include the required mainfest and service worker configuration.
* For push notifications, manifest needs:

      "push": {
          "showNotifications": true,
          "backgroundOnly": false
      }
