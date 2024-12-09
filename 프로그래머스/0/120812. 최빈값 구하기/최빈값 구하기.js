function solution(array) {
    let answer = 0;
    let only = true;
    let max = 0;
    let obj = {};
    for(let i of array) {
        if(obj.hasOwnProperty(i)) obj[i] = obj[i]+1;
        else obj[i] = 1;
    }
    for(let [a, b] of Object.entries(obj)) {
        if(b > max) {
            only = true;
            answer = parseInt(a);
            max = b;
        }
        else if(b == max) {
            only = false;
            answer = parseInt(a);
        }
    }
    return only ? answer : -1;
}