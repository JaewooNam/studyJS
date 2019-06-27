function numberOfPrime(n) {  
  var result = []
  var j=0
  let end = n

  for(var i=2; i<=n; i++) {
    console.log('i: ',i)
    for(j=1; j<=Math.sqrt(i); j++) {
      let cnt = 0
      console.log('j:', j)
      if(i>1 && Math.sqrt(i)%j === 0) {
        cnt++
        break;
      }
    }

    if (i===j) {
      result.push(i)
    }
  }

  return result.length
}

console.log(numberOfPrime(10))
