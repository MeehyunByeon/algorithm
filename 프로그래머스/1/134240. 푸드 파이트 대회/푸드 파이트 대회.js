function solution(food) {
    let answer = '';
    let len_food = food.length;
    
    for(let i = 1; i < len_food; i++) {
        let temp = food[i]%2 == 1 ? food[i]/2 - 0.5 : food[i]/2;
        for(let j = 0; j < temp; j++) {
            answer+=i;
        }
    }
    answer+=0;    
    for(let i = len_food-1; i > 0; i--) {
        let temp = food[i]%2 == 1 ? food[i]/2 - 0.5 : food[i]/2;
        for(let j = 0; j < temp; j++) {
            answer+=i;
        }
    }
    
    return answer;
}