import React, { useContext, useEffect, useReducer } from "react"
import { gql, useMutation } from "@apollo/client"

import { UserContext } from "../hooks/user-context"
import QRCodeGen from "./qrcode-gen"

const CREATE_PET = gql`
  mutation insertPet($input: [user_pets_insert_input!]!) {
    insert_user_pets(objects: $input) {
      affected_rows
      returning {
        id
        user {
          id
          name
        }
        pet {
          id
          name
          species
          description
          uuid
        }
      }
    }
  }
`

const UPDATE_PET = gql`
  mutation updatePet($id: Int!, $input: pets_set_input) {
    update_pets_by_pk(pk_columns: { id: $id }, _set: $input) {
      id
      name
      avatarId
      description
      species
      uuid
      avatar {
        id
        url
        large_image_url
      }
    }
  }
`

const DELETE_PET = gql`
  mutation deletePet($id: Int!) {
    delete_pets_by_pk(id: $id) {
      id
      avatarId
      description
      name
      species
      uuid
    }
  }
`

const INITIAL_STATE = {
  name: "",
  description: "",
  species: "",
}

const reducer = (state, action) => {
  switch (action.type) {
    case "updateFieldValue":
      return { ...state, [action.field]: action.value }

    case "reset":
      return init(action.payload)
    default:
      return INITIAL_STATE
  }
}

const init = pet => (pet ? pet : INITIAL_STATE)

const inputStyle = { display: "block", margin: "0.5rem" }

const Pet = () => {
  const [petState, dispatch] = useReducer(reducer, INITIAL_STATE, init)
  const { user } = useContext(UserContext)
  const [addPet, { data, loading }] = useMutation(CREATE_PET, {
    onError: e => console.error("error", e),
  })
  const [updatePet] = useMutation(UPDATE_PET, {
    onError: e => console.error("error", e),
  })
  const [deletePet] = useMutation(DELETE_PET, {
    onError: e => console.error("error", e),
  })

  useEffect(() => {
    if (data) {
      dispatch({
        type: "updateFieldValue",
        field: "id",
        value: data.insert_user_pets.returning[0].pet.id,
      })
    }
  }, [data])

  const updateFieldValue = field => event => {
    dispatch({
      type: "updateFieldValue",
      field,
      value: event.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (petState.id) {
      updatePet({
        variables: {
          id: petState.id,
          input: petState,
        },
      })
    } else {
      addPet({
        variables: {
          input: {
            userId: user.id,
            pet: {
              data: petState,
            },
          },
        },
      })
    }
  }

  // eslint-disable-next-line no-unused-vars
  const handleDelete = event => {
    if (petState.id) {
      deletePet({
        variables: {
          id: petState.id,
        },
      })
    }

    dispatch({ type: "reset" })
  }

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          style={inputStyle}
          type="text"
          name="name"
          value={petState.name}
          onChange={updateFieldValue("name")}
        />

        <label htmlFor="description">Description</label>
        <input
          style={inputStyle}
          type="text"
          name="description"
          value={petState.description}
          onChange={updateFieldValue("description")}
        />

        <label htmlFor="species">Species</label>
        <select
          style={inputStyle}
          type="text"
          name="species"
          value={petState.species}
          onChange={updateFieldValue("species")}
        >
          <option value={""}>Select</option>
          <option value={1}>Dog</option>
          <option value={2}>Cat</option>
        </select>

        <button type="button" onClick={handleDelete}>
          {petState.id ? "Delete" : "Reset"}
        </button>
        <button type="submit">{petState.id ? "Update" : "Create"}</button>
      </form>
      <div>
        {data && (
          <QRCodeGen data={data.insert_user_pets.returning[0].pet.uuid} />
        )}
      </div>
    </div>
  )
}
export default Pet
