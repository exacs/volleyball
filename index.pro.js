/**
 * Script to build the Server in Production mode.
 */
import http from 'http'
import appFactory from './server/http'
import socketio from './server/io'
import data from './server/data'

const PORT = process.env.PORT || 3000
const app = appFactory(data)
const server = http.Server(app)

server.listen(PORT, function () {
  console.log('Listening to port ', PORT)
})

socketio(server, data)
