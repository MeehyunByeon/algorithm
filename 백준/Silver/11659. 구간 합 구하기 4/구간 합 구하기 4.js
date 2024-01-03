const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [len, n] = input[0].trim().split(' ');
n = parseInt(n) + 2;

let total = 0;
let sumArr = [0];
let arr = input[1].trim().split(' ').map(v => {
    +v;
    total += +v;
    sumArr.push(total);
});

let result = [];
for(let i = 2; i < n; i++) {
    let [a, b] = input[i].trim().split(' ');
    result.push(sumArr[b]- sumArr[a-1]);
}
console.log(result.map(v => v).join("\n"));