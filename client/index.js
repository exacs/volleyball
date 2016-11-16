/**
 * Entry point for Client-side JS file.
 */
import './sass/index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import socketio from 'socket.io-client'

import Scoreboard from '../app/components/Scoreboard'

console.log('Hello from client side JS')

const io = socketio()
io.on('connect', function () {
  console.log('client connect')
})

io.on('message', function (text) {
  console.log('message received', text)
})

function sendMessage () {
  io.emit('message', 'Hello from a client!')
}

setTimeout(sendMessage, 1000)

ReactDOM.render(<Scoreboard />, document.getElementById('root'))
