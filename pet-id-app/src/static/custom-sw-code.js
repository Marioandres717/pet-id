/* eslint-disable no-undef */
self.addEventListener("push", e => {
  e.waitUntil(
    self.ServiceWorkerRegistration.sendNotification("test message", {})
  )
})
// show a notification after 15 seconds (the notification
// permission must be granted first)
// setTimeout(() => {
//   self.registration.showNotification("Hello, world!")
// }, 15000)

// // register a custom navigation route
// const customRoute = new workbox.routing.NavigationRoute(({ event }) => {
//   // ...
//   console.log("event", event)
// })
// workbox.routing.registerRoute(customRoute)
