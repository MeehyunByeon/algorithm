function solution(s) {
    let answer = true;
    let arr = s.split("");
    if(s.length === 4 || s.length === 6) {
        for(let i of arr) {
            if(isNaN(i)) {
                answer = false;
                break;
            }
        }
    }
    else answer = false;
    return answer;
}