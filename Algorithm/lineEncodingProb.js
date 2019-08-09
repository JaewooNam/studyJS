function sol(str) {
  const arr = new Set(str)
  console.log(arr)
  let cnt = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) cnt++
    console.log(cnt)
  }
}

const str = 'aaaaaabbbbccc'
console.log(sol(str))