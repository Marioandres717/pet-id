import React from "react"
import QRCode from "qrcode.react"

const QRCodeGen = ({ data }) => (
  <QRCode
    style={{ display: "block", margin: 8 }}
    // eslint-disable-next-line no-undef
    value={`${process.env.GATSBY_NETLIFY_URL}/app/${data}`}
  />
)

export default QRCodeGen
