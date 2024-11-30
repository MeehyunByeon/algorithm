function solution(spell, dic) {
    let answer = 0;
    for(let i of dic) {
        let cnt = spell.length;
        for(let j of spell) {
            if(i.includes(j)) cnt--;
            else break;
        }
        if(cnt == 0) answer++;
    }
    return answer > 0 ? 1 : 2;
}