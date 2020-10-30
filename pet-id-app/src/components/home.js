import React from "react"
import { useIdentityContext } from "react-netlify-identity"
import { gql, useQuery } from "@apollo/client"

const USER_BY_AUTH_ID = gql`
  query UserByAuthId($authId: String!) {
    users(where: { authId: { _eq: $authId } }) {
      addressId
      authId
      avatar
      email
      name
      id
      phone
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
        <pre style={{ backgroundColor: "papayawhip" }}>
          You have not confirmed your email. Please confirm it before you use
          the site.
        </pre>
      )}
      {isConfirmedUser && (
        <fieldset>
          <legend>User Information</legend>
          <p>
            {user.id}: {user.name}: {user.authId}
          </p>
        </fieldset>
      )}
    </div>
  )
}
export default Home
