import React from "react"
import { gql } from "@apollo/client"

const PET_BY_UUID = gql`
  query PetsByUuid($uuid: uuid!) {
    pets(where: { uuid: { _eq: $uuid } }) {
      id
      name
      description
      species
      uuid
      avatar
      user_pets {
        user {
          id
          name
          phone
          avatar
          email
          address {
            id
            line_1
            zip_or_postcode
            province_or_state
            city
            country
          }
        }
      }
    }
  }
`
const App = () => {
  return <div>HERE GOES THE READONLY DATA</div>
}
export default App
