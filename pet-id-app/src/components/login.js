import React from "react"
import { useIdentityContext } from "react-netlify-identity"
import { navigate } from "gatsby"

const Login = ({ showModal }) => {
  const identity = useIdentityContext()

  if (identity && identity.isLoggedIn) {
    navigate("/dashboard/home", { replace: true })
  }

  return (
    <>
      <h1>Log in or Sign up</h1>
      <button onClick={showModal}>Log In</button>
    </>
  )
}

export default Login
