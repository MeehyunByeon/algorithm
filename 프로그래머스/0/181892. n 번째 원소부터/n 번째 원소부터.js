function solution(num_list, n) {
    let answer = [];
    let len = num_list.length;
    for(let i = n-1; i < len; i++) answer.push(num_list[i]);
    return answer;
}