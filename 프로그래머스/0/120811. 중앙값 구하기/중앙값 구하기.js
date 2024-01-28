function solution(array) {
    array.sort((a, b) => a - b);
    let num = array.length%2 == 0 ? array.length/2 : parseInt(array.length/2)+1
    return array[num-1];
}