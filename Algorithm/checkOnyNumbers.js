/*
 * https://programmers.co.kr/learn/courses/30/lessons/12918
 * 
 * Find Only numbers
 */

function solution(s) {
  let answer = false
  if (s.length === 4 || s.length === 6) {
    if (s.match(/^[0-9]+$/)) {
      answer = true
    }
  }

  return answer
}
