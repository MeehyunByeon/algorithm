const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = input[0];

for(let i = 1; i <= n; i++) {
    let arr = [...input[i].toString().trim().split(' ')];
    let len = arr[0];
    let sum = 0;
    
    arr.forEach(num => sum += parseInt(num));
    sum -= len;
    avg = sum / len;

    let cnt = 0;
    
    for(let j = 1; j <= len; j++) if(avg < parseInt(arr[j])) cnt++;

    console.log((cnt/len*100).toFixed(3)+"%");
}