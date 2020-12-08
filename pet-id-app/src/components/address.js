import React, { useEffect, useReducer } from "react"
import { gql, useMutation } from "@apollo/client"
import {
  Button,
  Card,
  CardHeader,
  TextField,
  Typography,
} from "@material-ui/core"

const CREATE_ADDRESS = gql`
  mutation insertAddress($input: addresses_insert_input!) {
    insert_addresses_one(object: $input) {
      id
      city
      country
      line_1
      province_or_state
      zip_or_postcode
      phone
      userId
      other_address_details
    }
  }
`

const UPDATE_USER_ADDRESS_ID = gql`
  mutation updateUserAddress($id: Int!, $addressId: Int!) {
    update_users_by_pk(
      pk_columns: { id: $id }
      _set: { addressId: $addressId }
    ) {
      id
      address {
        id
      }
    }
  }
`

const UPDATE_ADDRESS = gql`
  mutation updateAddress($id: Int!, $input: addresses_set_input!) {
    update_addresses_by_pk(pk_columns: { id: $id }, _set: $input) {
      id
      country
      line_1
      city
      other_address_details
      province_or_state
      zip_or_postcode
    }
  }
`

const DELETE_ADDRESS = gql`
  mutation deleteAddress($id: Int!) {
    delete_addresses_by_pk(id: $id) {
      city
      country
      id
      other_address_details
      line_1
      phone
      province_or_state
      userId
      zip_or_postcode
    }
  }
`

const INITIAL_STATE = {
  country: "",
  line_1: "",
  city: "",
  province_or_state: "",
  zip_or_postcode: "",
  other_address_details: "",
  phone: "",
  userId: null,
}

const init = address => (address ? address : INITIAL_STATE)

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

const Address = ({ userId, address }) => {
  const [addressState, dispatch] = useReducer(
    reducer,
    address ? address : { ...INITIAL_STATE, userId },
    init
  )
  const [addAddress, { data, called, loading }] = useMutation(CREATE_ADDRESS, {
    onError: e => console.error("error", e),
  })
  const [updateUserAddressId] = useMutation(UPDATE_USER_ADDRESS_ID, {
    onError: e => console.error("error", e),
  })
  const [updateAddress] = useMutation(UPDATE_ADDRESS, {
    onError: e => console.error("error", e),
  })
  const [deleteAddress] = useMutation(DELETE_ADDRESS, {
    onError: e => console.error("error", e),
  })

  useEffect(() => {
    if (called && !loading && data) {
      const addressId = data.insert_addresses_one.id
      updateUserAddressId({
        variables: { id: userId, addressId },
      })
      dispatch({
        type: "updateFieldValue",
        field: "id",
        value: addressId,
      })
    }
  }, [called, data, loading, updateUserAddressId, userId])

  const updateFieldValue = field => event => {
    dispatch({
      type: "updateFieldValue",
      field,
      value: event.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (addressState.id) {
      // eslint-disable-next-line no-unused-vars
      const { __typename, ...addressFields } = addressState
      updateAddress({
        variables: { id: addressState.id, input: { ...addressFields, userId } },
      })
    } else {
      addAddress({ variables: { input: { ...addressState, userId } } })
    }
  }

  // eslint-disable-next-line no-unused-vars
  const handleDelete = event => {
    if (addressState.id) {
      deleteAddress({ variables: { id: addressState.id } })
    }
    dispatch({
      type: "reset",
    })
  }

  return (
    <Card>
      <CardHeader title={<Typography variant="h6">Contact info</Typography>} />
      <form onSubmit={handleSubmit}>
        <TextField
          id="phone"
          label="Phone"
          style={{ margin: 8 }}
          placeholder="Enter Phone"
          value={addressState.phone}
          fullWidth
          onChange={updateFieldValue("phone")}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="country"
          label="Country"
          style={{ margin: 8 }}
          placeholder="Enter Country"
          value={addressState.country}
          fullWidth
          onChange={updateFieldValue("country")}
          InputLabelProps={{
            shrink: true,
          }}
          error={addressState.country ? false : true}
          helperText={addressState.country ? null : "Required Field"}
        />

        <TextField
          id="line_1"
          label="Line 1"
          style={{ margin: 8 }}
          placeholder="Enter Line One"
          value={addressState.line_1}
          fullWidth
          onChange={updateFieldValue("line_1")}
          InputLabelProps={{
            shrink: true,
          }}
          error={addressState.line_1 ? false : true}
          helperText={addressState.line_1 ? null : "Required Field"}
        />

        <TextField
          id="city"
          label="City"
          style={{ margin: 8 }}
          placeholder="Enter City"
          value={addressState.city}
          fullWidth
          onChange={updateFieldValue("city")}
          InputLabelProps={{
            shrink: true,
          }}
          error={addressState.city ? false : true}
          helperText={addressState.city ? null : "Required Field"}
        />

        <TextField
          id="province_or_state"
          label="Province or State"
          style={{ margin: 8 }}
          placeholder="Enter province or state"
          value={addressState.province_or_state}
          fullWidth
          onChange={updateFieldValue("province_or_state")}
          InputLabelProps={{
            shrink: true,
          }}
          error={addressState.province_or_state ? false : true}
          helperText={addressState.province_or_state ? null : "Required Field"}
        />

        <TextField
          id="zip_or_postcode"
          label="Zip or Postcode"
          style={{ margin: 8 }}
          placeholder="Enter zip or postcode"
          value={addressState.zip_or_postcode}
          fullWidth
          onChange={updateFieldValue("zip_or_postcode")}
          InputLabelProps={{
            shrink: true,
          }}
          error={addressState.zip_or_postcode ? false : true}
          helperText={addressState.zip_or_postcode ? null : "Required Field"}
        />

        <TextField
          id="other_address_details"
          label="other_address_details"
          style={{ margin: 8 }}
          placeholder="Enter other_address_details"
          value={addressState.other_address_details}
          fullWidth
          onChange={updateFieldValue("other_address_details")}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Button
          style={{ margin: 8 }}
          variant="contained"
          color="secondary"
          type="button"
          onClick={handleDelete}
        >
          {addressState.id ? "Delete" : "Reset "}
        </Button>

        <Button
          style={{ margin: 8 }}
          variant="contained"
          color="primary"
          type="submit"
        >
          {addressState.id ? "Update" : "Create "}
        </Button>
      </form>
    </Card>
  )
}

export default Address
