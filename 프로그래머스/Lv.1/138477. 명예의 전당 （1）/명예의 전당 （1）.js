function solution(k, score) {
    let answer = [score[0]];
    let len = score.length;
    let arr = [score[0]];
    for(let i = 1; i < len; i++) {
        arr.push(score[i]);
        arr.sort((a, b) => b-a);
        arr = arr.slice(0, k);
        answer.push(arr[arr.length-1]);
    }
    return answer;
}