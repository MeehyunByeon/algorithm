function solution(myString) {
    let answer = '';
    for(let i of myString) {
        if(i == 'a') answer += i.toUpperCase();
        else answer += i == 'A' ? 'A' : i.toLowerCase();
    }
    return answer;
}