function solution(num_list) {
    let len = num_list.length;
    for(let i = len-1; i > -1; i--) {
        let max = num_list[i];
        let idx = i;
        for(let j = 0; j < i; j++) {
            if(num_list[j] > max) {
                idx = j;
                max = num_list[j];
            }
        }
        let temp = num_list[i];
        num_list[i] = max;
        num_list[idx] = temp;
    }
    return num_list.slice(0, 5);
}