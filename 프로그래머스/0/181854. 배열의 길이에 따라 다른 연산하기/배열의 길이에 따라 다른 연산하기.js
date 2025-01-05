function solution(arr, n) {
    let answer = [];
    let len = arr.length;
    if(len%2==0) {
        for(let i = 0; i < len; i++) i%2==0 ? answer.push(arr[i]) : answer.push(arr[i]+n);
    }
    else {
        for(let i = 0; i < len; i++) i%2==0 ? answer.push(arr[i]+n) : answer.push(arr[i]);
    }
    return answer;
}