function solution(myString) {
    let answer = [];
    for(let i of myString.split('x')) answer.push(i.length);
    return answer;
}