function solution(my_string, alp) {
    let answer = '';
    for(let i of my_string) {
        if(i==alp) answer += alp.toUpperCase();
        else answer += i;
    }
    return answer;
}