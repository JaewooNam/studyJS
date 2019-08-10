function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i]
    }
  }

  return undefined
}
console.log(typeof 1)
console.log(findElement([1, 3], num => num % 2 === 0))