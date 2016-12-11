# Capa de datos

La capa de datos se divide en varios módulos:

* **Store**. Almacena el estado actual.
* **Reducer**. Implementa la lógica que modifica el estado actual.
* **Action**. Representa una acción que hace que el estado actual cambie.
* **Action creator**. Función que genera un *Action*.

El objetivo de esta separación es separar el *estado*, la *acción* que provoca un cambio y el *efecto* de dicha acción. Todos los objetos se implentan según la especificación Redux.

El *Reducer* y las acciones son comunes a cliente y servidor. El directorio `app` tiene los módulos:

* `app/reducers/index.js`. Reducer.
* `app/actions/index.js`. Actions y Action creators.

El *Store* es diferente en cada cliente y en el servidor y por ello no está en el directorio `app`.

![](http://www.plantuml.com/plantuml/png/hP3D2i8m48JlUOeS5T5744ehwC6ss7gMRRhKO4r3Vhn8tztG90L_Zjvs9fDlXvN0Rj0X1Idfar3AUj2Qdh2r3DNaKBfIarmidHhdJC8C7qIg4CoWT8nQqGvJqCrouC94OMKB1ezWsFKdQ2QSywpmKraSyZgOPPRKkyingTFzz7aaHC0TjGI6LADwXBOUMRbA684jTwcurcbj6yqKRp0Q7PhAk7AXrnkQzHo5-IFQTzrup7eRJqtyec__uypk9Tph1G00)

## Acciones síncronas

Se pueden enviar acciones de los siguientes tipos:

* `POINT`. Sube un punto a un equipo.
* `UNDO`. Deshace la última acción de subida de puntos.
* `UPDATE_MATCH`. Actualiza la información del partido entero.

Están implementadas en el fichero `app/actions/index.js`

### Tipo `POINT`

```
{
  type: POINT,
  time: number,
  feature: [ 'home' | 'away' ]
}
```

Donde:

* `time` es el minuto en el que se ha marcado el punto.
* `feature` es el equipo que ha marcado el punto.

### Tipo `UNDO`

```
{
  type: UNDO,
}
```

No tiene ningún parámetro

### Tipo `UPDATE_MATCH`

```
{
  type: UPDATE_MATCH,
  newState: any
}
```

Donde

* `newState` es el estado nuevo del partido.
