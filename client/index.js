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
io.on('connect', function () {
  console.log('client connect')
})

io.on('spectator_update', function (text) {
  console.log('update for spectator', text)
})

function sendMessage () {
  io.emit('message', 'Hello from a client!')
}

setTimeout(sendMessage, 1000)

ReactDOM.render(
  <Provider store={store}>
    <SpectatorRoot />
  </Provider>,
  document.getElementById('root')
)

module.hot.accept()
