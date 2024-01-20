function solution(s) {
    let answer = '';
    let len = s.length;
    let space = true;
    
    for(let i of s) {
        let temp = i;
        if(typeof(i) == "number") space = false;
        else if(i == " ") space = true;
        else {
            if(space == true) {
                temp = temp.toUpperCase();
                space = false;
            }
            else temp = temp.toLowerCase();
        }
        answer += temp;
    }
    return answer;
}