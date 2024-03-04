function solution(n) {
    let answer = 0;
    for(let i of n.toString().split('')) answer += parseInt(i);
    return answer;
}