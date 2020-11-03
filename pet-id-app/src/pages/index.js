import React from "react"
import { Link } from "gatsby"

const Index = () => {
  return (
    <>
      <h1>This App rules!</h1>
      Log in to find out why
      <Link to="/dashboard"> Go to the dashboard</Link>
    </>
  )
}
export default Index
