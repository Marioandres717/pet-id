import React from "react"
import QRCode from "qrcode.react"
import { Paper } from "@material-ui/core"

const QRCodeGen = ({ data }) => (
  <Paper>
    <QRCode
      style={{ display: "block", margin: 8 }}
      // eslint-disable-next-line no-undef
      value={`${process.env.GATSBY_NETLIFY_URL}app/${data}`}
    />
  </Paper>
)

export default QRCodeGen
