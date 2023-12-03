function solution(n, m, section) {
    let answer = 0;
    let cur = 0;
    let len_section = section.length;
    
    for(let i = 0; i < len_section; i++) {
        if(section[i] > cur) {
            cur = section[i] + m - 1;
            answer++;
        }
    }

  return answer;
}