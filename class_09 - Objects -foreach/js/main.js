//Objeto {} se accede con .propiedad
//arreglo con [] se accede con [indice]
//valores primitivos se acceden directo

/*
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
*/


//Ejercicios
/*
let dataArray = [
    ["Fernanda", "Palacios"],
    ["Alfred", "Altamirano"],
    ["Angel", "Resendiz"],
    ["Elda", "Corona"],
    ["Tux", "Tuxtla"],
    ["Jorge", "De Buen"]
]
*/

/*
arrayMentor = [
    {
        name: "Fernanda",
        lastName: "Palacios"
    },
    {
        name: "Alfred",
        lastName: "Altamirano"
    },
    ...,
    {...}
]

*/

/*
const getArrayWithObject = (arrayMentors) => {
    let newArrayMentors = []
    for (let i = 0; i < arrayMentors.length; i++) {
        // console.log(arrayMentors[i])
        let name = arrayMentors[i][0]
        let lastName = arrayMentors[i][1]
        let mentorObject = { name, lastName }
        newArrayMentors.push(mentorObject)
    }
    return newArrayMentors
}

let otherArrayMentors = getArrayWithObject(dataArray)

console.log(otherArrayMentors)

//forEach - Recorre cada uno de los indices del arreglo.
otherArrayMentors.forEach((mentor, index)=> {
    console.log(mentor.name,"",mentor.lastName)
})


*/

// Ejercicio
/*
mentorArray[0].name
mentorArray[0].scores[0].signature
mentorArray[0].scores[0].score
*/

let mentorArray = [
    {
        name: "Angel Resendiz",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 10
            },
            {
                signature:  "JS",
                score: 9
            },
        ]
    },
    {
        name: "Elda Corona",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 9
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Alfred Altamirando",
        scores: [
            {
                signature:  "HTML",
                score: 9
            },
            {
                signature:  "CSS",
                score: 10
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Tux Tuxtla",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 8
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Fernanda Palacios",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 9
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    }
]

let scoreHtml = 0
let scoreCss  = 0
let scoreJs   = 0
let newMentorScore  = []
let newMentorProm95 = [] 
let newStringScore  = []
let mentorStringScore = ''
let mentorProm = 0

mentorArray.forEach((mentor, index)=> {
    let name = mentor.name
    let promedio = 0 
    mentor.scores.forEach((scores, indexScore)=>{
        promedio += parseInt(scores.score)
        if (indexScore === 0){
            scoreHtml += parseInt(scores.score)
        }else if (indexScore === 1){
            scoreCss  += parseInt(scores.score)
        }else if (indexScore === 2){
            scoreJs  += parseInt(scores.score)
        }
    })

    promedio /= mentor.scores.length

    let mentorProm   = { name, promedio }
    newMentorScore.push(mentorProm)
    mentorStringScore = (`Mi nombre es ${name} y mi promedio es ${promedio}`)
    mentorStringScore = {mentorStringScore}
    newStringScore.push(mentorStringScore)

    if (promedio > 9.5){
        mentorProm95 = { name }
        newMentorProm95.push(mentorProm95)
    }

})


scoreHtml = scoreHtml / mentorArray.length
scoreCss  = scoreCss / mentorArray.length
scoreJs   = scoreJs / mentorArray.length

console.log("Obtener el score promedio de cada materia")
console.log("HTML:",scoreHtml )
console.log("CSS:",scoreCss )
console.log("JS:",scoreJs )

console.log("Obtener el promedio indivual de cada mentor")
console.log(newMentorScore)

console.log("Crear un array de string con la siguiente forma:")
console.log(newStringScore)

console.log("Mentores con promedio mayor a 95")
console.log(newMentorProm95)
