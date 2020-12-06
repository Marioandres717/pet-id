import React, { useContext, useEffect, useState } from "react"
import { Router } from "@reach/router"
import { navigate } from "gatsby"
import IdentityModal from "react-netlify-identity-widget"

import { UserContext } from "../hooks/user-context"

import Login from "../components/login"
import Profile from "../components/profile"
import PrivateRoute from "../components/private-route"
import Nav from "../components/nav"

import "@reach/tabs/styles.css"
import "react-netlify-identity-widget/styles.css"
import Pets from "../components/pets"
import { useIdentityContext } from "react-netlify-identity"

const Dashboard = ({ location }) => {
  const [isVisible, setVisibility] = useState(false)
  const showModal = () => setVisibility(true)
  const {
    user: netlifyUser,
    isLoggedIn,
    isConfirmedUser,
  } = useIdentityContext()
  const { user, getUser } = useContext(UserContext)

  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true })
    }
  }, [location.pathname])

  useEffect(() => {
    if (isLoggedIn & isConfirmedUser)
      getUser({
        variables: { authId: netlifyUser.id },
      })
  }, [netlifyUser, getUser, isLoggedIn, isConfirmedUser])

  return (
    <>
      <Nav showModal={showModal} />
      <Router>
        <Login path="/dashboard/login" showModal={showModal} />
        <PrivateRoute
          path="/dashboard/profile"
          component={Profile}
          user={user}
        />
        <PrivateRoute
          path="/dashboard/pets"
          component={Pets}
          pets={user ? user.user_pets : undefined}
        />
      </Router>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => setVisibility(false)}
      />
    </>
  )
}

export default Dashboard
