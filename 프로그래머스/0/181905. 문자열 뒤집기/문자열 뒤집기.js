function solution(my_string, s, e) {
    let a = my_string.substring(0, s);
    let b = my_string.substring(s, e+1).split("").reverse().join("");
    let c = my_string.substring(e+1, my_string.length);
    return a + b + c;
}