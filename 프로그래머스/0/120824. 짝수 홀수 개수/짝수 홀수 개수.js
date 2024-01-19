function solution(num_list) {
    let answer = [0, 0];
    let len = num_list.length;
    for(let i = 0; i < len; i++) {
        if(num_list[i]%2==0) answer[0]++;
        else answer[1]++;
    }
    return answer;
}