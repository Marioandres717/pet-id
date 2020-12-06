import React, { Fragment, useEffect, useState } from "react"
import { gql, useMutation } from "@apollo/client"
import { Card, CardMedia } from "@material-ui/core"
import ImageIcon from "@material-ui/icons/Image"

const CREATE_IMAGE = gql`
  mutation insertImage($input: images_insert_input!) {
    insert_images_one(object: $input) {
      id
      large_image_url
      url
    }
  }
`

const UPDATE_IMAGE = gql`
  mutation updateImage($id: Int!, $input: images_set_input!) {
    update_images_by_pk(pk_columns: { id: $id }, _set: $input) {
      id
      url
      large_image_url
    }
  }
`

const DELETE_IMAGE = gql`
  mutation updateImage($id: Int!) {
    delete_images_by_pk(id: $id) {
      id
      large_image_url
      url
    }
  }
`

const INITIAL_STATE = {
  url: "",
  large_image_url: "",
}

const inputStyle = { display: "block", margin: "0.5rem" }

const Image = ({ image, updateEntity, entityId }) => {
  const [imageState, setImageState] = useState(image ? image : INITIAL_STATE)
  const [addImage, { data }] = useMutation(CREATE_IMAGE, {
    onError: e => console.error("Error", e),
  })
  const [updateImage] = useMutation(UPDATE_IMAGE, {
    onError: e => console.error("Error", e),
  })
  const [deleteImage] = useMutation(DELETE_IMAGE, {
    onError: e => console.error("Error", e),
  })

  useEffect(() => {
    if (data && !imageState.id) {
      const { id } = data.insert_images_one
      updateEntity({
        variables: {
          id: entityId,
          input: { avatarId: id },
        },
      })
      setImageState({ ...imageState, id })
    }
  }, [data, updateEntity, entityId, setImageState, imageState])

  const uploadFile = async event => {
    const files = event.target.files
    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset", "petidentification")

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/marioandres717/image/upload",
      {
        method: "POST",
        body: data,
      }
    )

    const file = await res.json()
    const url = file && file.secure_url
    const large_image_url =
      file && file.eager && file.eager[0] && file.eager[0].secure_url
    if (imageState.id) {
      updateImage({
        variables: {
          input: { url, large_image_url },
        },
      })
    } else {
      addImage({
        variables: {
          input: { url, large_image_url },
        },
      })
    }

    setImageState({
      url,
      large_image_url,
    })
  }

  const handleDelete = () => {
    deleteImage({
      variables: {
        id: imageState.id,
      },
    })
  }

  if (imageState.url) {
    return (
      <Card style={{ height: 255 }}>
        <CardMedia
          style={{ height: "100%" }}
          image={imageState.url}
          title="Profile Image"
        />
      </Card>
    )
  }

  return (
    <Fragment>
      <label htmlFor="file" style={{ margin: 8 }}>
        Image <ImageIcon color="primary" />
        <input
          style={inputStyle}
          type="file"
          name="file"
          onChange={uploadFile}
        />
      </label>
    </Fragment>
  )
}

export default Image
