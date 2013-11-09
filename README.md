Verificar RUT Chileno en JavaScript
================

Función JavaScript para verificar que el rut ingresado en un input sea correcto,
además formatea el input ingresado para eliminar cualquier caracter no válido y
representar el rut en el formato xxxxxxxx-x

-----------------

This Javascript function verifies and validates the Chilean RUT. It will delete
any non valid character and will give it the format xxxxxxxx-x

-----------------

The algorithm for calculating the check digit was based on
http://users.dcc.uchile.cl/~mortega/microcodigos/validarrut/algoritmo.html

Check example.html to see how to use it, doesn't require any framework, also you
can visit [this web site](http://www.gleiser.net/verificar-rut-js/) to see the
working example.

In a nutshell, `RUT.verificar(inputElement)` returns `true` if is correct, `false`
if is wrong and `undefined` if inputElement is empty.

Released under MIT License.
