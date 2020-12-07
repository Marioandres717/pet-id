import React, { useContext, useEffect, useReducer, useState } from "react"
import { gql, useMutation } from "@apollo/client"

import { UserContext, USER_BY_AUTH_ID } from "../hooks/user-context"
import Image from "./image"
import {
  Button,
  Card,
  CardHeader,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core"
import QRCodeGen from "./qrcode-gen"
import { useIdentityContext } from "react-netlify-identity"

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

const Pet = ({ pet }) => {
  const { user: netlifyUser } = useIdentityContext()
  const [showQRCode, setShowQRCode] = useState(false)
  const [petState, dispatch] = useReducer(
    reducer,
    pet.id ? pet : INITIAL_STATE,
    init
  )
  const { user } = useContext(UserContext)
  const [addPet, { data, loading }] = useMutation(CREATE_PET, {
    onError: e => console.error("error", e),
    refetchQueries: [
      {
        query: USER_BY_AUTH_ID,
        variables: { authId: netlifyUser.id },
      },
    ],
  })
  const [updatePet] = useMutation(UPDATE_PET, {
    onError: e => console.error("error", e),
  })
  const [deletePet] = useMutation(DELETE_PET, {
    onError: e => console.error("error", e),
    refetchQueries: [
      {
        query: USER_BY_AUTH_ID,
        variables: { authId: netlifyUser.id },
      },
    ],
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
    // eslint-disable-next-line no-unused-vars
    const { avatar, ...pet } = petState
    if (pet.id) {
      updatePet({
        variables: {
          id: pet.id,
          input: pet,
        },
      })
    } else {
      addPet({
        variables: {
          input: {
            userId: user.id,
            pet: {
              data: pet,
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
    <Card>
      <CardHeader title={<Typography variant="h6">Pet Info</Typography>} />
      <Image
        style={{ height: 255 }}
        image={petState.avatar}
        onImageUpload={updateFieldValue("avatarId")}
      />
      <form onSubmit={handleSubmit}>
        <TextField
          id="name"
          label="Name"
          style={{ margin: 8 }}
          placeholder="Enter name"
          value={petState.name}
          fullWidth
          onChange={updateFieldValue("name")}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="description"
          label="Description"
          style={{ margin: 8 }}
          placeholder="Enter description"
          value={petState.description}
          fullWidth
          onChange={updateFieldValue("description")}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <FormControl style={{ margin: 8 }}>
          <InputLabel shrink id="species">
            Species
          </InputLabel>
          <Select
            labelId="specieslabelid"
            id="species"
            value={petState.species ? petState.species : 0}
            onChange={updateFieldValue("species")}
            displayEmpty
          >
            <MenuItem value={0}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Dog</MenuItem>
            <MenuItem value={2}>Cat</MenuItem>
          </Select>
        </FormControl>

        <div>
          <Button
            style={{ margin: 8 }}
            variant="contained"
            color="secondary"
            type="button"
            onClick={handleDelete}
          >
            {petState.id ? "Delete" : "Reset"}
          </Button>
          <Button
            style={{ margin: 8 }}
            color="primary"
            variant="contained"
            type="submit"
          >
            {petState.id ? "Update" : "Create"}
          </Button>

          {petState.uuid && (
            <>
              <Button
                onClick={() => setShowQRCode(true)}
                style={{ margin: 8 }}
                variant="contained"
                type="button"
              >
                Generate QR code
              </Button>
              {showQRCode && <QRCodeGen data={petState.uuid} />}
            </>
          )}
        </div>
      </form>
    </Card>
  )
}
export default Pet
