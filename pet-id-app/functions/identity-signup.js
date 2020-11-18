/* eslint-disable no-undef */
const fetch = require("isomorphic-fetch")
const graphqlURI = process.env.GATSBY_GRAPHQL_URI
const CREATE_USER = `
  mutation insert_user($input: users_insert_input!) {
    insert_users_one(object: $input) {
      name
      id
      email
      avatarId
      authId
      addressId
    }
  }
`

exports.handler = function (event, context, callback) {
  try {
    const { user } = JSON.parse(event.body)
    const { id: authId, email, user_metadata } = user
    const { full_name: name = "unknown" } = user_metadata

    fetch(graphqlURI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: CREATE_USER,
        variables: {
          input: {
            authId,
            email,
            name,
          },
        },
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.errors) {
          const [error] = data.errors
          const errorMessage = JSON.stringify({ message: error.message })
          console.log(errorMessage)
          callback(null, {
            statusCode: 500,
            body: errorMessage,
          })
        }

        callback(null, {
          statusCode: 200,
          body: JSON.stringify({ message: "Success Creating User" }),
        })
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
