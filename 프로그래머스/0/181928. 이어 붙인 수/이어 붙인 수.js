function solution(num_list) {
    let sumEven = '';
    let sumOdd = '';
    for(let i of num_list) {
        if(i%2==0) sumEven += i;
        else sumOdd += i;
    }
    return parseInt(sumEven) + parseInt(sumOdd);
}