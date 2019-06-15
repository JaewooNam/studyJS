// const expression = /pattern/flags
// pattern 부분에는 정규 표현식을 나타내는 식을 씀.
// 각 표현식은 플래그를 통해 해당 정규표현식이 어떻게 동작할지를 나타낸다

// 플래그에는 세 가지가 있다
// g- 전역 모드를 지정, 이 플래그를 지정하면 문자열에서 패턴을 찾는 즉시 종료하지 않고, 문자열 전체에서 동작함
// i- 대 소문자 비구분 모드를 지정, 지정하면 패턴을 찾을때 대소문자를 구분하지 않는다.
// m- 여러 줄 모드를 지정, 지정하면 텍스트의 줄 끝에 도달해도 멈추지않고 계속 패턴을 찾는다.

/*
* 모든 'at' 에 일치
*/
const pattern1 = /at/g

/*
 * 'bat'이나 'cat'중 처음나온것에 일치, 대소문자 구분 x 
 */
const pattern2 = /[bc]at/i

/*
 * 'at'으로 끝나는 세 글자에 모두 일치, 대소문자 구분 x
 */
const pattern3 = /.at/gi

/*
 * Use escape when use meta characters
 * If equals to [bat] in first, without upper/lowercase
 */
const metaPattern1 = /\[bc\]at/i

/*
 * 'at'으로 끝나는 세글자에 모두 일치, 대소문자 구분 없음
 */
const metaPattern2 = /.at/gi

/*
 * '.at'에 모두 일치, 대소문자 구분 없음
 */
const metaPattern3 = /\.at/gi


// exec method
// 일치하는 부분을찾을 수 없을때는 null 을 반환
// 테스트할 문자열을 매개변수로 받음

//  exec() method returns arrays, which are index (matched position) and input (parameters)
//  반환하는  첫번쨰 어레이에는 패턴에 일치하는 부분 전체이다, 다른 데이터는 표현식에서 캡처한 부분.

// 패턴에 캡처 그룹이 없다면 반환하는 배열에는 데이터가 단 하나만 존재

// test method
// 문자열 패턴이 일치하면 true, 아니면 false를 반환, 패턴에 일치하는지만 확인할때 사용


// RegExp
const text = 'This has been a short summer'
const pattern = /(.)hort/g

if (pattern.test(text)) {
  console.log(RegExp.input)
  console.log(RegExp.leftContext)
  console.log(RegExp.rightContext)
  console.log(RegExp.lastMatch)
  console.log(RegExp.lastParen)
  console.log(RegExp.multiline)

}


