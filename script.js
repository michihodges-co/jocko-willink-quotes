const quote1 = 'Believe'
const quote2 = 'Good'
const quote3 = 'Discipline equals freedom'
const quote4 = 'Do'
const quote5 = 'Get after it'
const quote6 = 'You'

let myArray = [quote1, quote2, quote3, quote4, quote5, quote6]

let randomItem = myArray[Math.floor(Math.random()*myArray.length)]

console.log(randomItem)
document.write('<p>' + randomItem + '</p>')
