import React from "react"

import Layout from "../components/Layout/Layout"
import Text from "../elements/Text/Text"
import ContactForm from "../components/ContactForm/ContactForm"
import RightCards from "../components/RightCards/RightCards"
import RightCard from "../elements/RightCard/RightCard"

export default () => (
  <Layout>
    <RightCards>
      <RightCard title="Prämienvergleich" buttonText="JETZT VERGLEICHEN">
        Jetzt kostenlos Prämien vergleichen
      </RightCard>

      <RightCard title="Krankenkassen Beratung" buttonText="BERATUNG ANFORDERN">
        Sie wünschen sich eine Krankenkasse, die Ihren Bedürfnissen entspricht?
        Wir Beraten Sie gerne. Komplet kostenlos.
      </RightCard>
    </RightCards>
    <div style={{ width: "70%" }}>
      <Text type="title">Kontakt</Text>
      <Text type="paragraph">
        Haben Sie noch Fragen zur Krankenversicherung? Wünschen Sie eine
        weitergehende Beratung zur Grundversicherung oder suchen Sie nach
        Zusatzversicherungen, die zu Ihren Bedürfnissen passen? Wir beraten Sie
        gerne kostenlos und unverbindlich. Füllen Sie einfach das unten stehende
        Kontaktformular aus und wir werden uns umgehend bei Ihnen melden.
      </Text>
      <ContactForm type="contact" btnText="Senden" />
      <Text type="paragraph">
        Unser Prämienrechner erlaubt einen umfassenden Versicherungsvergleich
        und Sie können sofort eine unverbindliche Offerte einholen. Manchmal
        bleiben aber noch Fragen offen, die sich am besten im persönlichen
        Kontakt klären lassen. Wir stehen Ihnen gerne zur Verfügung.
      </Text>
      <Text type="paragraph">
        Damit wir direkt Kontakt zu Ihnen aufnehmen können, bitten wir Sie, alle
        persönlichen Angaben im Kontaktformular korrekt und vollständig
        auszufüllen. Für genaue Auskünfte geben Sie bitte auch Ihre aktuelle
        Krankenkasse an. Beschreiben Sie Ihr Anliegen so konkret und detailliert
        wie möglich. So können wir gezielt auf Ihre persönlichen Bedürfnisse
        eingehen und Ihnen eine individuell abgestimmte Empfehlung aussprechen.
      </Text>
      <Text type="paragraph">
        Je nach Auslastung erhalten Sie innerhalb weniger Stunden eine Antwort.
        Holen Sie gleich Auskünfte zu Ihrer Krankenkasse ein und erfahren Sie,
        wie Sie Prämien sparen können. Informieren Sie sich über alternative
        Modelle der Grundversicherung und sinnvolle Zusatzversicherungen. Wir
        helfen Ihnen, den optimalen Versicherungsschutz zu finden.
      </Text>

      <Text type="paragraph">
        Alternativ zum Kontaktformular erreichen Sie uns auch über die
        E-Mailadresse info(at)krankenkassenadmin.ch. Vergessen Sie nicht, Ihre
        Kontaktdaten und Ihre Telefonnummer anzugeben, damit wir uns direkt bei
        Ihnen melden können.
      </Text>
    </div>
  </Layout>
)
