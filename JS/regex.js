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





