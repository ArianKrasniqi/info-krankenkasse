import React from "react"

import Layout from "../components/Layout/Layout"
import Text from "../elements/Text/Text"
import ContactForm from "../components/ContactForm/ContactForm"

export default () => (
  <Layout>
    <div>
      <Text type="title">
        Persönliche Beratung für alle Fragen rund um die Krankenkasse
      </Text>
      <Text type="paragraph">
        Haben Sie Ihren Wohnsitz in der Schweiz, sind Sie dazu verpflichtet,
        eine Schweizer Krankenversicherung abzuschliessen. Es steht eine grosse
        Anzahl an Anbietern zur Wahl, einzige Voraussetzung: Die Krankenkasse
        muss in Ihrem Wohnkanton aktiv sein. Sind Sie sich noch unsicher, für
        welche Krankenversicherung Sie sich entscheiden sollen oder möchten Sie
        Ihre Krankenkasse wechseln, erhalten Sie bei uns kostenlose und
        professionelle Beratung
      </Text>

      <ContactForm type="contact" btnText="Senden" style={{ width: "70%" }} />

      <Text type="subtitle">Welche Krankenkasse passt zu Ihnen?</Text>

      <Text type="paragraph">
        Das Krankenversicherungsgesetz (KVG) der Schweiz verpflichtet alle
        Krankenkassen, in der Grundversicherung gleiche Leistungen anzubieten.
        Die Höhe der Versicherungsprämie dürfen die Kassen jedoch relativ frei
        festlegen. In der Grundversicherung besteht dadurch enormes
        Sparpotenzial. Schon durch den Wechsel in ein anderes
        Versicherungsmodell lassen sich mehrere Hundert Franken pro Jahr sparen.
        Wie Höhe der Krankenkassenprämie können Sie ausserdem durch die Wahl der
        Jahresfranchise beeinflussen. Wir erklären Ihnen gerne, worauf Sie dabei
        achten müssen
      </Text>
      <Text type="paragraph">
        Eventuell lohnt es sich für Sie sogar, komplett zu einer anderen
        Krankenkasse zu wechseln. Machen Sie den Vergleich mit unserem
        Prämienrechner und finden Sie heraus, wie viel Sie durch einen Wechsel
        sparen können. Haben Sie noch Fragen zur Kündigung Ihrer
        Krankenversicherung oder zu einem spezifischen Anbieter, helfen wir
        Ihnen ebenfalls weiter
      </Text>
      <Text type="paragraph">
        Grosse Leistungsunterschiede gibt es im Bereich der Zusatzversicherung.
        Zusatzversicherungen schliessen Versicherungslücken der
        Grundversicherung. Doch nicht jede Zusatzversicherung ist sinnvoll oder
        eignet sich für Ihre Bedürfnisse. Im persönlichen Gespräch zeigen wir
        Ihnen, worauf Sie beim Vergleich von Zusatzversicherungen achten müssen
        und wie Sie eine passende Krankenversicherung finden
      </Text>

      <Text type="subtitle">
        Kompetente Beratung zur Krankenkasse durch Cicero-zertifizierte Experten
      </Text>

      <Text type="paragraph">
        Unsere Berater und Beraterinnen sind mit dem Cicero Gütesiegel für
        kompetente Beratung in Versicherungsfragen ausgezeichnet. Sie können
        sich darauf verlassen, dass sich unsere Experten regelmässig
        weiterbilden und optimal auf Ihre Fragen eingehen können
      </Text>
      <Text type="paragraph">
        Haben Sie Fragen zur Krankenkasse und wünschen eine persönliche
        Beratung, füllen Sie einfach das unten stehende Formular aus. Wir rufen
        Sie von Montag bis Freitag, in der Zeit von 08:00 bis 20:00 Uhr zurück.
      </Text>
    </div>
  </Layout>
)
