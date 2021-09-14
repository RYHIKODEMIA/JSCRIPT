//Objeto {} se accede con .propiedad
//arreglo con [] se accede con [indice]
//valores primitivos se acceden directo

const personObject = {
    name:     "Fernanda",
    lastName: "Palacios",
    gender:   "Mujer",
    age: 25,
    isSingle: true,
    hobbies:[
        "ver anime",
        "Programar"
    ],
    socialNetwork:{
        github:"@EveFer",
        facebook:"Fernanda Palacios"
    },
    saludar: function() {
        console.log("Hola Koders!!")
    }
}

console.log(personObject)

//como accedo a las propiedads de un objeto

// por medio de la notacion de punto
console.log(personObject.name)
console.log(personObject.age)

//Notacion de corchetes
console.log(personObject["Hobbies"])

//como agrego una propiedad
personObject.birthDate = "1996/06/24"
personObject.zodial = "Cancel"

console.log(personObject)

console.log(personObject.hobbies[0])

console.log(personObject.socialNetwork.github)

//Ejecutar un metodo de una funcion
personObject.saludar()

//Le estoy agregando algo a un arreglo
personObject.hobbies.push("Ver series")

//Agregar algo a un objeto
personObject.socialNetwork.twitter = "EverFer"

console.log(personObject.name.toUpperCase())
personObject.name = personObject.name.toUpperCase()
console.log(personObject)

//"Hola soy {name} {lastName} y tengo {age}"
let concatName = `Hola soy ${personObject.name} ${personObject.lastname} y tengo ${personObject.age}`

let namePerson = personObject.name
let lastNamePerson = personObject.lastname
let agePerson = personObject.age

//console.log('Hola soy')

//destructuring assingment
//{Que propiedades quiero obtener} = De que objeto las voy a obtener?
let  {name, lastName, age} = personObject
console.log(name)
console.log(lastName)
console.log(age)
console.log(`Hola soy ${name} ${lastName} y tengo ${age} años`)



//crear
let firstName = "Emi"
let generation = 13
let bootcamp = "JavaScript"

const koderObject = {
    firstName,
    generation,
    bootcamp
}

console.log(KoderObject)

//Destructuring with array
let arrayColors = ["Purple", "Orange","blue"]
let purpleColor = arrayColors[0]
console.log(purpleColor)

let [myColor1, myColor2, myColor3] = arrayColors

console.log(myColor1)
console.log(myColor2)
console.log(myColor3)