function solution(price) {
    let answer = price;
    if(price >= 500000) answer *= 80/100;
    else if(price >= 300000) answer *= 90/100;
    else if(price >= 100000) answer *= 95/100;
    return parseInt(answer);
}