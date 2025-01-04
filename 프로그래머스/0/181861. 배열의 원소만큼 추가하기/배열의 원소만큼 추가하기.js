function solution(arr) {
    let answer = [];
    for(let i = 0; i < arr.length; i++) answer = [...answer, ...new Array(arr[i]).fill(arr[i])];
    return answer;
}