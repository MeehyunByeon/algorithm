function solution(todo_list, finished) {
    let answer = [];
    let len = todo_list.length;
    for(let i = 0; i < len; i++) {
        if(!finished[i]) answer.push(todo_list[i]);
    }
    return answer;
}