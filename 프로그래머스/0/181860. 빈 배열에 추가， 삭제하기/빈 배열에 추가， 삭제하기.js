function solution(arr, flag) {
    let answer = [];
    for(let i = 0; i < flag.length; i++) {
        let num = arr[i];
        if(flag[i]) {
            for(let j = 0; j < num * 2; j++) answer.push(num);
        }
        else {
            for(let j = 0; j < num; j++) answer.pop();
        }
    }
    return answer;
}