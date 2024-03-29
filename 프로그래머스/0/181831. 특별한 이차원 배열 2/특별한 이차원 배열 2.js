function solution(arr) {
    let answer = 1;
    let len = arr.length;
    for(let i = 0; i < len; i++) {
        if(answer) {
            for(let j = 0; j < len; j++) {
                console.log(arr[i][j], arr[j][i])
                if(arr[i][j]!=arr[j][i]) {
                    answer = 0;
                    break;
                } 
            }
        }
        else break;
    }
    return answer;
}