const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let n = 1;
for(let i = 1; i <= input; i++) n *= i;
console.log(n);