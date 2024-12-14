function solution(n) {
    return  [...new Array(n)].map((_, i) => i + 1).reduce((a,c) => a += c%2==0 ? c : 0, 0)
}