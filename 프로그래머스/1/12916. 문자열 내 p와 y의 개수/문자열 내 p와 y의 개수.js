function solution(s){
    let answer = 0;
    for(let i of s) {
        if(i == "p" || i == "P") answer--;
        else if(i == "y" || i == "Y") answer++;
    }
    return answer == 0 ? true : false;
}