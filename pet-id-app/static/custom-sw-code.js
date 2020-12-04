/* eslint-disable no-undef */
self.addEventListener("push", function (e) {
  const options = {
    body: "This notification was generated from a QR Code Scan!",
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

  self.registration.showNotification("Your pet was tag was scanne!", options)
})
