function solution(numbers) {
    let answer = [];
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length; j++)
            if(i!=j) answer.push(numbers[i]+numbers[j]);
    }
    return Array.from(new Set(answer)).sort((a,b) => a-b);
}