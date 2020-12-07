import React, { useState } from "react"
import {
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
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

  const PetItem = ({ pet = undefined, index = 0 }) =>
    pet && (
      <ListItem
        button
        divider={index !== pets.length - 1}
        onClick={onPetSelected(pet)}
      >
        <ListItemIcon>
          <Avatar
            alt={pet.name}
            aria-label={pet.name}
            src={pet.avatar ? pet.avatar.url : null}
          />
        </ListItemIcon>
        <ListItemText primary={pet.name} />
      </ListItem>
    )

  const CreatePetItem = () => (
    <ListItem button onClick={onPetSelected({})}>
      <ListItemIcon>
        <Avatar alt="Create Pet" aria-label="Create Pet" src={null} />
      </ListItemIcon>
      <ListItemText primary="Create Pet" />
    </ListItem>
  )

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
          <Typography style={{ margin: 8 }} variant="h6">
            Pet List
          </Typography>
          {pets.map(({ pet }, index) => (
            <PetItem key={pet.id} pet={pet} index={index} />
          ))}

          <CreatePetItem />
        </List>
      )}

      {selectedPet && <Pet pet={selectedPet} setSelectedPet={setSelectedPet} />}
    </Paper>
  )
}

export default Pets
