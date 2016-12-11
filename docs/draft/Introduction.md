# Introducción

La aplicación es un sistema con una arquitectura mixta:

* Cliente-Servidor con un servidor y dos clientes
* Editor-Subscriptor con un editor y un subscriptor

![](http://www.plantuml.com/plantuml/png/NKz13e8m4BplA_e1uWS85qEY5sDIZ0VZeRGhRbIMb8BVjn1OgvTsTgOpEpKsi5UdVZ2U62o_Ecwn3Mhxf7XXdX_CY8rnx8iYaI-besZSwA7khQSkugiolIer9Ayq-f6YDQ7sCTI_qD6y3sWQRyQYsbNLCHdFM6ks3mm0IpcLUMhk8Lkh0In0X3bYEeIH0b1g8R_HWaJxgoSR7B_RRFhTchXIFuOF)

El Navegador no se puede editar pero sí el programa que ejecuta. En adelante, considereremos Usuario y Navegador simplemente como Usuario e Interfaz de Usuario. Llamaremos “Cliente” solamente al programa que se ejecuta en el Navegador.

![](http://www.plantuml.com/plantuml/png/NP113i8W44Ntd88BS8ScRcHdqXBN2ACI2sEcqtfzQGC4NGt_3t_cmR2m9LxZBAnZ96cMrL90uJ2-CK5YUPf3Bj0v8z0MF59dwNo38lXmX4NOvTqwa4PtuZnDbqvUuJQYUm4BKTPAvV6Jr9uokeeAKAfK51vFLdsy7Llp5wWIrv5_k3jNIxRNDQRIEEW7I3x_rXS0)

Físicamente, Servidor e Intermediario son la misma entidad al igual que los pares [Cliente Árbitro-Editor] y [Cliente Espectador-Subscriptor].

## Capas arquitectónicas

![](http://www.plantuml.com/plantuml/png/RKyx3i8m3Drz2b-WDq1C7M2pH2Lc4moA2acKH20LSNS8BKbecHA_Zv-VDb7yYPNWfki8T1xtSjXPrKi4SAnwFWi6yJVn-014PQ_E6Z4HjwDZ-05RZZR0irZPkPcFl8JtoqfRKolLHIVwVmXoG5ec9RXDIr87R8xsRffrkInNcQZ2VFIh2QMba01oz1UgxvwJOs-WF9TlxNi1)

Los componentes que forman los clientes y el servidor se agrupan en diferentes capas arquitectónicas:

* **Capa de Interfaz del servidor**. Gestiona peticiones externas.
* **Capas de Interfaz del cliente**. Modifican lo que el usuario ve en pantalla e interactúan con el servidor.
* **Capas de Datos**. Gestionan el estado de la aplicación y la lógica que los modifica.

## Estado de la aplicación

El estado de la aplicación (`State`) es un *objeto* que representa cómo va el partido en ese momento. Incluye:

* El ganador del partido si ya ha acabado.
* La puntuación del partido.
* Las acciones que se han realizado hasta ese momento.

El estado se guarda en los clientes y en el servidor.
