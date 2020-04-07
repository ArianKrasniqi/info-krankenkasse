import * as actionType from "./actions"

const initialState = {
  lang: "de",
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CHANGE_LANG:
      return {
        ...state,
        lang: action.langPrefix,
      }
  }
  return state
}

export default reducer
