function solution(myString) {
    let answer = '';
    for(let i of myString) answer += i=='a' ? i.toUpperCase() : (i =='A' ? 'A' : i.toLowerCase());
    return answer;
}