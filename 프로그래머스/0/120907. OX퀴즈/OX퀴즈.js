function solution(quiz) {
    let answer = [];
    for(let str of quiz) {
        let arr = str.split(" ");
        if(arr[1]=="+")
            answer.push(parseInt(arr[0])+parseInt(arr[2]) == parseInt(arr[4]) ? "O" : "X");
        else
            answer.push(parseInt(arr[0])-parseInt(arr[2]) == parseInt(arr[4]) ? "O" : "X");
    }
    return answer;
}