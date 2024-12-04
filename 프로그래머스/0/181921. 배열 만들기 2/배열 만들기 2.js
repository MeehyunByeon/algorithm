function solution(l, r) {
    let answer = [];
    for(let i = l; i <= r; i++) {
        let str = i.toString().split("");
        let a = true;
        for(let num of str) {
            if(num != "0" && num != "5") {
                a = false;
                break;
            }
        }
        if(a) answer.push(i);
    }
    return answer.length == 0 ? [-1] : answer;
}