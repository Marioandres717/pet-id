import React, { useReducer } from "react"
import { gql, useMutation } from "@apollo/client"

const UPDATE_USER = gql`
  mutation updateUser($id: Int!, $input: users_set_input!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: $input) {
      id
      addressId
      authId
      avatar
      email
      name
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
      avatar
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

  return <div>{user.name}</div>
}

export default User
