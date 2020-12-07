import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import {
  CardHeader,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
  },
  media: {
    height: 0,
    paddingTop: "40%", // 16:9
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}))

export default function PetRead({ pet, disabled = false }) {
  const classes = useStyles()

  return (
    <Card variant="outlined" className={classes.root}>
      <CardHeader title={<Typography variant="h6">Pet info</Typography>} />
      <CardMedia
        className={classes.media}
        image={pet.avatar && pet.avatar.url}
        title="Paella dish"
      />
      <CardContent>
        <List aria-label="basic info fields">
          <ListItem button disabled={disabled}>
            <ListItemText primary="Name" />
            <Typography variant="body2">{pet.name}</Typography>
          </ListItem>
          <Divider />

          <ListItem button divider disabled={disabled}>
            <ListItemText primary="Description" />
            <Typography variant="body2">{pet.description}</Typography>
          </ListItem>

          <ListItem button divider disabled={disabled}>
            <ListItemText primary="Species" />
            <Typography variant="body2">{pet.species}</Typography>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  )
}
