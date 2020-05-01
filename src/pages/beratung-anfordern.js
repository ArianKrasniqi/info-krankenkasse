import React, { useState } from "react"
import { connect } from "react-redux"

import Layout from "../components/Layout/Layoutt"
import Text from "../elements/Text/Text"
import ContactForm from "../components/ContactForm/ContactForm"
import Message from "../elements/Message/Message"
import Spinner from "../elements/Spinner/Spinner"
import * as content from "../content/beratung-anfordern"

const BeratungAnfordern = (props) => {
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
      <div>
        <Text type="title">{lang.title}</Text>
        <Text type="paragraph">{lang.description}</Text>
        <div className="ContactContainer">
          <ContactForm
            type="contact"
            btnText="Senden"
            style={{ width: "70%" }}
            show={show}
            afterSubmitHandler={afterSubmitHandler}
            spinnerHandler={spinnerHandler}
            msgHandler={msgHandler}
          />

          <Message
            show={msg}
            lang={props.lang}
            msgHandler={msgHandler}
            // style={{ position: "absolute", marginTop: "160px" }}
          />
          <Spinner show={spinner} />
        </div>
        <Text type="subtitle">{lang.subtitle}</Text>

        <Text type="paragraph">{lang.content[0]}</Text>
        <Text type="paragraph">{lang.content[1]}</Text>
        <Text type="paragraph">{lang.content[2]}</Text>

        <Text type="subtitle">{lang.subtitle2}</Text>

        <Text type="paragraph">{lang.content2[0]}</Text>
        <Text type="paragraph">{lang.content2[1]}</Text>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  }
}

export default connect(mapStateToProps)(BeratungAnfordern)
