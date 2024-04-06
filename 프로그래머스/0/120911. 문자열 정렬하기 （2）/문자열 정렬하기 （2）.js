function solution(my_string) {
    let answer = '';
    return my_string.toLowerCase().split("").sort().join("");
}