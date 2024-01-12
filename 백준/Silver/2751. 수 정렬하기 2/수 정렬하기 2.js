const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v => +v);
arr.sort((a, b) => a-b);
console.log(arr.map(v => v).join("\n"));