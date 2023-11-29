function solution(n) {
    let answer = 0;
    
    for(let i = n - 1; i > 0; i--) {
        if(n%i == 1) answer = i;
    }
    return answer;
}