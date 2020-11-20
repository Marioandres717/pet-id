/* eslint-disable no-undef */
self.addEventListener("push", function (e) {
  const options = {
    body: "This notification was generated from a push!",
    icon: "images/example.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "2",
    },
    actions: [
      {
        action: "explore",
        title: "Explore this new world",
        icon: "images/checkmark.png",
      },
      { action: "close", title: "Close", icon: "images/xmark.png" },
    ],
  }
  e.waitUntil(self.registration.showNotification("Hello world!", options))
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
