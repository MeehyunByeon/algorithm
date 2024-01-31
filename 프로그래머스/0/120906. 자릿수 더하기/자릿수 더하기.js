function solution(n) {
    let answer = 0;
    let arr = n.toString().split("")
    for(let i of arr) answer += parseInt(i);
    return answer;
}