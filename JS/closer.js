// 클로저란 다른 함수의 스코프에 있는 변수에 접근 가능한 함수
/*
 * 함수 내부의 익명함수가 외부 함수의 변수 전체에 접근할 수 있다.
 * 외부 함수가 실행을 마쳤음에도 활성화 객체가 파괴되지 않는다.
 * 클로저는 외부 함수의 스코프를 보관해야 하므로 다른 함수에 비해 메모리를 많이 요구
 * 클로저를 과용하면 메모리 문제가 생길 수 있으니, 반드시 필요할 때만 사용하길 권장
 * JS를 최적화하는 엔진은 클로저 때문에 반환 불가능해진 메모리르 회수하려 시도하기도 하지만..조심하는게 좋다 
 * 함수의 내부에 존재하는 함수는 외부 함수의 활성화 객체를 자신의 스코프 체인에 추가한다.
*/

function createComparisonFunction(propertyName) {
  return function(object1, object2) {
    const value1 = object1[propertyName]
    const value2 = object2[propertyName]
    if (value1 < value2) {
      return -1
    } else if (value1 > value2) {
      return 1
    } else {
      return 0
    }
  }
}

// 부작용
// 클로저는 항상 외부함수의 변수에 마지막으로 저장된 값만 알 수 있다.
function createFunction(){
  let result = new Array()
  for(let i=0; i<10; i++) {
    result[i] = function() {
      return i
    }
  }

  return result
}

// createFunction() // [Function],[Function]....,[Function]


// this
// 클로저 내부의 this객체는 꽤 복잡하게 동작함.
// this 객체는 런타임에서 함수가 실행 중인 컨텍스트에 묶인다.
// 즉, 전역함수에서 this는 스트릭트 모드가 아닐때는 window, 스트릭트에서는 undefined이며
// 함수가 객체 메서드로 호출되었을 때 this는 해당 객체이다.
// 하지만 클로저를 작성하는 방식때문에 이를 분명히 알기는 어렵다.
const name = "The Window"
const object = {
  name: "My Object",
  getNameFunc: function(){
    return function() {
      return this.name
    }
  }
}
console.log(object.getNameFunc()()) // undefined

