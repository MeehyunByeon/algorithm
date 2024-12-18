function solution(array, n) {
    return array.reduce((a, c) => c==n ? a+1 : a,0);
}