import React, { useContext, useEffect } from "react"
import { useIdentityContext } from "react-netlify-identity"
import Address from "./address"
import { UserContext } from "../hooks/user-context"
import User from "./user"

const Home = () => {
  const { user: netlifyUser, isConfirmedUser } = useIdentityContext()
  const { user, getUser } = useContext(UserContext)

  useEffect(() => {
    getUser({
      variables: { authId: netlifyUser.id },
    })
  }, [netlifyUser, getUser])

  return (
    <div>
      {!isConfirmedUser && (
        <>
          <pre style={{ backgroundColor: "papayawhip" }}>
            You have not confirmed your email. Please confirm it before you use
            the site.
          </pre>
          <button>Verify</button>
        </>
      )}
      {user && isConfirmedUser && (
        <fieldset>
          <legend>User Information</legend>
          <User user={user} />
          <div>
            <p>Address</p>
            <Address userId={user.id} address={user.address} />
          </div>
        </fieldset>
      )}
    </div>
  )
}
export default Home
