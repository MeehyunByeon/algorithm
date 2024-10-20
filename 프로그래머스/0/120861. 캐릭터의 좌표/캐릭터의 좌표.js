function solution(keyinput, board) {
    let answer = [0, 0];
    let x = parseInt(board[0] / 2);
    let y = parseInt(board[1] / 2);
    let obj = {
        "up": [0, 1],
        "down": [0, -1],
        "left": [-1, 0],
        "right": [1, 0],
    }
    for(let i of keyinput) {
        let xx = answer[0] + obj[i][0];
        let yy = answer[1] + obj[i][1];
        if(-x <= xx && xx <= x) answer[0] = xx;
        if(-y <= yy && yy <= y) answer[1] = yy;
    }
    return answer;
}