function solution(myStr) {
    let answer = myStr.split(/ |a|b|c/).filter((e)=> e);
    return answer.length > 0 ? answer : ["EMPTY"];
}