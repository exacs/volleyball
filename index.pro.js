/**
 * Script to build the Server in Production mode.
 *
 * Use this code as an entry point for module bundlers that accepts ES6
 */
import http from 'http'
import express from 'express'
import app from './server'

const PORT = process.env.PORT || 3000
const server = http.Server(app)

app.use('/static', express.static('public'))

server.listen(PORT, function () {
  console.log('Listening to port ', PORT)
})
