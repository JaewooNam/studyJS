const palindrome = str => {
  str = str.toLowerCase()
  return str === str.split('').reverse().join('')
}

const str = 'raceCar'
console.log(palindrome(str))