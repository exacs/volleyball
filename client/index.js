/**
 * Entry point for Client-side JS file.
 */
import './sass/index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import socketio from 'socket.io-client'

import Hello from '../app/components/Hello'
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

ReactDOM.render(<Hello name='world' />, document.getElementById('root'))
