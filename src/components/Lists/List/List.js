import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"

import classes from "./List.module.css"

const List = props => {
  let lang = props.lang === "de" ? "" : props.lang + "/"
  return (
    <div className={classes.List}>
      <p className={classes.Letter}>{props.letter}</p>
      <ul>
        {props.data.map((data, index) => {
          let slug = props.slugs[index].split(".")
          slug = slug[0]
          return (
            <li key={`${data}-${index}`}>
              <Link to={`${lang}${props.prelink}${slug}`}>{data}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    lang: state.lang,
  }
}

export default connect(mapStateToProps)(List)
