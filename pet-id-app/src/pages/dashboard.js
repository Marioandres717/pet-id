import React, { useState } from "react"
import IdentityModal from "react-netlify-identity-widget"

import "react-netlify-identity-widget/styles.css"

const Dashboard = () => {
  const [isVisible, setVisibility] = useState(false)
  const showModal = () => setVisibility(true)

  return (
    <>
      <h1>Hi people</h1>
      <p>We`lcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => setVisibility(false)}
      />
    </>
  )
}

export default Dashboard
