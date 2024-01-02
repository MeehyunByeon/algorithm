const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(v => +v);

let top = arr[0];
let total = 0;

for(let i of arr) {
    total += i;
    if(i > top) top = i;
}

console.log(total/top*100/n);