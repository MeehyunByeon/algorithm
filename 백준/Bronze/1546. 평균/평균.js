const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(v => +v);

let top = arr[0];
let result = 0;

for(let i = 1; i < n; i++) if(arr[i] > top) top = arr[i];
for(let j = 0; j < n; j++) result += arr[j]/top*100;

console.log(result/n);