import React, { useReducer } from "react"

const INITIAL_STATE = {
  country: "",
  line_1: "",
  city: "",
  province_or_state: "",
  zip_or_postcode: "",
  other_address_details: "",
  userId: "",
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

  const updateFieldValue = field => event => {
    dispatch({
      type: "updateFieldValue",
      field,
      value: event.target.value,
    })
  }

  return (
    <form>
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
    </form>
  )
}

export default Address
