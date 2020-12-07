import React, { useEffect } from "react"
import { gql, useQuery } from "@apollo/client"
import PetRead from "../components/pet-read"
import UserRead from "../components/user-read"
import AddressRead from "../components/address-read"

const PET_BY_UUID = gql`
  query PetsByUuid($uuid: uuid!) {
    pets(where: { uuid: { _eq: $uuid } }) {
      id
      name
      description
      species
      uuid
      avatar {
        id
        url
        large_image_url
      }
      user_pets {
        user {
          id
          name
          email
          avatar {
            id
            url
            large_image_url
          }
          address {
            id
            line_1
            zip_or_postcode
            province_or_state
            city
            country
            phone
          }
        }
      }
    }
  }
`
const App = ({ location }) => {
  const uuid = location.pathname.split("/app/")[1]
  const { loading, error, data } = useQuery(PET_BY_UUID, {
    variables: { uuid },
  })

  useEffect(() => {
    if (!loading && !error && data && data.pets.length) {
      const [pet] = data && data.pets
      // eslint-disable-next-line no-undef
      fetch(`${process.env.GATSBY_NETLIFY_URL}/api/notify-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(pet.user_pets[0].user),
      })
    }
  }, [loading, error, data])

  if (loading) return <p>LOADING....</p>
  if (error) return <h1>NOTHING FOUND</h1>

  if (data.pets.length) {
    const [pet] = data.pets
    const { user } = pet.user_pets[0]
    const { address } = user
    return (
      <>
        <PetRead pet={pet} disabled={true} />
        <UserRead user={user} disabled={true} />
        <AddressRead address={address} disabled={true} />
      </>
    )
  }

  return <h1>NOTHING FOUND</h1>
}
export default App
