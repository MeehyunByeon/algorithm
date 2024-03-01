function solution(myString) {
    let answer = '';
    for(let i = 0; i < myString.length; i++) {
        if(myString.charCodeAt(i) < 108) answer += "l";
        else answer += myString[i];
    }
    return answer;
}