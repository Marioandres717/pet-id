import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import {
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 275,
  },
}))

export default function AddressRead({ address, disabled = false }) {
  const classes = useStyles()

  return (
    <Card variant="outlined" className={classes.root}>
      <CardHeader title={<Typography variant="h6">Address info</Typography>} />
      <CardContent>
        <List aria-label="Address info fields">
          <ListItem button disabled={disabled}>
            <ListItemText primary="Phone" />
            <Typography variant="body2">{address.phone}</Typography>
          </ListItem>
          <Divider />

          <ListItem button divider disabled={disabled}>
            <ListItemText primary="Country" />
            <Typography variant="body2">{address.country}</Typography>
          </ListItem>

          <ListItem button divider disabled={disabled}>
            <ListItemText primary="Line" />
            <Typography variant="body2">{address.line_1}</Typography>
          </ListItem>

          <ListItem button divider disabled={disabled}>
            <ListItemText primary="City" />
            <Typography variant="body2">{address.city}</Typography>
          </ListItem>

          <ListItem button divider disabled={disabled}>
            <ListItemText primary="Province or State" />
            <Typography variant="body2">{address.province_or_state}</Typography>
          </ListItem>

          <ListItem button divider disabled={disabled}>
            <ListItemText primary="Postal Code/ZIP" />
            <Typography variant="body2">{address.zip_or_postcode}</Typography>
          </ListItem>

          <ListItem button disabled={disabled}>
            <ListItemText primary="Other Address Details" />
            <Typography variant="body2">FOOBAR</Typography>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  )
}
