function smallestCommons(arr) {
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);

  console.log(min)
  console.log(max)
}


smallestCommons([1, 5])