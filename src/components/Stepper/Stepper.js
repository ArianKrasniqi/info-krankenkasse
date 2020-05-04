import React from "react"

import classes from "./Stepper.module.css"

const Stepper = (props) => (
  <div
    className={[
      classes.Container,
      props.step === 1 ? "" : classes.ContainerAnime,
    ].join(" ")}
  >
    <div
      className={[
        classes.Circle,
        props.step === 1 ? "" : classes.CircleAnime,
      ].join(" ")}
    >
      <span
        className={[classes.One, props.step === 1 ? "" : classes.OneAnime].join(
          " "
        )}
      >
        1
      </span>
      <span
        className={[classes.Two, props.step === 1 ? "" : classes.TwoAnime].join(
          " "
        )}
      >
        2
      </span>
    </div>
    <span
      className={[
        classes.StaticTwo,
        props.step === 1 ? "" : classes.StaticTwoAnime,
      ].join(" ")}
    >
      2
    </span>
  </div>
)

export default Stepper
