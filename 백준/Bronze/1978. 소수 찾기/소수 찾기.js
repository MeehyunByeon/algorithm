const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
let cnt = 0;

for(let i = 0; i < n; i++) {
    let temp = arr[i];
    if(temp != 1) {
        for(let j = 2; j <= temp; j++) {
            if(temp != j && temp % j == 0) break;
            if(j == temp) cnt++;
        }
    }
}

console.log(cnt);