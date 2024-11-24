function solution(arr, k) {
    let answer = [];
    for(let i = 0; i < arr.length; i++)
        if(!answer.includes(arr[i])) answer.push(arr[i]);
    if(answer.length < k) 
        for(let i = answer.length; i < k; i++) answer[i] = -1;
    return answer.slice(0, k);
}