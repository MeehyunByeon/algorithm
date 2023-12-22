function solution(ingredient) {
    let answer = 0;
    let tempArr = [];
    let len = ingredient.length;
    
    for(let i = 0; i < len; i++) {
        tempArr.push(ingredient[i])
        let point = tempArr.length-1;
        if(tempArr[point] == 1 && tempArr[point-1] == 3 && tempArr[point-2] == 2 && tempArr[point-3] == 1) {
            tempArr.pop();
            tempArr.pop();
            tempArr.pop();
            tempArr.pop();
            answer++;
        }
    }
    return answer;
}