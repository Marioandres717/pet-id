import React, { useReducer } from "react"
import { gql, useMutation } from "@apollo/client"
import Image from "./image"
import {
  Button,
  Card,
  CardHeader,
  TextField,
  Typography,
} from "@material-ui/core"

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
    const { name, email, avatarId } = userState
    updateUser({
      variables: { id: userState.id, input: { name, email, avatarId } },
    })
  }

  const handleDelete = () => {
    alert("deleting user, this is disabled")
    deleteUser({ variables: { id: userState.id } })
  }

  return (
    <Card>
      <form
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "255px 1fr",
        }}
        action="submit"
        onSubmit={handleSubmit}
      >
        <Image
          image={userState.avatar}
          onImageUpload={updateFieldValue("avatarId")}
        />
        <div>
          <CardHeader
            title={<Typography variant="h6">Basic info</Typography>}
          />
          <TextField
            id="name"
            label="Name"
            style={{ margin: 8 }}
            placeholder="Enter Name"
            value={userState.name}
            fullWidth
            onChange={updateFieldValue("name")}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="Email"
            label="Email"
            style={{ margin: 8 }}
            placeholder="Enter Email"
            value={userState.email}
            onChange={updateFieldValue("email")}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />

          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Button
              disabled
              variant="contained"
              color="secondary"
              type="button"
              onClick={handleDelete}
              style={{ margin: 8 }}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ margin: 8 }}
              type="submit"
            >
              Save
            </Button>
          </div>
        </div>
      </form>
    </Card>
  )
}

export default User
