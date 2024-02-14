function solution(num_list) {
    let a = 1;
    let b = 0;
    for(let i of num_list) {
        a *= i;
        b += i;
    }
    return a < b**2 ? 1 : 0;
}