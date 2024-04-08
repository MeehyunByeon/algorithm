function solution(number) {
    return number.split("").reduce((accumulator, currentValue) => {
          return accumulator + parseInt(currentValue)
        }, 0) % 9;
}