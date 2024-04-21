function solution(arr)
{
    let answer = [];
    for(let i = 0; i < arr.length; i++) {
        if(i != arr.length-1 && arr[i] != arr[i+1]) answer.push(arr[i]);
        else if (i == arr.length-1) answer.push(arr[i]);
    }
    return answer;
}