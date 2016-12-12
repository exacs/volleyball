/**
 * Script to build the Server in Production mode.
 *
 * Use this code as an entry point for module bundlers that accepts ES6
 */
import http from 'http'
import express from 'express'
import appFactory from './server/http'
import socketio from './server/io'
import * as data from './server/data'

const PORT = process.env.PORT || 3000
const app = appFactory(data)
const server = http.Server(app)

app.use('/static', express.static('public'))

server.listen(PORT, function () {
  console.log('Listening to port ', PORT)
})

socketio(server, data)
