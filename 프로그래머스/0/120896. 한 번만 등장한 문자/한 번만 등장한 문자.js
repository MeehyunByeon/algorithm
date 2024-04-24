function solution(s) {
    let answer = [];
    let obj = {};
    for(let i of s) {
        if(Object.keys(obj).includes(i)) obj[i]++;
        else obj[i] = 1;
    }
    for(let key in obj) {
        if(obj[key]==1) answer.push(key)
    }
    return answer.sort().join("");
}