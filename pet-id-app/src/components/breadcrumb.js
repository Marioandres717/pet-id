import React from "react"
import Typography from "@material-ui/core/Typography"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import { Link } from "gatsby"

const handleClick = callback => event => {
  event.preventDefault()
  callback()
}

export default function SimpleBreadcrumbs({ crumbs = [] }) {
  return (
    <Breadcrumbs style={{ margin: 8 }} aria-label="breadcrumb">
      {crumbs.map((crumb, index) =>
        index === crumbs.length - 1 ? (
          <Typography key={crumb.title} color="textPrimary">
            {crumb.title}
          </Typography>
        ) : (
          <Link
            key={crumb.title}
            color="inherit"
            to={crumb.path}
            onClick={handleClick(crumb.callback)}
          >
            {crumb.title}
          </Link>
        )
      )}
    </Breadcrumbs>
  )
}
