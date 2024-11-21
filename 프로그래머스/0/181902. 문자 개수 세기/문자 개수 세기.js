function solution(my_string) {
    let answer = new Array(52).fill(0);
    for(let i of my_string) {
        let num = i.charCodeAt();
        num < 91 ? answer[num-65]++ : answer[num-71]++;
    }
    return answer;
}