function solution(str_list) {
    for(let i = 0; i < str_list.length; i++) {
        if(str_list[i] == "l") return str_list.splice(0, i);
        else if(str_list[i] == "r") return str_list.splice(i+1, str_list.length-1);
    }
    return [];
}