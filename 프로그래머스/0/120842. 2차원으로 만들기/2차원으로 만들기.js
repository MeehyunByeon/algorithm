function solution(num_list, n) {
    let answer = [];
    let len = num_list.length/n;
    for(let i = 0; i < len; i++) {
        let arr = [];
        for(let j = 0; j < n; j++) {
            arr.push(num_list[0]);
            let pop = num_list.shift();
        }
        answer.push(arr);
    }
    return answer;
}