// @TODO add validation to fields

import React, { useEffect, useReducer } from "react"
import { gql, useMutation } from "@apollo/client"

const CREATE_ADDRESS = gql`
  mutation insertAddress(
    $id: Int!
    $phone: String!
    $input: Addresses_insert_input!
  ) {
    insert_Addresses_one(object: $input) {
      id
      city
      country
      line_1
      userId
      zip_or_postcode
      province_or_state
      other_address_details
    }

    update_users_by_pk(pk_columns: { id: $id }, _set: { phone: $phone }) {
      id
      phone
    }
  }
`

const UPDATE_USER_ADDRESS_ID = gql`
  mutation updateAddress($id: Int!, $addressId: Int!) {
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

const inputStyle = { display: "block", margin: "0.5rem" }

const Address = ({ userId, address }) => {
  const [state, dispatch] = useReducer(
    reducer,
    address ? address : INITIAL_STATE,
    init
  )
  const [addAddress, { data, called, loading }] = useMutation(CREATE_ADDRESS, {
    onError: e => console.error("error", e),
  })
  const [updateUserAddressId] = useMutation(UPDATE_USER_ADDRESS_ID, {
    onError: e => console.error("error", e),
  })

  useEffect(() => {
    if (called && !loading && data) {
      updateUserAddressId({
        variables: { id: userId, addressId: data.insert_Addresses_one.id },
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
    const { phone, ...rest } = { ...state, userId }
    addAddress({ variables: { id: userId, phone: phone, input: rest } })
    dispatch({
      type: "reset",
      payload: state,
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phone">Phone</label>
        <input
          style={inputStyle}
          type="text"
          name="phone"
          value={state.phone}
          onChange={updateFieldValue("phone")}
        />
        <label htmlFor="country">country</label>
        <input
          style={inputStyle}
          type="text"
          name="country"
          value={state.country}
          onChange={updateFieldValue("country")}
        />

        <label htmlFor="line_1">Address Line 1</label>
        <input
          style={inputStyle}
          type="text"
          name="line_1"
          value={state.line_1}
          onChange={updateFieldValue("line_1")}
        />

        <label htmlFor="city">City</label>
        <input
          style={inputStyle}
          type="text"
          name="city"
          value={state.city}
          onChange={updateFieldValue("city")}
        />

        <label htmlFor="province_or_state">
          State/Province/Region <small>(if appropriate)</small>
        </label>
        <input
          style={inputStyle}
          type="text"
          name="province_or_state"
          value={state.province_or_state}
          onChange={updateFieldValue("province_or_state")}
        />

        <label htmlFor="zip_or_postcode">Postal Code/ZIP</label>
        <input
          style={inputStyle}
          type="text"
          name="zip_or_postcode"
          value={state.zip_or_postcode}
          onChange={updateFieldValue("zip_or_postcode")}
        />

        <label htmlFor="other_address_details">Extra Address Details</label>
        <input
          style={inputStyle}
          type="text"
          name="other_address_details"
          value={state.other_address_details}
          onChange={updateFieldValue("other_address_details")}
        />

        <button style={{ padding: "0.5rem" }} type="submit">
          Create
        </button>
      </form>
      {data && <div>{data.insert_Addresses_one.id}</div>}
    </div>
  )
}

export default Address
