function solution(my_string) {
    let answer = 0;
    for(let i of my_string) {
        if(parseInt(i)) answer += parseInt(i);
    }
    return answer;
}