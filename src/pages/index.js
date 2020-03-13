import React from "react"

import Layout from "../components/Layout/Layout"
import Cover from "../components/Cover/Cover"
import Text from "../elements/Text/Text"
import Compare from "../components/Compare/Compare"
import SideForm from "../components/SideForm/SideForm"
import ContactInfo from "../components/ContactInfo/ContactInfo"

import classes from "./test.module.css"

export default () => (
  <Layout>
    <Cover></Cover>
    <Text type="title">
      Aktuelle Krankenkassenprämien für 2020: Machen Sie jetzt den
      Krankenkassenvergleich
    </Text>
    <Text type="paragraph">
      Seit 1996 besteht in der Schweiz Krankenkassenpflicht. Jeder Einwohner der
      Schweiz muss eine obligatorische Krankenpflegeversicherung abschliessen.
      Dabei haben Sie die Auswahl aus zahlreichen verschiedenen Versicherern.
      Die Leistungen der Grundversicherung sind gesetzlich vorgegeben, die
      Prämien der einzelnen Krankenkassen unterscheiden sich jedoch stark. Zudem
      sind die Krankenkassenprämien auch 2020 wieder gestiegen. Unser
      Krankenkassenvergleich zeigt Ihnen, ob sich der Krankenkassenwechsel
      lohnt.
    </Text>
    <Text type="paragraph">
      Vergleichen Sie jetzt die Prämien Ihrer Krankenkasse und sparen Sie
      mehrere Hundert Schweizer Franken im Jahr.
    </Text>
    <Compare />
    {/* <div className={classes.Compare}></div> */}
    <SideForm />
    <Text type="subtitle">
      Die obligatorische Grundversicherung in der Schweiz
    </Text>
    <Text type="paragraph">
      Das Schweizer Krankenversicherungsgesetz (KVG) sieht vor, dass Sie eine
      obligatorische Krankenpflegeversicherung abschliessen müssen. Zuzügler
      müssen innerhalb von drei Monaten nach ihrem Umzug eine Krankenkasse
      auswählen. Bei welcher Krankenkasse Sie sich versichern lassen, steht
      Ihnen frei. Einzige Voraussetzung: Die Krankenversicherung muss in Ihrem
      Wohnkanton aktiv sein.
    </Text>
    <Text type="paragraph">
      Die sogenannte Grundversicherung deckt die grundlegende medizinische
      Versorgung im Krankheitsfall. Bei Krankheit, Unfall oder Mutterschaft
      übernimmt die Krankenkasse die Kosten für notwendige Behandlungen und
      Medikamente. Patienten gehen zunächst in Vorleistung und erhalten das Geld
      für Kassenleistungen anschliessend erstattet.
    </Text>
    <Text type="subtitle">Gleiche Leistung, unterschiedlich hohe Prämien</Text>
    <Text type="paragraph">
      Welche Leistungen die Grundversicherung abdeckt, regelt das KVG. Die Höhe
      der Prämien bestimmt dagegen jede Krankenkasse selbst. Die Beitragshöhe
      hängt von vielen verschiedenen Faktoren ab und unterscheidet sich zum
      Beispiel je nach Kanton und Prämienregion. Alter, Einkommen und
      Familienstand beeinflussen die Prämienhöhe ebenfalls.
    </Text>
    <Text type="paragraph">
      Jedes Jahr im Herbst legen die Krankenkassen die Prämien für das kommende
      Jahr fest. Das Bundesamt für Gesundheit (BAG) muss die Prämien bestätigen
      und veröffentlicht die neuen Beiträge bis zum 24. September. Zu Beginn
      2020 sind die Krankenkassenprämien wieder einmal gestiegen. Im
      Durchschnitt zahlt jeder Versicherte 1,2 Prozent mehr für die mittlere
      Prämie.
    </Text>
    <Text type="subtitle">
      Lohnt sich der Krankenkassenwechsel? Machen Sie den
      Krankenkassenvergleich!
    </Text>
    <Text type="paragraph">
      Für das kommende Jahr werden abermals steigende Prämien erwartet. Bis Ende
      Oktober muss Ihre Krankenversicherung Sie über die neue Beitragshöhe
      informieren. Spätestens dann lohnt es sich, den Krankenkassenvergleich zu
      machen und nach einer günstigeren Krankenkasse zu suchen. Mit einem
      Krankenkassenwechsel zu einem günstigeren Anbieter können Sie mehrere
      Hundert oder sogar Tausend Schweizer Franken sparen - bei gleicher
      Leistung.
    </Text>
    <Text type="paragraph">
      Hat Ihre Krankenkasse eine Prämienerhöhung angekündigt, können Sie bis zum
      30. November des Jahres kündigen. Die Kündigung tritt dann zum 31.
      Dezember in Kraft, ab dem 1. Januar gilt Ihr neuer Krankenkassenvertrag.
      Mit unserem Krankenkassenvergleich finden Sie heraus, ob sich der Wechsel
      für Sie lohnt.
    </Text>
    <Text type="subtitle">Die freiwillige Zusatzversicherung</Text>
    <Text type="paragraph">
      Die obligatorische Krankenpflegeversicherung deckt nicht alle
      Behandlungskosten ab. Aus diesem Grund haben sich vier von fünf Schweizern
      für eine freiwillige Zusatzversicherung entschieden. Sie haben die Wahl
      zwischen ambulanten Zusatzversicherungen, Spitalzusatzversicherungen und
      Zahnzusatzversicherungen. Neben den Prämien unterscheiden sich in der
      Zusatzversicherung auch die Leistungen enorm. Machen Sie den
      Krankenkassenvergleich und finden Sie eine Absicherung, die zu Ihnen
      passt.
    </Text>
    <ContactInfo />
  </Layout>
)
