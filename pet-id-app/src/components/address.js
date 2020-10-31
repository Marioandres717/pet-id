import React, { useReducer } from "react"
import { gql, useMutation } from "@apollo/client"

const CREATE_ADDRESS = gql`
  mutation insert_address($input: Addresses_insert_input!) {
    insert_Addresses_one(object: $input) {
      city
      country
      line_1
      id
      userId
      zip_or_postcode
      province_or_state
      other_address_details
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
  userId: "25",
}

const reducer = (state, action) => {
  switch (action.type) {
    case "updateFieldValue":
      return { ...state, [action.field]: action.value }

    case "reset":
    default:
      return INITIAL_STATE
  }
}

const inputStyle = { display: "block", margin: "0.5rem" }
const Address = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const [addAddress, { data }] = useMutation(CREATE_ADDRESS)

  const updateFieldValue = field => event => {
    dispatch({
      type: "updateFieldValue",
      field,
      value: event.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    addAddress({ variables: { input: state } })
    dispatch({
      type: "reset",
    })
  }

  console.log("data", data)
  return (
    <div style={{ display: "grid", gridColumns: "1fr 1fr" }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phone">Phone</label>
        <input
          style={inputStyle}
          type="text"
          name="phone"
          //   value={state.phone}
          //   onChange={updateFieldValue("phone")}
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

        <button style={{ padding: "1rem" }} type="submit">
          Create
        </button>
      </form>
      {data && <div>{data.insert_Addresses_one.id}</div>}
    </div>
  )
}

export default Address
