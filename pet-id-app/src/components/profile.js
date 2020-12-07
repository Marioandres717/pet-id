import React from "react"
import Address from "./address"
import User from "./user"

const Profile = ({ user = {} }) => {
  return (
    <>
      <User user={user} />
      <Address userId={user.id} address={user.address} />
    </>
  )
}
export default Profile
