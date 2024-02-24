function solution(myString, pat) {
    let answer = 0;
    for(let i of myString) {
        if(i == "A") answer += "B";
        else answer += "A";
    }
    return answer.includes(pat) ? 1 : 0;
}