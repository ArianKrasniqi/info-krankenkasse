import * as actionType from "./actions"

const initialState = {
  lang: "de",
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CHANGE_LANG:
      console.log(action.langPrefix)
      return {
        ...state,
        lang: action.langPrefix,
      }
    default:
      return state
  }
}

export default reducer
