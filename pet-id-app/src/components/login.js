import React from "react"
import { useIdentityContext } from "react-netlify-identity"
import { navigate } from "gatsby"

const Login = ({ showModal }) => {
  const { isLoggedIn, isConfirmedUser } = useIdentityContext()

  if (isLoggedIn) {
    if (!isConfirmedUser) {
      return (
        <>
          <pre style={{ backgroundColor: "papayawhip" }}>
            You have not confirmed your email. Please confirm it before you use
            the site.
          </pre>
          <button>Verify</button>
        </>
      )
    } else {
      navigate("/dashboard/profile", { replace: true })
    }
  }

  return (
    <>
      <h1>Log in or Sign up</h1>
      <button onClick={showModal}>Log In</button>
    </>
  )
}

export default Login
