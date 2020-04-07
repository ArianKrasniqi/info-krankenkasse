import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./reducer"

const store = () => createStore(rootReducer)

export default ({ element }) => <Provider store={store()}>{element}</Provider>
