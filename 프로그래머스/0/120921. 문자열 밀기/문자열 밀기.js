function solution(A, B) {
    let answer = 0;
    let aArr = A.split("");
    let bArr = B.split("");
    if(A==B) return 0;
    else {
        for(let i of aArr) {
            let str = aArr.pop();
            aArr.unshift(str);
            answer++;
            if(JSON.stringify(aArr) === JSON.stringify(bArr)) break;
        }
        return A.length == answer ? -1 : answer;
    }
}