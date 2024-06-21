function solution(arr) {
    for(let i = 1; i < 11; i++) {
        if(arr.length == 2**i) break;
        if(2**i < arr.length && arr.length < 2**(i+1)) {
            for(let j = arr.length; j < 2**(i+1); j++) arr.push(0);
            break;
        }
    }
    return arr;
}