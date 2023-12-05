function solution(s, skip, index) {
    let answer = '';
    let len_s = [...s].length;
    const arr = Array(26).fill().map((v, i) => String.fromCharCode(i + 97));
    
    for(let i = 0; i < len_s; i++) {
        let str = arr.indexOf(s[i]);
        let j = 0;
        let cnt = str+1 == 26 ? 0 : str+1;
        
        while(j < index) {
            if(skip.includes(arr[cnt])) cnt = cnt+1 == 26 ? 0 : cnt+1;
            else {
                j++;
                cnt = cnt+1 == 26 ? 0 : cnt+1;
            }
        }
        let result = cnt == 0 ? 25 : cnt-1;
        answer += arr[result];
    }
    return answer;
}