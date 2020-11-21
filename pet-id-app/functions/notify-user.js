/* eslint-disable no-undef */
const fetch = require("isomorphic-fetch")
const push = require("web-push")
const graphqlURI = process.env.GATSBY_GRAPHQL_URI
const GET_USER_BROWSERS = `
  query getUserBrowsers($user_id: Int!) {
  user_browsers(where: {user_id: {_eq: $user_id}}) {
    id
    user_id
    browser_subscription_object
  }
}
`

exports.handler = function (event, context, callback) {
  try {
    const user = JSON.parse(event.body)

    fetch(graphqlURI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: GET_USER_BROWSERS,
        variables: {
          user_id: user.id,
        },
      }),
    })
      .then(res => res.json())
      .then(({ data }) => {
        if (data.errors) {
          const [error] = data.errors
          const errorMessage = JSON.stringify({ message: error.message })
          console.log(errorMessage)
          callback(null, {
            statusCode: 500,
            body: errorMessage,
          })
        }

        if (data.user_browsers.length > 0) {
          const sub = data.user_browsers[0].browser_subscription_object
          const vapidkeys = {
            publicKey:
              "BGueENX9LGhPRv_fmN3Rmb7bH3E48MQmGhMOKfqhtpBX-vixWkVO_XU63pd9pZUPH93_33riUeOwWGFYpbVaYYQ",
            privateKey: "_3Ab8ifmswbvdynegRW5CXhVJYbdaSxGGbtR15Rs1l4",
          }

          push.setVapidDetails(
            "mailto:test@code.co.uk",
            vapidkeys.publicKey,
            vapidkeys.privateKey
          )

          push.sendNotification(
            sub,
            "Your pet identification code was scanned!"
          )

          callback(null, {
            statusCode: 200,
            body: JSON.stringify({
              message: `Successfully Notified User ${user.email} - ${user.id}`,
            }),
          })
        } else {
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({
              message: `No notifications set by User ${user.email} - ${user.id}`,
            }),
          })
        }
      })
  } catch (err) {
    const errorMessage = JSON.stringify({
      message: "Error on serveless function",
    })

    console.log(errorMessage, err)
    return {
      statusCode: 500,
      body: JSON.stringify(`${errorMessage}: ${err}`),
    }
  }
}
