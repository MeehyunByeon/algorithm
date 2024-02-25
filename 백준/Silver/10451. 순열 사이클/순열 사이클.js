const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const tc = input[0]; // 테스트 케이스 개수

let cnt = 0; // 테스트 케이스만큼 for문을 실행
for(let i = 1; cnt < tc ; i+=2) {
    const n = input[i]; // 순열의 크기
    
    const graph = Array.from(Array(n+1), () => []);
    const visited = new Array(n+1).fill(false);
    let cycle = 0; // 사이클의 개수
    
    const arr = input[i+1].toString().trim().split(/\s/).map((num, idx) => graph.push([idx+1, parseInt(num)]));
    cnt++; // 테스트 케이스 수행할 때마다 +1

    visited[0] = true;
    function dfs(start) {
        for(let end of graph[start]) {
            if(!visited[end]) {
                visited[end] = true;
                dfs(end);
            }
        }
    }

    for(let i = 1; i <= n; i++) {
      if (!visited[i]) {
        visited[i] = true;
        cycle++;
        dfs(i);
      }
    }
    
    console.log(cycle);
}