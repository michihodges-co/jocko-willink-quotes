const quote1 = 'Believe'
const quote2 = 'Good'
const quote3 = 'Get after it'

let myArray = [quote1, quote2, quote3]

let randomItem = myArray[Math.floor(Math.random()*myArray.length)]

console.log(randomItem)
document.write('<p>' + randomItem + '</p>')
