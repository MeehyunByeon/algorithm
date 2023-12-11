function solution(s) {
    let answer = [];
    let arr = [];
    let len = s.length;
    
    for(let i = 0; i < len; i++) {
        let temp = arr.lastIndexOf(s[i]) == -1 ? -1 : i - arr.lastIndexOf(s[i]);
        arr.push(s[i]);
        answer.push(temp);
    }
    return answer;
}