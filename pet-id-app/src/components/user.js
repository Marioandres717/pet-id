import React, { useReducer } from "react"
import { gql, useMutation } from "@apollo/client"
import Image from "./image"

const UPDATE_USER = gql`
  mutation updateUser($id: Int!, $input: users_set_input!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: $input) {
      id
      addressId
      authId
      avatarId
      email
      name
      avatar {
        id
        url
        large_image_url
      }
    }
  }
`

const DELETE_USER = gql`
  mutation deleteUser($id: Int!) {
    delete_users_by_pk(id: $id) {
      id
      name
      addressId
      authId
      avatarId
      email
    }
  }
`

const INITIAL_STATE = {
  name: "",
  avatar: "",
  email: "",
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

const init = user => (user ? user : INITIAL_STATE)

const inputStyle = { display: "block", margin: "0.5rem" }

const User = ({ user }) => {
  const [userState, dispatch] = useReducer(
    reducer,
    user ? user : INITIAL_STATE,
    init
  )
  const [updateUser] = useMutation(UPDATE_USER, {
    onError: e => console.error("Error", e),
  })
  const [deleteUser] = useMutation(DELETE_USER, {
    onError: e => console.error("Error", e),
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
    const { name, email, avatar } = userState
    updateUser({
      variables: { id: userState.id, input: { name, email, avatar } },
    })
  }

  const handleDelete = () => {
    deleteUser({ variables: { id: userState.id } })
  }

  return (
    <>
      <form action="submit" onSubmit={handleSubmit}>
        <Image
          image={userState.avatar}
          entityId={userState.id}
          updateEntity={updateUser}
        />
        <label htmlFor="name">
          Name
          <input
            style={inputStyle}
            type="text"
            name="name"
            value={userState.name}
            onChange={updateFieldValue("name")}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            style={inputStyle}
            type="email"
            name="email"
            value={userState.email}
            onChange={updateFieldValue("email")}
          />
        </label>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default User
