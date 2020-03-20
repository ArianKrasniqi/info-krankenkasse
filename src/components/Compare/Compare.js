import React from "react"

import Text from "../../elements/Text/Text"
import Button from "../../elements/Button/Button"
import Input from "../../elements/Input/Input"
import CompareInputs from "./CompareInputs/CompareInputs"

import classes from "./Compare.module.css"

const compare = () => (
  <div className={classes.Compare}>
    <Text type="compareSubtitle">Krankenkassenvergleich 2020</Text>
    <Button type="white">Jetzt vergleichen</Button>
    <Text type="paragraph">
      Möchten Sie Prämien einsparen? Hier finden Sie alle Prämien für den
      Krankenkassen Wechsel
    </Text>

    <div className={classes.CompareForm} style={{ display: "block" }}>
      <div className={classes.Steps}></div>
      <Text type="formTitle">Krankenkassen Prämien 2020 vergleichen</Text>
      <div className={classes.FormInputs}>
        <Input
          type="inputFullWidth"
          id="age-compare"
          label="Aktuelle Krankenkasse"
          helperText="Some important helper text"
          options={[
            "Vorgeburt",
            "AMB",
            "Agrisano",
            "Aquilana",
            "Arcosana",
            "Assura",
            "Atupri",
            "Avanex",
            "Avenir",
            "Birchmeier",
            "CSS",
            "Compact",
            "Concordia",
            "ÖKK",
            "EGK",
            "EasySana",
            "Einsiedeln",
            "Flaachtal",
            "Galenos",
            "Glarner",
            "GroupeMutuel",
            "Helsana",
            "Ingenbohl",
            "Innova",
            "Intras",
            "KPT / CPT",
            "Klug",
            "Kmu",
            "Kolping",
            "Lumneziana",
            "LuzernerHinterland",
            "Philos",
            "Progrès",
            "Provita",
            "Rhenusana",
            "SLKK",
            "Sana24",
            "Sanagate",
            "Sanavals",
            "Sanitas",
            "Sansan",
            "Simplon",
            "Sodalis",
            "Steffisburg",
            "Stoffel",
            "Sumiswalder",
            "Supra",
            "Swica",
            "Sympany",
            "Turbenthal",
            "Visana",
            "Wädenswil",
          ]}
        />
        <Input
          id="postalcode-compare"
          label="PLZ"
          helperText="Important help"
        />
        <Input id="city-compare" label="Ort" helperText="Important help" />
        <Input
          type="selectInput"
          id="age-compare"
          label="Alersgruppe"
          helperText="Some important helper text"
          options={["0-18 Jahre", "19-25 Jahre", "ab 25 Jahre"]}
        />
        <Button type="red"> Jetzt Prämie vergleichen </Button>
      </div>
    </div>
  </div>
)

export default compare
