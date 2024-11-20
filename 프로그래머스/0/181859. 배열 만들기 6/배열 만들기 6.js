function solution(arr) {
    let stk = [];
    for(let i = 0; i < arr.length; i++) {
        if(stk.length == 0) stk.push(arr[i]);
        else stk[stk.length-1]==arr[i] ? stk.pop() : stk.push(arr[i]);
    }
    if(stk.length==0) stk.push(-1);
    return stk;
}