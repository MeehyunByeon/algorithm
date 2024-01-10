function solution(num_list, n) {
    let answer = [num_list[0]];
    let len = num_list.length;
    for(let i = 1; i < len; i++) {
        if(i%n == 0) answer.push(num_list[i]);
    }
    return answer;
}