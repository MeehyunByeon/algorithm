const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    let answer = '';
    for(let i of input[0]) {
        if(i.toUpperCase() == i) answer += i.toLowerCase();
        else answer += i.toUpperCase();
    }
    console.log(answer);
});