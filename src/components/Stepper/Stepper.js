import React from "react"

import classes from "./Stepper.module.css"

const Stepper = (props) => (
  <div
    class={[
      classes.Container,
      props.step === 1 ? "" : classes.ContainerAnime,
    ].join(" ")}
  >
    <div
      class={[classes.Circle, props.step === 1 ? "" : classes.CircleAnime].join(
        " "
      )}
    >
      <span
        class={[classes.One, props.step === 1 ? "" : classes.OneAnime].join(
          " "
        )}
      >
        1
      </span>
      <span
        class={[classes.Two, props.step === 1 ? "" : classes.TwoAnime].join(
          " "
        )}
      >
        2
      </span>
    </div>
    <span
      class={[
        classes.StaticTwo,
        props.step === 1 ? "" : classes.StaticTwoAnime,
      ].join(" ")}
    >
      2
    </span>
  </div>
)

export default Stepper
