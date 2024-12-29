function solution(my_string, alp) {
    let answer = '';
    for(let i of my_string) answer += i==alp ? alp.toUpperCase() : i;
    return answer;
}