
/*
//Ejercicio 1 : pedir una palabra y mostrarla al reves
//split: separar la cadena o palabra
//reverse: muestra el resultado de manera inversa
//join: une el resultado que se invirtió
console.log("-------------Ejercicio1------------")
let frase = prompt("Ingresa una palabra")
let invertirCadena = frase => frase.split("").reverse().join("");
console.log("Frase invertida:", invertirCadena(frase));

//Ejercicio 2: los pares en minusculas impares en mayusculas
console.log('-------------Ejercicio2------------')
let str = "kodemia"
let index = 0
let long = str.length
let result =""

///*
while (index < long) {
    if (index % 2 === 0){
       result = result + str.charAt(index).toLocaleUpperCase()
    } else {
       result = result + str.charAt(index).toLocaleLowerCase()
    }
    index ++
}

*/

/*
for (index = 0;index < long; index++) {
    if (index % 2 === 0){
       result = result + str.charAt(index).toLocaleUpperCase()
    } else {
       result = result + str.charAt(index).toLocaleLowerCase()
    }
    index ++
}
console.log("El resultado es: ",result)

//Ejercicio 3: Determinar si una frase inicia con vocal,consonante,numero,caractér
console.log('-------------Ejercicio3------------')
let cadenaTipoLetra = prompt("Ingresa palabra:")
let resultado = iniciaEn(cadenaTipoLetra) 
console.log("La primer letra es: ",resultado)


function iniciaEn(cadena){
    //Creo un objeto compara que contiene 3 arreglos(numero,vocal,consonante)
    let compara = new Object() 
    compara.numero = [0-9]
    compara.vocal = ['a','e','i','o','u']
    compara.consonante = ['b','c','d','f','g','h','j','k','l','m','n','ñ','p','q','r','s','t','v','w','x','y','z']

    //Determinar si está vacía la cadena
	if(!cadena || !cadena.length) return false;

    //Tomar la primer posicion de la cadena[0] y convertirla a minusculas
	let primerCaracter = cadena[0].toLowerCase();

    //verificar si hay coincidencias
    //indexOf(cadena): con esto comparo si la "cadena/caracter" está dentro del objeto.arreglo
    //Numeros
    if (compara.numero.indexOf(primerCaracter) >= 0){
        return('Un Número')
    }
    //Vocales
    else if (compara.vocal.indexOf(primerCaracter) >= 0) {
        return('Una Vocal')
    }
    //Consonante
    else if (compara.consonante.indexOf(primerCaracter) >= 0) {
        return('Una Consonante')
    }
    //Caractér especial
    else {
        return('Un Caractér especial')
    }

}
*/

///////////////////////////////////////////////////
console.log("---------1----------")
/*
Ejercicio 1:
Deducir:
input: anaconda
output: true
input: belzeebub
output: true
input: koder
output: false
input: cerveza
output: false 
*/
let palabra = prompt("Ingresa palabra:")
let tamanio1 = palabra.length

if (palabra.charAt(0) === palabra.charAt(tamanio1-1)){
    console.log("true")
} else{
    console.log("false")
}



/*
    Ejercicio 2:
    Pedir al usuario usuario un numero entre 1 y 10
    Imprimir la tabla de multiplicar de ese número
    p.ej.
    3 x 1 = 3
    3 x 2 = 6
*/
console.log("---------2----------")
let numero = prompt("Dame un numero entre 1 y 10")
let contador 
let resultN

if(numero >=1 && numero <= 10){
    for(contador = 1; contador <11 ; contador++){
        resultN = numero * contador
        console.log(numero," x ",contador, " = ",resultN)
    }
}else{
    console.log("Número equivocado")
}

//////////////////Ejercicio 3:
/*Pedir al usuario un numero entre 10 y 100
Imprimir todos los numeros pares que existen entre 1 y ese numero*/
console.log("---------3----------")
let numero3 = prompt("Dame un numero entre 10 y 100")
let contador3
let numpar
let result3

if(numero3 >=10 && numero3 <= 100){
    for(contador3 = 1; contador3 <= numero3 ; contador3++){

        if(contador3 % 2 == 0)//par
        {
            console.log(contador3)
        }
    }
}else{
    console.log("Número equivocado")
}

//////////////////Ejercicio 4:
/*Imprimir en consola la suma total de todos los digitos de una cantidad p.ej. "1234" -> 10*/
console.log("---------4----------")
let numeros = [0-9]
let numero4 = prompt("Dame numero:")
let contador4
let tamanio4 = numero4.length
let result4 = 0

    for(contador4 = 0; contador4 < tamanio4 ; contador4++){
        result4 += parseInt(numero4[contador4])
    }
    console.log(result4)



/////////////////////////Ejercicio 5
console.log("---------5----------")
let resultEje5 = '' //por defecto undefined
    for(contador = 0; contador <10 ; contador++){
        resultEje5 = resultEje5 + "*"
        console.log(resultEje5)
    }

/////////////////////////Ejercicio 6
console.log("---------6----------")
/*
    Ejercicio 6;
    Imprimir en consola la suma de los multiplos de 3 y 5 contenidos entre el 1 y 100 -> 233168
*/
let contador6
let result6 = 0

    for(contador6 = 1; contador6 <= 100 ; contador6++){

        if((contador6 % 3 == 0) || (contador6 % 5 == 0))
        {   console.log(contador6)
            result6 += parseInt(contador6)
        }
    }
    console.log(result6)


/////////////////////////Ejercicio 7
console.log("---------7----------")
let cadenaEntrada=prompt("Ingrese una cadena de texto").toLowerCase()
let textoFinal=convertirLetras(cadenaEntrada)
console.log(`El texto inicial fue: ${cadenaEntrada}`)
console.log(`El texto resultante es: ${textoFinal}`)
function convertirLetras(entradaDatos){
    let nuevaCadena = "";
    for (let x=0;x<=entradaDatos.length-1;x++){
        if (entradaDatos[x]==" "){
            nuevaCadena+=entradaDatos[x+1].toUpperCase()
            x++
        }   
        else
            nuevaCadena+=entradaDatos[x]
    }
    return nuevaCadena
}  


/////////////////////////Ejercicio 8
console.log("---------8----------")
let input = 0
let inputStr
let result = 0
for(let contador8 = 1; contador8 <= 10; contador8++ ){
    inputStr = contador8 + ".dame un numero: "
    input = prompt(inputStr)
    console.log(input)
    if(contador8 > 5){
        result += parseInt(input)
    }
}
console.log(result)

