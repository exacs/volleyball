/**
 * WebSocket server
 */
import socketio from 'socket.io'

/**
 * Return an instance of Socket.io WebSocket Server.
 *
 * @param app   - An HTTP server
 * @param store - Redux store of the server-side data
 */
export default (app, store) => {
  const io = socketio(app)

  // Receive messages from referee
  io.on('connection', function (socket) {
    console.log('connection')

    socket.on('referee_update', function (text) {
      console.log('referee_update', text)
      store.dispatch(text)
    })
  })

  // Send messages to spectators
  store.subscribe(() => {
    io.emit('spectator_update', store.getState())
  })
}
