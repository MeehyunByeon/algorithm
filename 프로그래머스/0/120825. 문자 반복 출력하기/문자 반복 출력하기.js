function solution(my_string, n) {
    return my_string.split("").reduce((a, c) => a + c.repeat(n), "");
}