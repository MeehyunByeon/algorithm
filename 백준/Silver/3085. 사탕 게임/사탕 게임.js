let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = input[0]; // 보드의 크기 N
let initArr = new Array(); // 초기에 입력받는 사탕 보드 배열 선언

// 사탕 보드 입력받기
for(let i = 0; i < N; i++) {
    let str = input[i+1].split('');
    let tempArr = [...str];
    initArr.push(tempArr);
}

// 사탕의 색이 다른 인접한 두 칸 교환
const swapCandy = (arr) => {
    let candy = countCandy(arr);
    for(let a = 0; a < N; a++) {
        for(let b = 0; b < N; b++) {
            if(a-1 > -1 && arr[a-1][b] != arr[a][b]) {
                let swapArr = arr.map(v => [...v]);
                let temp = swapArr[a-1][b]
                swapArr[a-1][b] = swapArr[a][b];
                swapArr[a][b] = temp;
                candy = candy > countCandy(swapArr) ? candy : countCandy(swapArr);
            }
            if(b-1 > -1 && arr[a][b-1] != arr[a][b]) {
                let swapArr = arr.map(v => [...v]);
                let temp = swapArr[a][b-1]
                swapArr[a][b-1] = swapArr[a][b];
                swapArr[a][b] = temp;
                candy = candy > countCandy(swapArr) ? candy : countCandy(swapArr);
            }
            if(a+1 < N && arr[a+1][b] != arr[a][b]) {
                let swapArr = arr.map(v => [...v]);
                let temp = swapArr[a+1][b]
                swapArr[a+1][b] = swapArr[a][b];
                swapArr[a][b] = temp;
                candy = candy > countCandy(swapArr) ? candy : countCandy(swapArr);
            }
            if(b+1 < N && arr[a][b+1] != arr[a][b]) {
                let swapArr = arr.map(v => [...v]);
                let temp = swapArr[a][b+1]
                swapArr[a][b+1] = swapArr[a][b];
                swapArr[a][b] = temp;
                candy = candy > countCandy(swapArr) ? candy : countCandy(swapArr);
            }
        }
    }
    return candy;
}

// 사탕 카운트 함수
const countCandy = (arr) => {
    let count = 1;

    // 행 사탕 카운트
    for(let a = 0; a < N; a++) {
        let cnt = 1, temp = 1;
        for(let b = 0; b < N-1; b++) {
            if(arr[a][b] == arr[a][b+1]) cnt++;
            else {
                if(cnt > temp) temp = cnt;
                cnt = 1;
            }
        }
        cnt = cnt > temp ? cnt : temp;
        if(cnt > count) count = cnt;
    }

    // 열 사탕 카운트
    for(let a = 0; a < N; a++) {
        let cnt = 1, temp = 1;
        for(let b = 0; b < N-1; b++) {
            if(arr[b][a] == arr[b+1][a]) cnt++;
            else {
                if(cnt > temp) temp = cnt;
                cnt = 1;
            }
        }
        cnt = cnt > temp ? cnt : temp;
        if(cnt > count) count = cnt;
    }
    return count;
}

console.log(swapCandy(initArr));