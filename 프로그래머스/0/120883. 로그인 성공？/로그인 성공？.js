function solution(id_pw, db) {
    let answer = "fail";
    for(let [id, pw] of db)
        if(id==id_pw[0]) answer = pw==id_pw[1] ? "login" : "wrong pw";
    return answer;
}