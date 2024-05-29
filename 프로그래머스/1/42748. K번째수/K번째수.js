function solution(array, commands) {
    let answer = [];
    for(let [i, j, k] of commands) {
        let arr = array.slice(i-1, j).sort((a, b) => a-b);
        answer.push(arr[k-1]);
    }
    return answer;
}