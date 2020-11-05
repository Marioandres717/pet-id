import React, { useEffect, useState } from "react"
import { Router } from "@reach/router"
import { navigate } from "gatsby"
import IdentityModal from "react-netlify-identity-widget"

import { UserProvider } from "../hooks/user-context"

import Login from "../components/login"
import Home from "../components/home"
import PrivateRoute from "../components/private-route"
import Nav from "../components/nav"
import Pet from "../components/pet"

import "@reach/tabs/styles.css"
import "react-netlify-identity-widget/styles.css"

const Dashboard = ({ location }) => {
  const [isVisible, setVisibility] = useState(false)
  const showModal = () => setVisibility(true)

  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true })
    }
  }, [location.pathname])

  return (
    <UserProvider>
      <Nav showModal={showModal} />
      <Router>
        <Login path="/dashboard/login" showModal={showModal} />
        <PrivateRoute path="/dashboard/home" component={Home} />
        <PrivateRoute path="/dashboard/pets" component={Pet} />
      </Router>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => setVisibility(false)}
      />
    </UserProvider>
  )
}

export default Dashboard
