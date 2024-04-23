function solution(array, n) {
    let answer = array[0];
    let near = Math.abs(array[0]-n);
    for(let i of array) {
        if(Math.abs(i-n) < near) {
            near = Math.abs(i-n);
            answer = i;
        }
        else if(Math.abs(i-n) == near) answer = answer > i ? i : answer;
    }
    return answer;
}