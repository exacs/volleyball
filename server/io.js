/**
 * Entry point for the Backend side of Socket.io.
 *
 * Must export a function that accepts an app.
 */
import socketio from 'socket.io'

export default function (app) {
  const io = socketio(app)

  io.on('connection', function (socket) {
    console.log('connection')

    socket.on('message', function (text) {
      console.log('message received', text)
      io.emit('message', text)
    })
  })
}
