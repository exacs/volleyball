/**
 * HTTP Server
 */
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import SpectatorRoot from '../app/SpectatorRoot'
import RefereeRoot from '../app/RefereeRoot'

/**
 * Return an instance of Express HTTP Server.
 *
 * @param data   - Redux store of the server-side data
 */
export default function (data) {
  const app = express()

  app.get('/', function (req, res) {
    res.send(sendHTML(<SpectatorRoot />, 'index', data))
  })

  app.get('/referee', function (req, res) {
    res.send(sendHTML(<RefereeRoot />, 'referee', data))
  })

  app.use('/static', express.static('public'))

  return app
}

function sendHTML (rootComponent, jsName, store) {
  const provider = (
    <Provider store={store}>
      {rootComponent}
    </Provider>
  )
  return (`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
    <title>Hello World!!</title>
    <link rel="stylesheet" href="/static/build/${jsName}.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet">
  </head>
  <body>
    <div id="root">${renderToString(provider)}</div>
    <script>window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}</script>
    <script src="/static/build/${jsName}.js"></script>
  </body>
</html>
  `)
}

