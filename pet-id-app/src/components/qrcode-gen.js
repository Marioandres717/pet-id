import React from "react"
import QRCode from "qrcode.react"

const QRCodeGen = ({ data }) => (
  // eslint-disable-next-line no-undef
  <QRCode value={`${process.env.GATSBY_NETLIFY_URL}/app/${data}`} />
)

export default QRCodeGen
