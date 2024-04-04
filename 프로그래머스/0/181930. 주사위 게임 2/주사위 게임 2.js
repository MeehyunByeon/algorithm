function solution(a, b, c) {
    let answer = 0;
    if(a==b && b==c) answer = (a*3) * (a**2)*3 * (a**3)*3;
    else {
        if(a==b || b==c || a==c) answer = (a+b+c) * (a**2+b**2+c**2);
        else answer = a+b+c;
    }
    return answer;
}