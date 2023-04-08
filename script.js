const quote1 = 'Good'
const quote2 = 'Get after it'
const quote3 = 'Believe'

let myArray = [quote1, quote2, quote3]

let randomItem = myArray[Math.floor(Math.random()*myArray.length)]

console.log(randomItem)
document.write('<p>' + randomItem + '</p>')