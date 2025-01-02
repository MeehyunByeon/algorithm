function solution(numLog) {
    let answer = '';
    let len = numLog.length-1;
    for(let i = 0; i < len; i++) {
        let result = numLog[i+1]-numLog[i];
        switch(result) {
            case 1:
                answer+="w"
                break;
            case -1:
                answer+="s"
                break;
            case 10:
                answer+="d"
                break;
            case -10:
                answer+="a"
                break;
        }
    }

    return answer;
}