function solution(my_string, queries) {
    let answer = my_string.split("");
    for(let [s, e] of queries) {
        let part = answer.slice(s, e+1).reverse();
        let cnt = 0;
        for(let i = s; i < e+1; i++) {
            answer[i] = part[cnt];
            cnt++;
        }
    }
    return answer.join("");
}