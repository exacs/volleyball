# Las Acciones

Las **Acciones** no son más que mensajes enviados al *Store* (el lugar en donde se almacena el estado).

Las acciones son objetos JavaScript, como por ejemplo este, que representa la acción de "Incrementar un punto al equipo local en el minuto 1":

```js
{
  type: 'point',
  time: 1,
  feature: 'home'
}
```

La única convención es que todas las acciones deben llevar obligatoriamente una propiedad `type` que de alguna manera identifica el tipo de acción.

Para no liarnos, definimos en `app/actions/index.js` unas constantes con los valores que puede llevar `type`:

```
export const POINT = 'point'
export const UNDO = 'undo'
export const UPDATE_MATCH = 'update_match'
```

Concretamente:

* La acción `POINT` representa que un equipo ha marcado un punto.
* La acción `UNDO` representa deshacer el último punto.
* La acción `UPDATE_MATCH` representa actualizar el partido almacenado. Esta acción la recibirá el espectador con la nueva información del partido.

## Generadores de acciones

Son funciones que retornan acciones a partir de unos argumentos. En el mismo fichero, vemos que se definen dichas funciones:

```js
export const point = (feature, time) => ({
  type: POINT,
  time,
  feature
})

export const undo = () => ({
  type: UNDO
})

export const updateMatch = (newState) => ({
  type: UPDATE_MATCH,
  newState
})

```

En la medida de lo posible usaremos los generadores de acciones en lugar de las acciones como tal ya que nos evitan algunos errores y son más prácticas de escribir.
