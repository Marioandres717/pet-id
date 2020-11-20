import React from "react"
import Layout from "./src/components/layout"

function wrapPageElement({ element, props }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>
}

const registerServiceWorker = () => true

function onServiceWorkerUpdateReady() {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}

export { wrapPageElement, registerServiceWorker, onServiceWorkerUpdateReady }
