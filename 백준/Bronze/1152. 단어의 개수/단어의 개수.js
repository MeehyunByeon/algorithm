const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let len = input.length;
let cnt = input.length;

for(let i = 0; i < len; i++) if(input[i].length == 0) cnt--;
console.log(cnt);