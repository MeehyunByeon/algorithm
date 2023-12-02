function solution(wallpaper) {
    
    let files = new Array();
    
    let len_wallpaper = wallpaper.length;
    let len_col = [...wallpaper[0]].length;
    
    for(let i = 0; i < len_wallpaper; i++) {
        for(let j = 0; j < len_col; j++) {
            if(wallpaper[i][j] == '#') {
                files.push([i, j]);
            }
        }
    }
    
    let answer = [len_wallpaper, len_col, 0, 0];
    let len_files = files.length;
    
    for(let k = 0; k < len_files; k++) {
        if(answer[0] > files[k][0]) answer[0] = files[k][0];
        if(answer[1] > files[k][1]) answer[1] = files[k][1];
        if(answer[2] < files[k][0]) answer[2] = files[k][0];
        if(answer[3] < files[k][1]) answer[3] = files[k][1];
    }
    
    answer[2]++;
    answer[3]++;

    return answer;
}