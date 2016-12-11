# Interfaz de Usuario

Para la UI vamos a utilizar la librería React. Se basa en la definición de "Componente".

Un componente es una unión de elementos HTML, clases CSS y estado JavaScript. No debemos confundir el *estado del componente* y el *estado de la aplicación*. El estado del componente es algo que tiene que ver únicamente consigo mismo. Por ejemplo, si tenemos un menú desplegable, el menú tiene dos estados: abierto y no abierto.

Cada componente debe tener sentido de manera aislada sin saber que alrededor va a haber otros.

- [Componentes sin estado](StatelessComponents.md)
- [JSX](JSX.md)

Pero, en el diseño hace falta que algunos elementos dependan de otros, incluso que dependan de variables globales como el tamaño del dispositivo. Para ello necesitaremos una convención.

- [BEM](BEM.md)
