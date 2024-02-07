function solution(my_strings, parts) {
    let answer = '';
    let len = my_strings.length;
    for(let i = 0; i < len; i++) {
        answer += my_strings[i].substring(parts[i][0], parts[i][1]+1);
    }
    return answer;
}