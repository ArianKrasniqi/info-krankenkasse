import React from "react"
import { connect } from "react-redux"

import Layout from "../components/Layout/Layout"
import Text from "../elements/Text/Text"
import ContactForm from "../components/ContactForm/ContactForm"
import RightCards from "../components/RightCards/RightCards"
import RightCard from "../elements/RightCard/RightCard"
import * as content from "../content/kontakt"

const Kontakt = props => {
  let lang =
    props.lang === "en"
      ? content.en
      : props.lang === "fr"
      ? content.fr
      : props.lang === "it"
      ? content.it
      : content.de
  return (
    <Layout>
      <div className="Contact">
        <div className="ContactLeft">
          <Text type="title">{lang.title}</Text>
          <Text type="paragraph">{lang.description}</Text>
          <ContactForm type="contact" btnText="Senden" />
          <Text type="paragraph">{lang.content[0]}</Text>
          <Text type="paragraph">{lang.content[1]}</Text>
          <Text type="paragraph">{lang.content[2]}</Text>
          <Text type="paragraph">{lang.content[3]}</Text>
        </div>
        <RightCards>
          <RightCard title="Prämienvergleich" buttonText="JETZT VERGLEICHEN">
            Jetzt kostenlos Prämien vergleichen
          </RightCard>

          <RightCard
            title="Krankenkassen Beratung"
            buttonText="BERATUNG ANFORDERN"
          >
            Sie wünschen sich eine Krankenkasse, die Ihren Bedürfnissen
            entspricht? Wir Beraten Sie gerne. Komplet kostenlos.
          </RightCard>
        </RightCards>
      </div>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    lang: state.lang,
  }
}

export default connect(mapStateToProps)(Kontakt)
