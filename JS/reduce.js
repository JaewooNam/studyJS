// First parameter : callback function which executed in each data
// Second parameter : Init value which would start reducing
const values = [1,2,3,4,5]
const sum = values.reduce(function(prev, cur, index, array) {
  console.log('prev : ', prev)
  console.log('cur : ', cur)
  console.log('index : ', index)
  console.log('array : ', array)
  return prev + cur
})
console.log(sum)