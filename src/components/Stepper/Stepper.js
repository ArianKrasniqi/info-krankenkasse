import React from "react"

import classes from "./Stepper.module.css"

const Stepper = (props) => {
  return (
    <div
      class={
        props.step === 1
          ? classes.Container
          : [classes.Container, classes.ContainerAnime].join(" ")
      }
    >
      <div
        class={
          props.step === 1
            ? classes.Circle
            : [classes.Circle, classes.CircleAnime].join(" ")
        }
      >
        <span
          class={
            props.step === 1
              ? classes.One
              : [classes.One, classes.OneAnime].join(" ")
          }
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
    </div>
  )
}

export default Stepper
