const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i of arr) {
    let temp = [...i];
    let sum = 0;
    let cnt = 1;
    for(let j of temp) {
        if(j == 'O') {
            sum += cnt;
            cnt++;
        }
        else {
            sum += 0;
            cnt = 1;
        }
    }
    console.log(sum);
}