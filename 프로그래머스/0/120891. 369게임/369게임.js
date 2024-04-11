function solution(order) {
    let answer = 0;
    for(let i of order.toString().split("")) {
        if(i != 0 && i % 3 == 0) answer++;
    }
    return answer;
}