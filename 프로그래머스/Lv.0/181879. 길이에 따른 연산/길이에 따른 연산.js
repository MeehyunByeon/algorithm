function solution(num_list) {
    let answer = 1;
    if(num_list.length > 10) for(let i of num_list) answer += i;
    else for(let i of num_list) answer *= i;
    return num_list.length > 10 ? answer - 1 : answer;
}