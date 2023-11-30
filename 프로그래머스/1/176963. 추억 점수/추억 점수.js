function solution(name, yearning, photo) {
    let answer = [];
    
    const nameObj = Object.fromEntries(
      name.map((value, index) => [value, yearning[index]])
    );
    
    let len_photo = photo.length;
    
    for(let i = 0; i < len_photo; i++) {
        let count = 0;
        for(let j of photo[i]) {
            if(Object.keys(nameObj).includes(j)) {
                console.log("j: ", j, nameObj[j]);
                count += nameObj[j];
            }
        }
        answer.push(count);
    }
    
    return answer;
}