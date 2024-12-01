function solution(n) {
    let i = 1;
    let cnt = 0;
    for(; ; i++) {
        if(i%3 != 0 && !(i.toString().includes("3"))) cnt++;
        if(cnt == n) break;
    }
    return i;
}