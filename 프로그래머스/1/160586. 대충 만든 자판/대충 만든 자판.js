function solution(keymap, targets) {
    let answer = [];
    
    let key = new Object();
    let len_keymap = keymap.length;
    let len_targets = targets.length;
    
    for(let i = 0; i < len_keymap; i++) {
        let temp = [...keymap[i]];
        let len_temp = temp.length;
        
        for(let j = 0; j < len_temp; j++) {
            if(!Object.keys(key).includes(temp[j])) {
                key[temp[j]] = j+1;
            }
            else {
                if(key[temp[j]] > j+1) key[temp[j]] = j+1;
            }
        }
    }
    
    for(let k = 0; k < len_targets; k++) {
        let temp = [...targets[k]];
        let len_temp = temp.length;
        let count = 0;
        
        for(let l = 0; l < len_temp; l++) {
            if(Object.keys(key).includes(temp[l])) count += key[temp[l]];
            else {
                count = 0;
                break;
            }
        }
        
        answer.push(count > 0 ? count : -1);
    }
    
    return answer;
}