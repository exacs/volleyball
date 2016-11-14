/**
 * Entry point for Back-end side JS file.
 *
 * Must export an instance of Express or a function to be passed to NodeJS http
 * module
 */
import express from 'express'

function sendHTML (jsName) {
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
  </head>
  <body>
    <script src="/static/build/${jsName}.js"></script>
  </body>
</html>
  `)
}

const app = express()

app.get('/', function (req, res) {
  res.send(sendHTML('index'))
})

export default app
