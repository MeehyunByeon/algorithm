function solution(sizes) {
    let mX = 0;
    let mH = 0;
    for(let s of sizes) {
        s.sort((a, b) => a-b);
        if(s[0] > mX) mX = s[0];
        if(s[1] > mH) mH = s[1];
    }
    return mX * mH;
}