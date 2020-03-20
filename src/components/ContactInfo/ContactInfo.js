import React from "react"

import Text from "../../elements/Text/Text"
import Links from "./Links/Links"
import Link from "../../elements/Link/Link"

import classes from "./ContactInfo.module.css"

const cantonInfo = () => (
  <div className={classes.ContactInfo}>
    <Links />
    <Text type="sideformSubtitle">
      Jetzt Krankenkassenprämien 2020 vergleichen und Krankenkassenwechsel
    </Text>
    <Text type="paragraph">
      Unser Krankenkassenvergleich nutzt die Priminfo Daten des BAG. So sind
      alle Informationen stets top-aktuell. Ganz unkompliziert berechnen Sie die
      aktuellen Krankenkassenprämien und holen direkt eine Offerte Ihrer
      bevorzugten Krankenkasse ein.
    </Text>
    <Link to="/kontakt" type="bottomLink">
      Schreiben Sie uns und Sie erhalten eine Rückmeldung am selben Tag
    </Link>
  </div>
)

export default cantonInfo
