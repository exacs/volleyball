# BEM

BEM es una convención cuyas siglas significan "Bloque, Elemento, Modificador". Con ella resolveremos un conflicto local-global que surge en las interfaces de usuario.

Por un lado, cada componente debe ser independiente de su contexto. Debe haber CSS **local** que afecte solo a un componente.

Por otro, el diseño exige que ciertos elementos y componentes se relacionen entre sí. Debe haber CSS **global** dependiente de contexto.

CSS por definición es global.
