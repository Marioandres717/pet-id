import React, { useEffect, useState } from "react"
import { Router } from "@reach/router"
import { navigate } from "gatsby"
import IdentityModal from "react-netlify-identity-widget"

import "react-netlify-identity-widget/styles.css"
import Login from "../components/login"
import Home from "../components/home"
import PrivateRoute from "../components/private-route"
import Profile from "../components/profile"

const Dashboard = ({ location }) => {
  const [isVisible, setVisibility] = useState(false)
  const showModal = () => setVisibility(true)

  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true })
    }
  }, [location.pathname])

  return (
    <>
      <Profile showModal={showModal} />
      <Router>
        <Login path="/dashboard/login" showModal={showModal} />
        <PrivateRoute path="/dashboard/home" component={Home} />
      </Router>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => setVisibility(false)}
      />
    </>
  )
}

export default Dashboard
