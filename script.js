const quote1 = 'Good'
const quote2 = 'Discipline equals freedom'
const quote3 = 'Get after it'
const quote4 = 'Believe'
const quote5 = 'You'

let myArray = [quote1, quote2, quote3, quote4, quote5]

let randomItem = myArray[Math.floor(Math.random()*myArray.length)]

console.log(randomItem)
document.write('<p>' + randomItem + '</p>')