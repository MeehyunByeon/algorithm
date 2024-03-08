function solution(numbers) {
    return 45 - numbers.reduce((sum, num) => {return sum += num}, 0);
}