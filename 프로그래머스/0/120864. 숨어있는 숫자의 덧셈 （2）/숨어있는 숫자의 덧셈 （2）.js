function solution(my_string) {
    let answer = 0;
    let nums = my_string.match(/\d+/g);
    if(nums != null) for(let i of nums) answer += parseInt(i);
    return answer;
}