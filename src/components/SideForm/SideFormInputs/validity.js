export const lengthError = (expression, minLength, label) => {
  const expLength = expression.trim().length
  if (expLength === 0) {
    return `Bitte ${label} angeben`
  } else if (expLength > minLength && label === "PLZ") {
    return `Bitte ${minLength} Zahlen eingeben`
  } else if (expLength < minLength) {
    return label === "PLZ"
      ? `Bitte ${minLength} Zahlen eingeben`
      : `Mindestens ${minLength} Buchstaben erforderlich`
  } else {
    return " "
  }
}

export const phoneError = (expression, minLength, label) => {
  const expLength = expression.trim().length
  const isNum = /^\d+$/.test(expression)
  if (expLength === 0) {
    return `Bitte ${label} angeben`
  } else if (!isNum) {
    return `Es können nur Zahlen verwendet werden`
  } else if (expLength < minLength) {
    return `Mindestens ${minLength} Zahlen erforderlich`
  } else {
    return " "
  }
}

export const emailError = expression => {
  const expLength = expression.trim().length
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (expLength === 0) {
    return `Bitte Email angeben`
  } else if (!regex.test(expression)) {
    return `Email ist ungültig`
  }
}

export const checkIsfilled = expression => expression && expression.length > 0

export const checkIsTrue = expression => expression
