function solution(n, k) {
    let answer = [];
    let len = n/k;
    for(let i = 1; i <= len; i++) answer.push(i*k);
    return answer;
}