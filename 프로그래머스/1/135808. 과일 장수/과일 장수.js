function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b) => b-a);
    
    let len = score.length;
    let cnt = 0, sum = 0, min = k;
    for(let i = 0; i < len; i++) {
        cnt++;
        if(min > score[i]) min = score[i]
        if(cnt == m) {
            answer += min * m;
            min = k;
            cnt = 0;
        }
    }
    return answer;
}