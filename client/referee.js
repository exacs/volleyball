/**
 * Entry point for Client-side JS file.
 */
import './sass/referee.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import RefereeRoot from '../app/RefereeRoot'
import reducer from '../app/reducers'

const store = createStore(reducer, window.__INITIAL_STATE__)

ReactDOM.render(
  <Provider store={store}>
    <RefereeRoot />
  </Provider>,
  document.getElementById('root')
)

module.hot.accept()
