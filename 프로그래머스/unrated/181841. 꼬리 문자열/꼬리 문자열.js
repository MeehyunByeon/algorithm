function solution(str_list, ex) {
    let answer = '';
    let len = str_list.length;
    for(let i = 0; i < len; i++) {
        if(!str_list[i].includes(ex)) answer += str_list[i];
    }
    return answer;
}