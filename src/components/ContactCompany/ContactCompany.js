import React from "react"

import InformationCard from "./InformationCard/InformationCard"
import Inputs from "./Inputs/Inputs"
import Text from "../../elements/Text/Text"

import classes from "./ContactCompany.module.css"

const ContactCompany = (props) => {
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
        <Inputs name={props.name} />
        <div className={classes.Bottom}>
          {/* <Button type="red" style={{ width: "310px", marginRight: "0px" }}>
            OFFERTE ANFORDERN
          </Button> */}
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
        refundPeriod={props.refundPeriod}
        solvencyRate={props.solvencyRate}
        administrativeExpenses={props.administrativeExpenses}
      />
    </div>
  )
}

export default ContactCompany
