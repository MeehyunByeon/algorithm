function solution(arr1, arr2) {
    let answer = 0;
    if(arr1.length == arr2.length) {
        let sum1 = 0, sum2 = 0;
        for(let i of arr1) sum1 += i;
        for(let j of arr2) sum2 += j;
        answer = sum2 > sum1 ? -1 : (sum1==sum2 ? 0 : 1);
    }
    else answer = arr2.length > arr1.length ? -1 : 1;
    return answer;
}