function solution(n, slicer, num_list) {
    let answer = [];
    if(n==1) answer = num_list.slice(0, slicer[1]+1);
    else if(n==2) answer = num_list.slice(slicer[0], num_list.length);
    else if(n==3) answer = num_list.slice(slicer[0], slicer[1]+1);
    else {
        for(let i = slicer[0]; i <= slicer[1]; i+=2) answer.push(num_list[i]);
    }
    return answer;
}