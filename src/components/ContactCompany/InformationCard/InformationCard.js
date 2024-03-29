import React from "react"

import InfoRow from "./InfoRow/InfoRow"
import BusinessIcon from "@material-ui/icons/Business"
import PinDropIcon from "@material-ui/icons/PinDrop"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import PaymentIcon from "@material-ui/icons/Payment"
import TrendingUpIcon from "@material-ui/icons/TrendingUp"
import LocalAtmIcon from "@material-ui/icons/LocalAtm"
import classes from "./InformationCard.module.css"

const InformationCard = (props) => {
  let location = props.location.split(", ")
  return (
    <div className={classes.Information}>
      <h3 style={{ color: `${props.color}` }}>
        {props.shortname} Kontakt & Adresse
      </h3>

      <InfoRow title={props.name}>
        <BusinessIcon />
      </InfoRow>

      <InfoRow
        title="Standort"
        description={location.map((row) => {
          return (
            <span key={row}>
              {row}
              <br />
            </span>
          )
        })}
      >
        <PinDropIcon />
      </InfoRow>

      <InfoRow
        title="Versicherte"
        description={`${props.insured} in der Grundversicherung`}
      >
        <SupervisorAccountIcon />
      </InfoRow>

      <InfoRow
        title="Rückerstattungsdauer"
        description={`Ø ${props.refundPeriod} Tage`}
      >
        <PaymentIcon />
      </InfoRow>

      <InfoRow title="Solvenzquote" description={`${props.solvencyRate}`}>
        <TrendingUpIcon />
      </InfoRow>

      <InfoRow
        title="Verwaltungskosten"
        description={`${props.administrativeExpenses} CHF pro Kunde`}
      >
        <LocalAtmIcon />
      </InfoRow>
    </div>
  )
}

export default InformationCard
