import React, { useState } from "react"
import {
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@material-ui/core"

import Pet from "./pet"

const Pets = ({ pets = [{ name: "tata" }] }) => {
  const [selectedPet, setSelectedPet] = useState(null)

  if (selectedPet) {
    const { __typename, ...pet } = selectedPet
    return <Pet pet={pet} />
  }

  const onPetSelected = pet => () => {
    setSelectedPet(pet)
  }

  return (
    <Paper>
      <List aria-label="pet list">
        {pets.map(({ pet }) => (
          <ListItem key={pet.id} button onClick={onPetSelected(pet)}>
            <ListItemIcon>
              <Avatar
                alt={pet.name}
                aria-label="pet avatar"
                src={pet.avatar ? pet.avatar.url : null}
              />
            </ListItemIcon>
            <ListItemText primary={pet.name} />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default Pets
