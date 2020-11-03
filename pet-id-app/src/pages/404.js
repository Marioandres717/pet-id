import React from "react"

const NotFoundPage = () => {
  const browser = typeof window !== "undefined" && window

  return (
    <>
      {browser && (
        <>
          <h1>404: Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </>
      )}
    </>
  )
}

export default NotFoundPage
