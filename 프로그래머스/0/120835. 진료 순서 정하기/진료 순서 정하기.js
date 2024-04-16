function solution(emergency) {
    let answer = [];
    // 비구조화 할당 => 객체나 배열 안의 갚을 가져다 쓸 수 있음
    let sorted = [...emergency].sort((a, b) => b-a);
    for(let i = 0; i < emergency.length; i++) {
        answer.push(sorted.indexOf(emergency[i])+1);
    }
    return answer;
}