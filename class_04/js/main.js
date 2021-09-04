

//Ejercicio 1 : pedir una palabra y mostrarla al reves
//split: separar la cadena o palabra
//reverse: muestra el resultado de manera inversa
//join: une el resultado que se invirtió
console.log("-------------Ejercicio1------------")
let frase = prompt("Ingresa una palabra")
let invertirCadena = frase => frase.split("").reverse().join("");
console.log("Frase invertida:", invertirCadena(frase));

//Ejercicio 2: las vocales deberán estar en mayúsuclas
//toCharArray: convierte el string en un arreglo
console.log('-------------Ejercicio2------------')
frase = frase.replace(/[a]/gi,'A')
frase = frase.replace(/[e]/gi,'E')
frase = frase.replace(/[i]/gi,'I')
frase = frase.replace(/[o]/gi,'O')
frase = frase.replace(/[u]/gi,'U')
console.log("Frase uppercase:", frase);

//Ejercicio 3: Determinar si una frase inicia con vocal,consonante,numero,caractér
console.log('-------------Ejercicio3------------')
let cadenaTipoLetra = prompt("Ingresa palabra:")
let resultado = iniciaEn(cadenaTipoLetra) 
console.log("La primer letra es: ",resultado)


function iniciaEn(cadena){
    //Creo un objeto compara que contiene 3 arreglos(numero,vocal,consonante)
    let compara = new Object() 
    compara.numero= ['0','1','2','3','4','5','6','7','8','9']
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





