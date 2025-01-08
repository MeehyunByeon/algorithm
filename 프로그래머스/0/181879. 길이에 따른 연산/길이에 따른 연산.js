function solution(num_list) {
    let answer = num_list.length > 10 ? 0 : 1;
    return num_list.reduce(
        (a, c) => { return num_list.length > 10 ? a += c : a *= c; }, answer);
}