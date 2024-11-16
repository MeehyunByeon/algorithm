function solution(num_list) {
    let answer = 0;
    for(let i of num_list) {
        let num = i;
        while(true) {
            if(num == 1) break;
            else {
                num = num%2==0 ? num / 2 : (num-1) / 2;
                answer++;
            }
        }
    }
    return answer;
}