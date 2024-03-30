const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let answer = '';
    answer += input[0].toString() + " + ";
    answer += input[1].toString() + " = ";
    answer += (parseInt(input[0]) + parseInt(input[1])).toString()
    console.log(answer);
});