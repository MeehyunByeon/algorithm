function solution(str1, str2) {
    let answer = '';
    let len = str1.length;
    
    for(let i = 0; i < len; i++) {
        answer += str1[i];
        answer += str2[i];
    }
    return answer;
}