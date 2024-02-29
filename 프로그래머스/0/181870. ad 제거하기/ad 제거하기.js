function solution(strArr) {
    let answer = [];
    for(let i of strArr) if(!i.includes("ad")) answer.push(i);
    return answer;
}