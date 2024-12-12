function solution(myString, pat) {
    let strs = myString.split("");
    let len = myString.length - pat.length + 1;
    let arr = [];
    for(let i = 0; i < len; i++) arr.push(strs.slice(i, i+pat.length).join(""));
    return arr.filter((e) => e == pat).length;
    // return answer;
}