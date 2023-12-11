function solution(s) {
    let answer = 0;
    let arr = [];
    
    let len = s.length;
    let stop = false;
    
    let same = 1;
    let notSame = 0;
    let r = 0;
    
    for(let i = 0; i < len ; i++) {
        for(let j = i+1; j < len; j++) {
            if(s[i] == s[j]) same++;
            else notSame++;
            if(same == notSame) {
                i = j;
                answer++;
                break;
            }
            
            if(j == len-1) i = len-1;
            
        }
        if(i == len-1 && same != notSame) r = true;
        same = 1; notSame = 0;
    }
    return r == true ? answer+1 : answer;
}