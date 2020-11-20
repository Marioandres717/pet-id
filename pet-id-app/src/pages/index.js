import React from "react"
import { Link } from "gatsby"

const Index = () => {
  const subscribe = async () => {
    let sw = await navigator.serviceWorker.ready
    let push = await sw.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        "BGueENX9LGhPRv_fmN3Rmb7bH3E48MQmGhMOKfqhtpBX-vixWkVO_XU63pd9pZUPH93_33riUeOwWGFYpbVaYYQ",
    })
    console.log(JSON.stringify(push))
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>This App rules!</h1>
      Log in to find out why
      <button onClick={subscribe}>Subscribe</button>
      <Link to="/dashboard"> Go to the dashboard</Link>
    </div>
  )
}
export default Index
