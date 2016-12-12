# Estado

Llamamos "estado" a los datos que representan "cómo" se encuentra la aplicación en un determinado instante.

Actualmente, el estado sería la situación de un partido.

En las diferentes partes de la aplicación, el estado es diferente. Por ejemplo, cuando el árbitro pulsa "+" para subir un punto a un equipo, el estado en el Cliente árbitro cambia.

Pero hasta que el mensaje no llega al servidor, el estado en el servidor no cambia.

Por otro lado, el estado del árbitro podría incluir el hecho ese de que el mensaje "aún no ha llegado" al servidor.

Y un largo etc.

Sin embargo, la manera de gestionar el estado va a ser idéntica y va a usarse para ello la librería JavaScript [Redux](http://redux.js.org/).

Las partes que tenemos que definir son:

- [Las Acciones](Actions.md)
- [Los Reducers](Reducers.md)
- [El Store](Store.md)

Finalmente veremos cómo se une todo:

- [Flujo de información](DataFlow.md)

Y qué cosas aparecerán en un futuro:

- [Futuro](Future.md)
