function solution(numbers) {
    let answer = numbers[0] * numbers[1];
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length; j++) {
            if(i != j && numbers[i]*numbers[j] > answer) answer = numbers[i]*numbers[j]
        }
    }
    return answer;
}