function solution(num_str) {
    let arr = [...num_str];
    const len = arr.length;
    let sum = 0;
    for(let i = 0; i < len; i++)
        sum += parseInt(arr[i]);
    return sum;
}