function solution(rank, attendance) {
    let contest = [];
    let place = {};
    for(let i = 0; i < rank.length; i++) {
        if(attendance[i]) {
            contest.push(rank[i]);
            place[rank[i]] = i;
        }
    }
    contest.sort((a, b) => a-b);
    return place[contest[0]] * 10000 + place[contest[1]] * 100 + place[contest[2]];
}