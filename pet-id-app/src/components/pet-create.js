import React from "react"
import { gql, useQuery } from "@apollo/client"

const PET_SPECIES = gql`
  query GetPetSpecies {
    pet_species {
      id
      type
    }
  }
`

const PetCreate = () => {
  const { loading, error, data } = useQuery(PET_SPECIES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error 😢 </p>

  return data.pet_species.map(({ id, type }) => (
    <div key={id}>
      <p>
        {id}: {type}
      </p>
    </div>
  ))
}
export default PetCreate
