const [n, ...num] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = [...num[0]];
let answer = 0;

for(let i = 0; i < n; i++) answer += parseInt(arr[i]);
console.log(answer);