import React, { useReducer } from "react"
import { gql, useMutation } from "@apollo/client"

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
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE, init)
  const [addPet, { data, loading }] = useMutation(CREATE_PET, {
    onError: e => console.error("error", e),
  })

  const updateFieldValue = field => event => {
    dispatch({
      type: "updateFieldValue",
      field,
      value: event.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    addPet({
      variables: {
        input: {
          // @TODO remove
          userId: 25,
          pet: {
            data: state,
          },
        },
      },
    })
    dispatch({
      type: "reset",
      payload: state,
    })
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
          value={state.name}
          onChange={updateFieldValue("name")}
        />

        <label htmlFor="description">Description</label>
        <input
          style={inputStyle}
          type="text"
          name="description"
          value={state.description}
          onChange={updateFieldValue("description")}
        />

        <label htmlFor="species">Species</label>
        <select
          style={inputStyle}
          type="text"
          name="species"
          value={state.species}
          onChange={updateFieldValue("species")}
        >
          <option value={""}>Select</option>
          <option value={1}>Dog</option>
          <option value={2}>Cat</option>
        </select>

        {console.log("state", state)}

        <button type="submit">submit</button>
      </form>
      <div>
        {data && <h1>{data.insert_user_pets.returning[0].pet.uuid}</h1>}
      </div>
    </div>
  )
}
export default Pet
