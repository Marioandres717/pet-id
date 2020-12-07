import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import {
  Avatar,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}))

export default function UserRead({ user, disabled = false }) {
  const classes = useStyles()

  return (
    <Card variant="outlined" className={classes.root}>
      <CardHeader title={<Typography variant="h6">Basic info</Typography>} />
      <CardContent>
        <List aria-label="basic info fields">
          <ListItem button disabled={disabled}>
            <ListItemText primary="Photo" />
            <Avatar
              alt="user-name"
              aria-label="user avatar"
              className={classes.avatar}
              src={user.avatar && user.avatar.url}
            />
          </ListItem>
          <Divider />

          <ListItem button divider disabled={disabled}>
            <ListItemText primary="Name" />
            <Typography variant="body2">{user.name}</Typography>
          </ListItem>

          <ListItem button disabled={disabled}>
            <ListItemText primary="Email" />
            <Typography variant="body2">{user.email}</Typography>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  )
}
