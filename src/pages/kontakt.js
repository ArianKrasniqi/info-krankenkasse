import React, { useState } from "react"
import { connect } from "react-redux"

import Layout from "../components/Layout/Layoutt"
import Text from "../elements/Text/Text"
import ContactForm from "../components/ContactForm/ContactForm"
import RightCards from "../components/RightCards/RightCards"
import RightCard from "../elements/RightCard/RightCard"
import Message from "../elements/Message/Message"
import Spinner from "../elements/Spinner/Spinner"
import * as content from "../content/kontakt"

const Kontakt = (props) => {
  const [show, setShow] = useState(true)
  const [spinner, setSpinner] = useState(false)
  const [msg, setMsg] = useState(false)

  let lang =
    props.lang === "en"
      ? content.en
      : props.lang === "fr"
      ? content.fr
      : props.lang === "it"
      ? content.it
      : content.de

  const afterSubmitHandler = () => {
    setShow(false)
  }
  const spinnerHandler = (value) => {
    setSpinner(value)
  }
  const msgHandler = (value) => {
    setMsg(value)
    if (!value) {
      setShow(true)
    }
  }
  return (
    <Layout>
      <div className="Contact">
        <div className="ContactLeft">
          <Text type="title">{lang.title}</Text>
          <Text type="paragraph">{lang.description}</Text>
          <div className="ContactContainer">
            <ContactForm
              type="contact"
              btnText="Senden"
              show={show}
              afterSubmitHandler={afterSubmitHandler}
              spinnerHandler={spinnerHandler}
              msgHandler={msgHandler}
            />
            <Message show={msg} lang={props.lang} msgHandler={msgHandler} />
            <Spinner show={spinner} />
          </div>
          <Text type="paragraph">{lang.content[0]}</Text>
          <Text type="paragraph">{lang.content[1]}</Text>
          <Text type="paragraph">{lang.content[2]}</Text>
          <Text type="paragraph">{lang.content[3]}</Text>
        </div>
        <RightCards>
          <RightCard title={lang.card1.title} buttonText={lang.card1.btnText}>
            {lang.card1.description}
          </RightCard>

          <RightCard title={lang.card2.title} buttonText={lang.card2.btnText}>
            {lang.card2.description}
          </RightCard>
        </RightCards>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  }
}

export default connect(mapStateToProps)(Kontakt)
