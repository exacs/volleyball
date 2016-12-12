/**
 * Entry point for Back-end side JS file.
 *
 * Must export an instance of Express or a function to be passed to NodeJS http
 * module
 */
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import SpectatorRoot from '../app/SpectatorRoot'
import RefereeRoot from '../app/RefereeRoot'
import reducer from '../app/reducers'

export default function (data) {
  const app = express()

  app.get('/', function (req, res) {
    res.send(sendHTML(<SpectatorRoot />, 'index', data.getState()))
  })

  app.get('/referee', function (req, res) {
    res.send(sendHTML(<RefereeRoot />, 'referee', data.getState()))
  })

  return app
}

function sendHTML (rootComponent, jsName, state) {
  const provider = (
    <Provider store={createStore(reducer, state)}>
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
    <script>window.__INITIAL_STATE__ = ${JSON.stringify(state)}</script>
    <script src="/static/build/${jsName}.js"></script>
  </body>
</html>
  `)
}

