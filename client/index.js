/**
 * Entry point for Client-side JS file.
 */
import './sass/index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import socketio from 'socket.io-client'

import SpectatorRoot from '../app/SpectatorRoot'
import reducer from '../app/reducers'

const store = createStore(reducer, window.__INITIAL_STATE__)

const io = socketio()

io.on('spectator_update', function (text) {
  store.dispatch(text)
})

ReactDOM.render(
  <Provider store={store}>
    <SpectatorRoot />
  </Provider>,
  document.getElementById('root')
)

module.hot.accept()
