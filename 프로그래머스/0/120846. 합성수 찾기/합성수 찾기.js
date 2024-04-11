function solution(n) {
    let answer = 0;
    for(let i = n; i > 0; i--) {
        for(let j = 2; j <= n; j++) {
            if(i!= j && i%j == 0) {
                answer++;
                break;
            }
        }
    }
    return answer;
}