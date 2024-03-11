function solution(arr) {
    let min = 0;
    for(let i = 1; i < arr.length; i++) {
        if(arr[min] > arr[i]) min = i;
    }
    arr.splice(min, 1)
    return arr.length > 0 ? arr : [-1];
}