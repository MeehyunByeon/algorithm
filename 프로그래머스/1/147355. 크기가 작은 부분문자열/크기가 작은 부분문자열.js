function solution(t, p) {
    let answer = 0;
    
    // 1자리 => 0, 2자리 => -1, 3자리 => -2
    let len_p = p.length;
    let len_t = t.length-len_p+1;
    for(let i = 0; i < len_t; i++) {
        let temp = t.substr(i, len_p);
        if(parseInt(temp) <= parseInt(p)) answer++;
    }
    return answer;
}