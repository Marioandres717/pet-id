import React, { useContext } from "react"
import { gql, useMutation } from "@apollo/client"

const INSERT_BROWSER_PUSH_SUBSCRIPTION = gql`
  mutation insertUserBrowser($input: user_browsers_insert_input!) {
    insert_user_browsers_one(object: $input) {
      id
      user_id
      browser_subscription_object
    }
  }
`

const Subscription = ({ user }) => {
  const [addBrowserSubscription, { loading, error, data }] = useMutation(
    INSERT_BROWSER_PUSH_SUBSCRIPTION,
    {
      onError: e => console.error(e),
    }
  )
  const subscribe = async () => {
    let sw = await navigator.serviceWorker.ready
    let push = await sw.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        "BGueENX9LGhPRv_fmN3Rmb7bH3E48MQmGhMOKfqhtpBX-vixWkVO_XU63pd9pZUPH93_33riUeOwWGFYpbVaYYQ",
    })
    console.log(JSON.stringify(push))
    addBrowserSubscription({
      variables: {
        input: { user_id: user.id, browser_subscription_object: push },
      },
    })
  }

  return <button onClick={subscribe}>Subscribe</button>
}

export default Subscription
