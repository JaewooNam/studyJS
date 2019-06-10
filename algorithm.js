// programmers

// 1,2,3,4,5
// 1,2,4,5

const numbers = [3,4,5,6]
const everyResult = numbers.every(e=>{
  return (e > 2)
})
// if numbers = [1,2,3,4,5,6] 
console.log(everyResult)
// false
// if numbers = [3,4,5,6] 
console.log(everyResult)
// true