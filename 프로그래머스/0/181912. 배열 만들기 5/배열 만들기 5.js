function solution(intStrs, k, s, l) {
    let answer = [];
    for(let i of intStrs) {
        let num = parseInt(i.substr(s, l));
        if(num > k) answer.push(num)
    }
    return answer;
}