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

    socket.on('referee_update', function (text) {
      console.log('referee_update', text)
      io.emit('spectator_update', text)
    })
  })
}
