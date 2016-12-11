# El Store

Una vez hemos definido cómo es el estado, qué provoca cambios en él (Acciones) y cómo se modifica el estado a partir de una acción (Reducers), toca definir el Store, el lugar en el que se almacena el estado. El Store tiene estas responsabilidades:

* Guardar el estado
* Permitir leer el estado mediante `getState()`
* Cambiar el estado pasándole acciones mediante `dispatch()`
* Suscribirse y desuscribirse a cambios del estado mediante `subscribe()`

Pero comencemos creando el Store.

## Crear el Store

Para crear el estado basta con llamar a la función `createStore` de Redux pasándole dos argumentos: el reducer y el estado inicial.

```js
const store = createStore(reducer, initialState)
```

## Cambiar el estado

Mediante `dispatch` podemos cambiar el estado. Para ello, tenemos que pasarle un argumento: un objeto Acción.

```js
store.dispatch(action)
```

## Suscribirse al Store y leer el estado

A veces queremos que el Store nos "avise" cada vez que cambia el estado. Para ello, utilizamos la función `subscribe` con un argumento:

```js
store.subscribe(listener)
```

El `listener` es una función que queremos que se invoque cuando el estado del Store se modifique. Una vez invocada, debemos de llamar a `store.getState()` para obtener el estado almacenado en el Store.

Por ejemplo, este es un extracto de `server/io.js` en el que utilizamos esa subscripción.

```
store.subscribe(() => {
  io.emit('spectator_update', store.getState())
})
```

Cada vez que se modifica el estado, llamamos a la función `io.emit` (que veremos adelante qué es eso) pasándole como 2º argumento el estado del Store.
