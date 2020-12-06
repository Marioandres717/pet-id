import React from "react"
import { Link } from "gatsby"
import { useIdentityContext } from "react-netlify-identity"

const Nav = ({ showModal }) => {
  const { user, isLoggedIn, isConfirmedUser } = useIdentityContext()

  const name = user && user.user_metadata && user.user_metadata.full_name

  return (
    isLoggedIn &&
    isConfirmedUser && (
      <div className="dashboard-header">
        <nav>
          <Link to="/dashboard/profile" activeClassName="active">
            See Your Profile
          </Link>
          <Link to="/dashboard/pets" activeClassName="active">
            See Your pets
          </Link>
        </nav>
        <span>
          Logged in as {name}. <button onClick={showModal}>Log out</button>{" "}
        </span>
      </div>
    )
  )
}

export default Nav
