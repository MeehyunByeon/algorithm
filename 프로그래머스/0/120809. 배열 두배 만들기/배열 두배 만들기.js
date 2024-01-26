function solution(numbers) {
    numbers.forEach((num, idx) => numbers[idx] = num * 2);
    return numbers;
}