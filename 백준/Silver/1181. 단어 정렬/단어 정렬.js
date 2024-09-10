const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const newArr = [...new Set(arr)];
newArr.sort((a, b) => a.length - b.length || a.localeCompare(b));
console.log(newArr.map(v => v).join("\n"));