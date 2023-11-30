function solution(players, callings) {
    let len_callings = callings.length;

    const obj = Object.fromEntries(
      players.map((value, index) => [value, index])
    );
    
    for(let i = 0; i < len_callings; i++) {
        let idx = obj[callings[i]];
        let temp = players[idx];
        let change = players[idx-1];
        players[idx] = players[idx-1];
        players[idx-1] = temp;
        obj[temp] = idx-1;
        obj[change] = idx;
    }
    
    return players;
}