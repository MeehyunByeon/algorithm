function solution(n_str) {
    let answer = '';
    let stop = n_str[0] == "0" ? false : true;
    for(let i of n_str) {
        if(i != '0') stop = true;
        if(stop) answer += i;
    }
    return answer;
}