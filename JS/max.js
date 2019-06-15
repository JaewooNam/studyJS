// 배열 데이터에서 최댓값이나 최소값을 찾을 때에는 다음과 같이 
// apply() fmf dldydgksek.

/*
 * apply()의 첫번재 매개변수로 Math 객체를 넘겨서 this가 정확히 설정되도록 하는 것.
 */
const values = [1,2,3,4,5,6,7,8]
const max = Math.max(values)
console.log(max) // NaN

// solution
const appliedMax = Math.max.apply(Math, values)
console.log(appliedMax)

