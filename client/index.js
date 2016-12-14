/**
 * Client-side JS for Spectator
 */
import './sass/index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import socketio from 'socket.io-client'

import Spectator from '../app/containers/Spectator'
import { updateState } from '../app/actions'
import reducer from '../app/reducers'

const store = createStore(reducer, window.__INITIAL_STATE__)
const io = socketio()

ReactDOM.render(
  <Provider store={store}>
    <Spectator />
  </Provider>,
  document.getElementById('root')
)

io.on('spectator_update', function (newState) {
  store.dispatch(updateState(newState))
})

module.hot.accept()
