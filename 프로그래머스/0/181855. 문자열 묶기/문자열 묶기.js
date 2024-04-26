function solution(strArr) {
    let answer = 0;
    let obj = {};
    for(let i of strArr) {
        if(obj.hasOwnProperty(i.length)) obj[i.length]++;
        else obj[i.length] = 1;
    }
    for(let i in obj) if(obj[i] > answer) answer = obj[i];
    return answer;
}