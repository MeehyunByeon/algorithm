function solution(s) {
    let answer = '';
    
    let min;
    let max;
    
    let arr = s.split(' ');
    let len = arr.length;
    
    for(let i = 0; i < len; i++) {
        let temp = parseInt(arr[i]);
        if(i == 0) {
            min = temp;
            max = temp;
        }
        if(min > temp) min = temp;
        if(max < temp) max = temp;
    }
    
    return min + " " + max;
}