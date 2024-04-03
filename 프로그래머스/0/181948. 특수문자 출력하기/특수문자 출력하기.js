const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    console.log(String.fromCharCode(33, 64, 35, 36, 37, 94, 38, 42, 40, 92, 39, 34, 60, 62, 63, 58, 59));
});