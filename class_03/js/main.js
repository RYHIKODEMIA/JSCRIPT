//string
//Dato primitivo
/*
let nombre = "Rocio"
let apellido = 'Hdz'
let saludo = new String("Hola Amigos")

//Concatenar
let nombreCompleto = nombre + ' ' + apellido
console.log(nombreCompleto)

let saludoConMiNombre = 'Hola Mi nombre es ' + nombre + ' '  + apellido
console.log(saludoConMiNombre)


//Template string - acento invertido | backtick

let nuevoSaludo = `Hola mi nombre es ${nombre} ${apellido}`
console.log(nuevoSaludo)

//primitive wrapper object: Convierte a un objeto de forma temporal
let someString = "Hola a todos"
console.log(someString.length) 

//Funciones
console.log("-----------Funciones------------")
let numberOne = 45
let numberTown = 20
let suma = numberOne + numberTown
console.log(suma)

//Definicion de la funcion
function sumaDeDosNumeros(){
    let numberOne = 45
    let numberTown = 20
    let suma = numberOne + numberTown
    console.log(suma)
}

//Invocacion de la funcion
sumaDeDosNumeros()


//Definicion de la funcion
function sumaDeDosNumeros2(numberOne, numberTown){

    let suma = numberOne + numberTown
    console.log(suma)
}

//Invocacion de la funcion
let number1 = 45
let number2 = 20
sumaDeDosNumeros2(number1, number2)
*/

console.log("-----------Ejercicios------------")
/*
Ejercicio 1:
    Solicitar al usuario su nombre y sus apellidos
    regresar en una sola cadena donde el nombre sea minusculas y los apellidos sean mayusculas
    input nombre = "Fernanda"
    input Apellido = "Palacios Vera"
    Output: "fernanda PALACIOS VERA"
*/
/*
Ejercicio 2:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
*/
/*
Ejercicio 3:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/
/*
Ejercicio 4:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/
/*
Ejercicio 5:
    Comparar 2 string, y determinar cual de los dos es el más largo
    input: "string 1", "Some large string"
    Output: "el string {string 1} es el más largo"
*/
/*
Ejercicio 6:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/


console.log("-----------1------------")
let Nombre     = prompt("Cual es tu nombre:")
let apellido = prompt("Cual es tu apeido:")
Nombre = Nombre.toLowerCase()
apellido = apellido.toUpperCase()
let nameApellido = Nombre + ' ' + apellido
console.log(nameApellido) 

console.log("-----------2------------")
let Nombre2     = prompt("Cual es tu nombre:")
let contador
Nombre2 = Nombre2.replace(/ /g, "");
contador = Nombre2.length
console.log("La cantidad de caracteres es: ",contador)

console.log("-----------3------------")
//  /La linea invertida sig. Expresion regular 
//crear rango /[ y agregar Todos los caracteres que queremos validar
//le decimos que tome los distinto ^ a estas letras
//Que la busqueda sea en toda la cadena g y reemplazar por vacío''
//i-Fer dijo que es para que no importe si es mayuscula o minuscula
contador = Nombre2.replace(/[^aeiouAEIOU]/g,'').length
console.log("La cantidad de vocales es: ",contador) 

console.log("-----------4------------")
let cadena = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"
cadena = cadena.replace(/estudiante/g, 'Koder')
console.log(cadena)  

console.log("-----------5------------")
let string1 = prompt("Indica el stirng1:")
let string2 = prompt("Indica el stirng2:")
let lenght1 = string1.length
let lenght2 = string2.length

if (lenght1 > lenght2){
    console.log("cadena 1 es mayor que cadena dos")
}else if (lenght1 < lenght2){
    console.log("cadena 2 es mayor que cadena 1")
}else{
    console.log("cadenas son iguales")
}

console.log("-----------6------------")
let cadena6 = prompt("Introduce una frase:");
let [tamanioFrase1, tamanioFrase2] = cadena6.split(' ');
if(tamanioFrase1.length > tamanioFrase2.length){
    console.log(tamanioFrase1)
}else if (tamanioFrase1 < tamanioFrase2){
    console.log(tamanioFrase2)
}else{
    console.log("Frases del mismo tamaño")
} 

