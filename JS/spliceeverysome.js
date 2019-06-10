const color = ['red', 'green', 'blue']
const color2 = color.concat('yellow', ['black', 'brown'])
console.log(color)
console.log(color2)
console.log(color)

let colors = ['red', 'green', 'blue']
let remove = colors.splice(0,1)
console.log(colors)
// green, blue
console.log(remove)
// red

remove = colors.splice(1, 0, 'yellow', 'orange')
console.log(colors)
console.log(remove)


// 1,2,3,4,5
// 1,2,4,5

const numbers = [1,2,3,4,5,6]
const everyResult = numbers.every(e=>{
  return (e > 2)
})
// if numbers = [1,2,3,4,5,6] 
// console.log(everyResult)
// false
// if numbers = [3,4,5,6] 
// console.log(everyResult)
// true
const someResult = numbers.some(e=>{
  return (e > 2)
})
console.log(someResult)

const filterResult = numbers.filter(e=>{
  return e > 2
})
console.log(filterResult)