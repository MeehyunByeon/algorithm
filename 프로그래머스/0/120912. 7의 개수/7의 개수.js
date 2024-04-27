function solution(array) {
    let answer = 0;
    let arr = array.join("").split("")
    for(let i of arr) if(i==7) answer++;
    return answer;
}