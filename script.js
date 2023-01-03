const quote1 = 'Good'
const quote2 = 'Discipline equals freedom'
const quote3 = 'Get after it'
const quote4 = 'Believe'
const quote5 = 'Check the ego'
const quote6 = 'Cover and move'
const quote7 = 'Simple'
const quote8 = 'Prioritize and execute'
const quote9 = 'Plan'

let myArray = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9]

let randomItem = myArray[Math.floor(Math.random()*myArray.length)]

console.log(randomItem)
document.write('<p>' + randomItem + '</p>')