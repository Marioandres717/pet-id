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
      address {
        id
        city
        country
        line_1
        other_address_details
        province_or_state
        zip_or_postcode
      }
      user_pets {
        pet {
          id
          name
          species
          description
          uuid
          avatar
        }
      }
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
