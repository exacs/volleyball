# Flujo de información

Los datos fluyen por Redux de forma **unidireccional**. Por diseño, están separados:

* Las Acciones que provocan cambios
* Los Reducers que cambian el estado
* El `dispatch` que sirve de entrada de las Acciones.
* El `subscribe` y `getState` que sirve de salida del estado.

Este es el código completo de `server/io.js`.

```js
io.on('connection', function (socket) {
  console.log('New WebSocket client connected!!')

  socket.on('referee_update', function (action) {
    store.dispatch(action)
  })
})

store.subscribe(() => {
  io.emit('spectator_update', store.getState())
})
```

Cada vez que llega un mensaje del árbitro, se actualiza el estado:

```js
socket.on('referee_update', function (action) {
  store.dispatch(action)
})
```

Cada vez que el estado cambia, se envía un mensaje al espectador:

```js
store.subscribe(() => {
  io.emit('spectator_update', store.getState())
})
```

Pero, si por otra circunstancia cambia el estado, también se emitirá el mensaje. Y si hay otros suscriptores aparte del espectador, a ellos les llegará la notificación.

Y esta es la gran ventaja de separar la lectura de la escritura.
