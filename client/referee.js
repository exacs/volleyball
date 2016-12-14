/**
 * Client-side JS for Referee
 */
import './sass/referee.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import socketio from 'socket.io-client'

import Referee from '../app/containers/Referee'
import reducer from '../app/reducers'
import ioMiddleware from '../app/middleware/io'

const io = socketio()
const store = createStore(
  reducer,
  window.__INITIAL_STATE__,
  applyMiddleware(ioMiddleware(io))
)

ReactDOM.render(
  <Provider store={store}>
    <Referee />
  </Provider>,
  document.getElementById('root')
)

module.hot.accept()
