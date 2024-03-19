function solution(binomial) {
    let answer = 0;
    let arr = binomial.split(" ");
    switch(arr[1]) {
      case '+':
            answer = parseInt(arr[0]) + parseInt(arr[2]);
            break;

      case '-':
            answer = parseInt(arr[0]) - parseInt(arr[2]);
            break;
            
      case '*':
            answer = parseInt(arr[0]) * parseInt(arr[2]);
            break;
            
    }
    return answer;
}