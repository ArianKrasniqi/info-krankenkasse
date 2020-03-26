import React from "react"

import InformationCard from "./InformationCard/InformationCard"
import Inputs from "./Inputs/Inputs"
import Button from "../../elements/Button/Button"
import Text from "../../elements/Text/Text"

import classes from "./ContactCompany.module.css"

const compare = props => {
  let location = props.location.split(", ")
  console.log(location)
  return (
    <div className={classes.Container}>
      <div className={classes.Form}>
        <h3>
          Jetzt Information und Offerte für die passende Krankenversicherung
          bestellen:
        </h3>
        <Text type="paragraph">Was ist Ihnen wichtig?</Text>
        <Inputs />
        <div className={classes.Bottom}>
          <Button type="red" style={{ width: "310px", marginRight: "0px" }}>
            OFFERTE ANFORDERN
          </Button>
          <Text
            type="smallParagraph"
            style={{ width: "310px", fontSize: "0.6em" }}
          >
            Mit dem Abschicken des Formulars akzeptieren Sie die
            Nutzungsbedingungen und bestätigen diese gelesen zu haben.
          </Text>
        </div>
      </div>
      <InformationCard
        name={props.name}
        shortname={props.shortName}
        location={props.location}
        insured={props.insured}
        refundPeriod={props.refundPeriod}
        solvecyRate={props.solvecyRate}
        administrativeExpenses={props.administrativeExpenses}
      />
    </div>
  )
}

export default compare
