let [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v => +v);

for(let i = n-1; i > -1; i--) {
    let max = i;
    for(let j = i-1; j > -1; j--) {
        if(arr[max] < arr[j]) {
            max = j;
        }
    }
    let temp = arr[i];
    arr[i] = arr[max];
    arr[max] = temp;
}

for(let a = 0; a < n; a++) console.log(arr[a]);