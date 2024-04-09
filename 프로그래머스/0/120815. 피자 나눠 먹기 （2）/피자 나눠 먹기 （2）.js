function solution(n) {
    let answer = 0;
    for(let i = 1; i < 100; i++) {
        // n=10 => 6x5%10 = 0 // 30%10 = 0
        if(6*i%n == 0) {
            answer = i;
            break;
        }
    }
    return answer;
}