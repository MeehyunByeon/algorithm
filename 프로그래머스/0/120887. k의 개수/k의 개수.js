function solution(i, j, k) {
    let answer = 0;
    for(let num = i; num <= j; num++) {
        let nums = num.toString().split("");
        for(let number of nums) if(parseInt(number) == k) answer++;
    }
    return answer;
}