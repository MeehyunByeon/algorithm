function solution(park, routes) {
    // 기준 [1, 1]
    // 동[1, 2] 서[1, 0] 남[2, 1] 북[0, 1]
    
    var answer = [];
    let current;
    let parkArr = new Array();
    let len_park = park.length;
    let len_routes = routes.length;
    
    for(let i = 0; i < len_park; i++) {
        let temp = [...park[i]];
        parkArr.push(temp);
        
        let len_temp = temp.length;
        for(let j = 0; j < len_temp; j++) {
            if(temp[j] == 'S') current = [i, j];
        }
    }
    
    let len_x = park[0].length
    
    for(let k = 0; k < len_routes; k++) {
        let route = [...routes[k]]
        let op = route[0];
        let n = parseInt(route[2]);
        
        // parkArr 배열의 current 위치에서 진행할 방향으로 검사해서 X 있는지 확인
        
        let move = true;
        let line;
        
        // 이동하려는 거리가 공원을 벗어나면 실행 X
        switch(op) {
            case 'E':
                if(current[1]+n < len_x) line = current[1]+n;
            break;
                
            case 'W':
                if(current[1]-n > -1) line = current[1]-n;
            break;
                
            case 'S':
                if(current[0]+n < len_park) line = current[0]+n;
            break;
                
            case 'N':
                if(current[0]-n > -1) line = current[0]-n;
            break;
                
            default :
                move = false;
            break;
        }
        
        console.log("move의 값은? ", move);
        
        if(move == true) {
            switch(op) {
                case 'E' :
                    for(let l = current[1]+1; l <= line; l++) {
                        if(parkArr[current[0]][l] == 'X') {
                            move = false;
                            break;
                        }
                    }
                break;

                case 'W' :
                    for(let l = current[1]-1; l >= line; l--) {
                        if(parkArr[current[0]][l] == 'X') {
                            move = false;
                            break;
                        }
                    }
                break;

                case 'S' :
                    for(let l = current[0]+1; l <= line; l++) {
                        if(parkArr[l][current[1]] == 'X') {
                            move = false;
                            break;
                        }
                    }
                break;

                case 'N' :
                    for(let l = current[0]-1; l >= line; l--) {
                        if(parkArr[l][current[1]] == 'X') {
                            move = false;
                            break;
                        }
                    }
                break;
            }
            
            // X가 없으면 current 변경
            if(move == true) {
                let result = moving(op, n, current);
                if(result[0] > -1 && result[0] < len_park && result[1] > -1 && result[1] < len_x) 
                    current = result;
            }
        }
        
    }
    
    return current;
}

const moving = (op, n, cur) => {
    switch(op) {
            case 'E' :
                cur = [cur[0], cur[1]+n];
            break;

            case 'W' :
                cur = [cur[0], cur[1]-n];
            break;

            case 'S' :
                cur = [cur[0]+n, cur[1]];
            break;

            case 'N' :
                cur = [cur[0]-n, cur[1]];
            break;
        }
    return cur;
}   