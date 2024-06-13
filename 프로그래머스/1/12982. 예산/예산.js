function solution(d, budget) {
    let answer = 0;
    let sortedArr = d.sort((a, b) => a-b);
    for(let i = 0; i < d.length; i++) {
        if(budget - sortedArr[i] < 0) break;
        if(budget - sortedArr[i] >= 0) {
            budget -= sortedArr[i];
            answer++;
        }
    }
    return answer;
}