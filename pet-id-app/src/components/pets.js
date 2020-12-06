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
import Breadcrumbs from "./breadcrumb"

const Pets = ({ pets = [] }) => {
  const [selectedPet, setSelectedPet] = useState(null)

  const onPetSelected = pet => () => {
    // eslint-disable-next-line no-unused-vars
    const { __typename, ...petFields } = pet
    setSelectedPet(petFields)
  }

  return (
    <Paper>
      <Breadcrumbs
        crumbs={[
          {
            path: "/dashboard/pets",
            title: "Pets",
            callback: () => setSelectedPet(null),
          },
          {
            path: null,
            title: "Pet",
            callback: null,
          },
        ]}
      />

      {!selectedPet && (
        <List aria-label="pet list">
          {pets.map(({ pet }, index) => (
            <ListItem
              key={pet.id}
              button
              divider={index !== pets.length - 1}
              onClick={onPetSelected(pet)}
            >
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
      )}

      {selectedPet && <Pet pet={selectedPet} />}
    </Paper>
  )
}

export default Pets
