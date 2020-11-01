import React from "react"
import { useIdentityContext } from "react-netlify-identity"
import { gql, useQuery } from "@apollo/client"
import Address from "./address"

const USER_BY_AUTH_ID = gql`
  query UserByAuthId($authId: String!) {
    users(where: { authId: { _eq: $authId } }) {
      id
      name
      email
      phone
      avatar
      addressId
    }
  }
`

const Home = () => {
  const { user: netlifyUser, isConfirmedUser } = useIdentityContext()
  const { loading, error, data } = useQuery(USER_BY_AUTH_ID, {
    variables: { authId: netlifyUser.id },
  })

  if (loading) return <p>LOADING....</p>
  if (error) return <p>Error: {error}</p>

  const [user] = data.users

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
      {isConfirmedUser && (
        <fieldset>
          <legend>User Information</legend>

          <p>Address</p>
          <Address userId={user.id} />
        </fieldset>
      )}
    </div>
  )
}
export default Home
