import React from "react"
import { Link } from "gatsby"
import { useIdentityContext } from "react-netlify-identity"

const Nav = ({ showModal }) => {
  const identity = useIdentityContext()
  const isLoggedIn = identity && identity.isLoggedIn

  const name =
    identity &&
    identity.user &&
    identity.user.user_metadata &&
    identity.user.user_metadata.full_name

  return (
    isLoggedIn && (
      <div className="dashboard-header">
        <nav>
          <Link to="/dashboard/home" activeClassName="active">
            See Your home
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
