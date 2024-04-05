function solution(arr, queries) {
    let answer = [];
    for(let [s, e, k] of queries) {
        let num = -1;
        let sortedArr = arr.slice(s, e+1).sort((a, b) => a-b);
        for(let i of sortedArr) {
            if(k < i) {
                num = i;
                break;
            }
        }
        answer.push(num);
    }
    return answer;
}