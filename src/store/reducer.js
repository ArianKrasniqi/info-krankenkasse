import * as actionType from "./actions"

const initialState = {
  lang: "de",
  step: 1,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CHANGE_LANG:
      return {
        ...state,
        lang: action.langPrefix,
      }
    case actionType.CHANGE_STEP:
      return {
        ...state,
        step: action.step,
      }
    default:
      return state
  }
}

export default reducer
