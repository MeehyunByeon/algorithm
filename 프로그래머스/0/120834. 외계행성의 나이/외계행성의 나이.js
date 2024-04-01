function solution(age) {
    let answer = '';
    let strAge = age.toString();
    for(let i of strAge) answer += String.fromCodePoint(parseInt(i)+97);
    return answer;
}