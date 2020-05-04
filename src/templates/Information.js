import React, { useState } from "react"
import { graphql } from "gatsby"
import { connect } from "react-redux"

import Layout from "../components/Layout/Layoutt"
import Text from "../elements/Text/Text"
import Compare from "../components/Compare/Compare"
import ContactForm from "../components/ContactForm/ContactForm"
import Message from "../elements/Message/Message"
import Spinner from "../elements/Spinner/Spinner"
import * as actionTypes from "../store/actions"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      headings {
        value
        depth
      }
    }
  }
`

const Information = (props) => {
  const [show, setShow] = useState(true)
  const [spinner, setSpinner] = useState(false)
  const [msg, setMsg] = useState(false)

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
      <Text type="title">{props.data.markdownRemark.frontmatter.title}</Text>

      {props.data.markdownRemark.headings.map((line, index) => {
        if (line.depth === 6) {
          return (
            <Text key={`${line.value.slice(0, 10)}-${index}`}>
              {line.value}
            </Text>
          )
        } else if (line.depth === 2) {
          return (
            <Text key={`${line.value.slice(0, 10)}-${index}`} type="subtitle">
              {line.value}
            </Text>
          )
        } else if (line.depth === 3) {
          return (
            <Text key={`${line.value.slice(0, 10)}-${index}`} type="listItem">
              {line.value}
            </Text>
          )
        } else if (line.depth === 1) {
          return line.value === "Form" ? (
            <Compare key={`${line.value}-${index}`} />
          ) : line.value === "Form2" ? (
            <div class="ContactContainer">
              <ContactForm
                key={`${line.value}-${index}`}
                show={true}
                show={show}
                afterSubmitHandler={afterSubmitHandler}
                spinnerHandler={spinnerHandler}
                msgHandler={msgHandler}
              />
              <Message show={msg} lang={props.lang} msgHandler={msgHandler} />
              <Spinner show={spinner} />
            </div>
          ) : null
        } else {
          return null
        }
      })}
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeLanguage: (lang) =>
      dispatch({ type: actionTypes.CHANGE_LANG, langPrefix: lang }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Information)
