function solution(n, k) {
    // return n * 12000 + k * 2000 - parseInt(n/10) * 2000;
    return n * 12000 + (k - parseInt(n/10)) * 2000;
}