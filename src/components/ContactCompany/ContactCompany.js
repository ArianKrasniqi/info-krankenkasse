import React from "react"

import InformationCard from "./InformationCard/InformationCard"
import Inputs from "./Inputs/Inputs"
import Text from "../../elements/Text/Text"

import classes from "./ContactCompany.module.css"

const ContactCompany = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Form}>
        <h3 style={{ color: `${props.color}` }}>
          Jetzt Information und Offerte für die passende Krankenversicherung
          bestellen:
        </h3>
        <Text type="paragraph" style={{ color: `${props.color}` }}>
          Was ist Ihnen wichtig?
        </Text>
        <Inputs name={props.name} color={props.color} />
        <div className={classes.Bottom}>
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
        shortname={props.shortname}
        location={props.location}
        insured={props.insured}
        color={props.color}
        refundPeriod={props.refundPeriod}
        solvencyRate={props.solvencyRate}
        administrativeExpenses={props.administrativeExpenses}
      />
    </div>
  )
}

export default ContactCompany
