function solution(numbers, direction) {
    let answer = [];
    if(direction == "right") {
        for(let i = 0; i < numbers.length-1; i++) answer.push(numbers[i])
        answer.unshift(numbers[numbers.length-1])
    }
    else {
        for(let i = 1; i < numbers.length; i++) answer.push(numbers[i])
        answer.push(numbers[0])
    }
    return answer;
}