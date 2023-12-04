function solution(cards1, cards2, goal) {
    let answer = '';
    let idx1 = 0;
    let idx2 = 0;
    let len_goal = goal.length
    
    for(let i = 0; i < len_goal; i++) {
        if(cards1[idx1] == goal[i]) idx1++;
        else if(cards2[idx2] == goal[i]) idx2++;
        else break;
        
        answer = i == len_goal-1 ? "Yes" : "No";
    }
    return answer;
}