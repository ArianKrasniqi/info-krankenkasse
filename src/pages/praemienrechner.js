import React from "react"

import Layout from "../components/Layout/Layout"
import Text from "../elements/Text/Text"
import Compare from "../components/Compare/Compare"

export default () => (
  <Layout>
    <Text type="title">
      Prämienrechner: Krankenkasse vergleichen und wechseln
    </Text>
    <Text type="paragraph">
      Zahlen Sie eventuell zu viel für Ihre Krankenkasse? In der
      Grundversicherung bieten alle Schweizer Krankenversicherer dieselbe
      Leistung. Die Höhe der Prämien unterscheidet sich aber zum Teil enorm. Mit
      unserem Prämienrechner ermitteln Sie Ihr Sparpotenzial. Unkompliziert und
      mit wenigen Klicks können Sie mehrere Hundert Franken im Jahr sparen.
    </Text>
    <Compare />
    <Text type="paragraph">
      Prämienrechner nutzen und das Sparpotenzial für die Krankenkasse berechnen
    </Text>
    <Text type="paragraph">
      Unser Prämienrechner nutzt die vom Bundesamt für Gesundheit (BAG)
      genehmigten Prämien. Auf diese Weise erhalten Sie stets aktuelle Daten.
      Anders als beim Priminfo-Rechner des BAG können Sie über unseren
      Prämienrechner allerdings direkt eine unverbindliche Offerte anfordern.
      Das spart Zeit beim Krankenkassen-Vergleich.
    </Text>
    <Text type="paragraph">
      Ihre Vorteile mit dem Krankenkassen-Prämienrechner:{" "}
    </Text>

    <ul>
      <li>mit wenigen Klicks Sparpotenzial berechnen</li>
      <li>Daten basieren auf den BAG-genehmigten Prämien</li>
      <li>aktuelle Prämien von Krankenkassen an Ihrem Wohnkanton</li>
      <li>unabhängig, kostenlos und unverbindlich</li>
      <li>direkt Offerte anfordern</li>
    </ul>

    <Text type="paragraph">
      Günstige Krankenkasse finden: So funktioniert der Prämienrechner
    </Text>
    <Text type="paragraph">
      Möchten Sie herausfinden, wie günstig Ihre Krankenkasse im Vergleich mit
      anderen Versicherern ist? Oder tragen Sie sich bereits mit dem Gedanken,
      Ihre Krankenkasse zu wechseln? Dann suchen Sie mit unserem Prämienrechner
      zielgerichtet nach dem günstigsten Angebot.
    </Text>
    <Text type="paragraph">
      Wählen Sie zunächst Ihre aktuelle Krankenkasse aus und geben Sie Ihre
      Postleitzahl sowie Ihre Altersgruppe in den Prämienrechner ein. Durch die
      Angabe Ihres Wohnorts berücksichtigt der Prämienrechner nur
      Krankenversicherer, die auch in Ihrem Kanton vertreten sind.{" "}
    </Text>
    <Text type="paragraph">
      Im nächsten Schritt können Sie die Prämienbeiträge für verschiedene
      Versicherungsmodelle vergleichen. So sehen Sie sofort, wie sich die Wahl
      eines anderen Grundversicherungs-Modells auf Ihre Prämie auswirkt. Über
      die Auswahl der Jahresfranchise können Sie die Prämie der Krankenkasse
      weiterhin beeinflussen. Der Prämienrechner zeigt Ihnen zudem, wie viel Sie
      durch die Wahl einer anderen Krankenkasse insgesamt sparen können.
    </Text>
    <Text type="paragraph">
      Anschliessend können Sie direkt eine detaillierte Offerte anfordern. Geben
      Sie einfach an, welche Kriterien Ihnen bei der Auswahl Ihrer Krankenkasse
      besonders wichtig sind. Suchen Sie vor allem nach günstigen Prämien?
      Möchten Sie auch eine Zusatzversicherung abschliessen? Wünschen Sie freie
      Arztwahl oder eine Krankenkasse mit Familienrabatt? Haben Sie Ihre Auswahl
      getroffen, tragen Sie noch Ihre persönlichen Daten ein und schicken das
      Formular ab. Sie erhalten ein unverbindliches Angebot mit den vom BAG
      genehmigten Prämien 2020.
    </Text>
  </Layout>
)
