import React from "react"

import BusinessIcon from "@material-ui/icons/Business"
import classes from "./informationCard.module.css"

const informationCard = props => {
  let location = props.location.split(", ")
  console.log(location)
  return (
    <div className={classes.Information}>
      <h3>{props.shortname} Kontakt & Adresse</h3>

      <BusinessIcon />
      <h5>{props.name}</h5>
      {location.map(row => {
        return <h6>{row}</h6>
      })}
      <h5>Versicherte</h5>
      <h5>{props.insured} in der Grundversicherung</h5>
      <h5>Rückerstattungsdauer</h5>
      <h5>Ø {props.refundPeriod} Tage</h5>
      <h5>Solvenzquote</h5>
      <h5>Ø {props.solvecyRate} Tage</h5>
      <h5>Verwaltungskosten</h5>
      <h5>{props.administrativeExpenses} CHF pro Kunde</h5>
    </div>
  )
}

export default informationCard
