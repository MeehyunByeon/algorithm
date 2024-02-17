function solution(cipher, code) {
    let answer = '';
    for(let i = 1; i*code <= cipher.length; i++) {
        answer+=cipher[i*code-1];
    }
    return answer;
}