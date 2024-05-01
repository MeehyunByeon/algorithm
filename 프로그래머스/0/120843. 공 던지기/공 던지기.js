function solution(numbers, k) {
    let answer = 0;
    for(let i = 1; i <= k; i++) {
        if(i==k) {
            answer = numbers[0];
            break;
        }
        let a = numbers.shift();
        let b = numbers.shift();
        numbers.push(a);
        numbers.push(b);
    }
    return answer;
}