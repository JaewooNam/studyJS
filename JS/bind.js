// 새 함수 인스턴스를 만드는데 그 this는 bind()에 전달된 값.

window.color = 'red'
const o = { color: 'blue' }

function sayColor() {
  console.log(this.color)
}

const objectSayColor = sayColor.bind(o)
objectSayColor() // blue
//