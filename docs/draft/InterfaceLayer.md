# Capas de Interfaces

Las capas de Interfaces de clientes y servidor tienen roles distintos aunque estén íntimamente relacionadas entre sí.

El Servidor gestiona peticiones a través de sus interfaces HTTP y WebSocket. La capa del servidor se encarga de:

* Gestionar la entrada del usuario en la app. Cuando el usuario entra en una ruta desde su navegador, el servidor gestiona la petición GET y renderiza la página que debe mostrar con los datos correspondientes.
* Gestionar sucesivas peticiones. Por ejemplo, cuando un árbitro actualiza la puntuación, la interfaz del servidor, recibe el mensaje, actualiza el estado del servidor y lo difunde a todos los espectadores.

El Cliente gestiona las órdenes a través de su interfaz gráfica y del WebSocket. La capa del cliente se encarga de:

* Recibir interacciones del usuario y transformarlas en acciones que modifican el estado del cliente. Por ejemplo, cuando el árbitro toca el botón "+" de uno de los equipos, esta capa envía al estado del cliente la orden de "sumar un punto"
* Enviar acciones de modificación del estado al servidor. Siguiendo con el ejemplo anterior, también enviaría al servidor el mensaje de "sumar un punto"
* El Cliente también recibe peticiones del interfaz WebSocket, actualizando el estado del cliente y lo que el usuario ve. Por ejemplo, el cliente espectador recibiría el mensaje con la nueva puntuación del partido cuando ocurre lo anterior.

Existen dos módulos Interfaz de Servidor: uno `server/http.js` para peticiones HTTP y otro para `server/io.js` para peticiones WebSocket.

Existen dos módulos Interfaz de Cliente: uno `client/index.js` para el Interfaz del espectador y `client/referee.js` para el interfaz del árbitro.

## Interfaz HTTP del Servidor

Gestiona únicamente las URL `/` y `/referee`. Cuando las recibe, llama a una función llamada `sendHTML` pasándole 3 argumentos:

* El componente que se tiene que mostrar
* El nombre del fichero javascript del cliente
* El store que almacena el estado del servidor. El estado actual del servidor es el estado **inicial** para el cliente.

```js
const app = express()

app.get('/', function (req, res) {
  res.send(sendHTML(<SpectatorRoot />, 'index', store))
})

app.get('/referee', function (req, res) {
  res.send(sendHTML(<RefereeRoot />, 'referee', store))
})
```
Entrando en detalle de la función `sendHTML`, primero envuelve el componente (primer argumento) en el `Provider` de React-Redux.

```js
function sendHTML (rootComponent, jsName, store) {
  const provider = (
    <Provider store={store}>
      {rootComponent}
    </Provider>
  )
  return(`...`)
```

Luego retorna un `String` con el HTML con los 3 argumentos recibidos.

```js
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
```

* El componente renderizado en forma de String envuelto con el `Provider`:

  `<div id="root">${renderToString(provider)}</div>`

* El estado inicial:

  `<script>window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}</script>`

* El fichero Javascript del lado del cliente:

  `<script src="/static/build/${jsName}.js"></script>`

## Interfaz WebSocket del Servidor

Gestionan solamente el paso de mensajes provenientes del árbitro y sus efectos.

Por un lado, espera a que entren conexiones WebSocket y de esas conexiones espera a que lleguen mensajes de tipo `referee_update` que indican que el árbitro ha mandado algo. Cuando recibe el mensaje, úncamente se lo pasa al `Store`

```js
io.on('connection', function (socket) {
  console.log('New WebSocket client connected!!')

  // Receive messages from referees
  socket.on('referee_update', function (action) {
    console.log('Received an Referee update', action)
    store.dispatch(action)
  })
})
```

Por otro lado espera a que cambie el estado del servidor suscribiéndose al `Store`. Cuando cambia, emite un mensaje `spectator_update` que indica que los espectadores deben actualizar la puntuación que muestran.

```
store.subscribe(() => {
  console.log('Sending an update for Spectators')
  io.emit('spectator_update', store.getState())
})
```

## Interfaz cliente Espectador

Por un lado, recibe el estado inicial y crea un `Store` con él.

```js
const store = createStore(reducer, window.__INITIAL_STATE__)
```

Y vuelve a renderizar el componente `SpectatorRoot` envuelto en el `Provider`

```js
ReactDOM.render(
  <Provider store={store}>
    <SpectatorRoot />
  </Provider>,
  document.getElementById('root')
)
```

También espera a que entren mensajes por WebSocket. Cuando llega un mensaje `spectator_update`, actualiza el `Store` con el nuevo estado recibido.

```js
io.on('spectator_update', function (state) {
  store.dispatch(updateMatch(state))
})
```

## Interfaz cliente Árbitro

De nuevo, recibe el estado inicial, crea el `Store` y renderiza el componente correspondiente.

```js
const store = createStore(
  reducer,
  window.__INITIAL_STATE__,
  applyMiddleware(ioMiddleware(io))
)

ReactDOM.render(
  <Provider store={store}>
    <RefereeRoot />
  </Provider>,
  document.getElementById('root')
)
```

La única diferencia es que el `Store` tiene incluido un *Middleware de Redux*, utilizado para enviar mensajes al WebSocket
