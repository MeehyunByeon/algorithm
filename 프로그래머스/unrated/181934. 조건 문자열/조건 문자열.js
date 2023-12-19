function solution(ineq, eq, n, m) {
    let answer = 0;
    switch (eq) {
      case "=":
        answer = ineq == ">" ? n >= m : n <= m;
        break;
      case "!":
        answer = ineq == ">" ? n > m : n < m;
        break;
    }
            
    return answer == true ? 1 : 0;
}