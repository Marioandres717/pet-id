import React, { createContext } from "react"
import { gql, useLazyQuery } from "@apollo/client"

const USER_BY_AUTH_ID = gql`
  query UserByAuthId($authId: String!) {
    users(where: { authId: { _eq: $authId } }) {
      id
      name
      email
      avatar
      address {
        id
        city
        country
        line_1
        other_address_details
        province_or_state
        zip_or_postcode
        phone
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

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [getUser, { loading, data }] = useLazyQuery(USER_BY_AUTH_ID)
  const user = data && data.users.length > 0 && data.users[0]

  if (loading) return <h1>Loading...</h1>

  return (
    <UserContext.Provider value={{ getUser, user }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
