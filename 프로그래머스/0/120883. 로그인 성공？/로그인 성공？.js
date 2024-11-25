function solution(id_pw, db) {
    let answer = "fail";
    for(let [id, pw] of db) {
        if(id == id_pw[0] && pw == id_pw[1]) answer = "login";
        else if(id == id_pw[0] && pw != id_pw[1]) answer = "wrong pw";
    }
    return answer;
}