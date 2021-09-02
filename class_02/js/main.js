console.log("Hola Koder")

console.error("Esto es un error")

console.warn("Esto es warning")

// 3 metodos interartuar con el usuario

// alert("Esto es un mensaje para loos koders!!")

// let name = window.prompt("Ingresa tu nombre")
// regresa un string

console.log(name)

// Operadores





// Aritmeticos

/*
    +
    -
    *
    /
    %
    ()
*/

let operation = 5 + (5 - 10) * 3
console.log(operation)

let division = 5 / 2
console.log(division)

let residuo = 5 % 2
console.log(residuo)

// Relacionales

/*
>
<
>=
<=
==
=== 
!=
!== (super diferente xD)
*/

console.log(8 > 9)
console.log(9 > 8)
console.log(8 >= 9)
console.log(9 >= 8)
console.log(7 < 7)
console.log(7 <= 7)

let string1 = "a"
let string2 = "b"

console.log(string2 > string1)

console.log('----------')
// Asignación

/*
= -> Asignar un valor a una variable
== -> Comparación de valores
=== -> Comparación de tipo de datos y del valor

*/
console.log(7 == 7)
console.log("7" == 7)
console.log("7" === 7)

/*

+=

*/

let number1 = 1

let suma = 5 + 10

// number1 = number1 + 5
number1 += suma
number1 *= 2
number1 /= 2
number1 -= 10

console.log(number1)

// Incremento | Decremento

console.log("--------")
let number2 = 2

console.log(number2++)

// number2++
// ++number2


// console.log(number2)

// Logicos







console.log('----------Ejercicios------------')
/*
let number_1, number_2, resultado
number_1 = prompt("Dame el primer número:")
number_2 = prompt("Dame el segundo número:")

number_1 = Number(number_1)
number_2 = Number(number_2)

resultado = number_1 + number_2
resultado = Number(resultado)

console.log (resultado)
resultado = number_1 - number_2
console.log (resultado)
resultado = number_1 * number_2
console.log (resultado)
resultado = number_1 / number_2
console.log (resultado)

console.log('------------ 2 ------------')
console.log (number_1 > number_2)
console.log('------------ 3 ------------')
number_1 = String(number_1)
number_2 = String(number_2)
console.log (number_1 > number_2)
*/

console.log('------------ 7 ------------')
let Name, widht, result, seleccion, factor, astro
Name = prompt("Cual es tu nombre:")
widht = prompt("Cual es tu peso:")
seleccion = prompt("Donde quieres calcular tu peso(L=Luna, M=Marte, J=Jupiter")
 
if ( seleccion === 'L' )
   { 
      factor = 1.622 
      astro  = "Luna"
   }
else if ( seleccion === 'M' )
   { 
      factor = 3.711 
      astro  = 'Marte'
   }
else if ( seleccion === 'J' )
   { 
      factor = 24.79 
      astro  = 'Jupiter'
   }
else
   { console.log ('No seleccionó ninguna opción') }

if ( seleccion != '')
{
   result = ( widht / 9.8 ) * factor
   console.log ('Su peso en ',astro,' es de ',result) 
}


