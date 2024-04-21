function solution(price, money, count) {
    let needed = price;
    for(let i = 2; i <= count; i++) needed += price*i;
    return needed-money >= 0 ? needed-money : 0;
}