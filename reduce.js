// 첫번째 매개변수 : 각 데이터에서 실행할 콜백함수
// 두번째 매개변수 : 감소 작업을 시작할 초기값

const values = [1,2,3,4,5]
const sum = values.reduce(function(prev, cur, index, array) {
  console.log('prev : ', prev)
  console.log('cur : ', cur)
  console.log('index : ', index)
  console.log('array : ', array)
  return prev + cur
})
console.log(sum)