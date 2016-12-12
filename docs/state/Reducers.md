# Los Reducers

Ya tenemos las acciones que indican una acción por la que el estado debe cambiar. El encargado de que el estado cambie es el *Reducer*.

El reducer no es más que una **función** que recibe dos argumentos: el estado actual y una acción. Y retorna el estado que tendrá después.

## La forma del estado

Este es un buen momento para definir cómo es el estado de la aplicación, en definitiva qué queremos guardar de un partido. Vamos a guardar:

* El resultado del partido.
* Las acciones que se han producido.

El objeto que guardaremos será tal que así:

```
{
  winner: [ 'home' | 'away' | null ],
  points: array<RoundResult>,
  history: array<HistoryEntry>
}
```

El campo `winner` es el ganador del partido. `home` es el equipo local, `away` el visitante y `null` significa que el partido no ha terminado.

La propiedad `points` es un `array` en el que cada elemento es el resultado de un set del partido (un objeto de tipo `RoundResult`).

Por último, la propiedad `history` es un array de elementos `HistoryEntry`, representaciones de cómo ha ido evolucionando el resultado.

Veamos como son los objetos `RoundResult` y `HistoryEntry`

> Por convención, llamaremos *Round* a los sets porque "set" suele ser una palabra reservada en los lenguajes de programación.

Un objeto `RoundResult` es de este estilo:

```
{
  home: number,
  away: number,
  winner: [ 'home' | 'away' | null ]
}
```

En él, las propiedades `home` y `away` indican los puntos local y visitante en ese set y la propiedad `winner` es el ganador del set (si lo hay).

Un objeto `HistoryEntry` guarda la información de un punto.

```
{
  time: number,
  feature: ['home' | 'away'],
  previous: array<RoundResult>
}
```

En donde `time` es el minuto en el que se ha producido el punto, `feature` es quién ha marcado el punto y `previous` es la puntuación del partido antes de producirse ese punto.

## Estado inicial

El estado inicial de la aplicación es el siguiente:

```js
const initialState = {
  winner: null,
  rounds: [{
    home: 0,
    away: 0,
    winner: null
  }],
  history: []
}
```

## Reducer

Como hemos adelantado, el reducer es una función que toma el estado actual y una acción; y retorna el estado posterior.

Podemos encontrar implementado el reducer en `app/reducers/index.js`.

El reducer obligatoriamente tiene que ser una función pura. Es decir, no debe alterar ninguna variable externa ni provocar efectos colaterales.

Tampoco puede modificar ninguno de los argumentos. Esto se traduce en que, si el estado cambia, se debe retornar una instancia *nueva* del estado, nunca modificar el original.

Es importante recalcar que un reducer es puro y no tiene efectos colaterales. Por tanto, en un reducer no puede haber llamadas a una API externa, temporizadores, generadores de IDs, números aleatorios.

Para realizar la comunicación entre Árbitro, Espectador y Servidor no usaremos el reducer. Profundizaremos en esto más adelante.
