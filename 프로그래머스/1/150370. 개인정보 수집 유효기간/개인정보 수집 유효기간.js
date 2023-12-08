function solution(today, terms, privacies) {
    let answer = [];
    
    // today => yy-mm-dd 분리
    let todayArr = today.split('.');
    let y = parseInt(todayArr[0]);
    let m = clear(todayArr[1]);
    let d = clear(todayArr[2]);
    
    // terms => 약관종류: 유효기간
    let objTerm = new Array();
    terms.forEach((element, index) => {
        let temp = element.split(' ');
        objTerm[temp[0]] = parseInt(temp[1]);
    });
    
    let len = privacies.length;
    for(let i = 0; i < len; i++) {
        let temp = privacies[i].split(' ', 2); // 문자열 분리
        
        let str = temp[1]; // 약관종류
        let date = temp[0].split('.'); // 개인정보 수집 일자
        
        let tempY = parseInt(date[0]);
        let tempM = clear(date[1]);
        let tempD = clear(date[2]);
        
        let exp = objTerm[str] // 유효기간
        
        // 유효기간이 50개월이라면? => 4년 2개월
        // 월 계산
        let a = parseInt(exp / 12); // 유효기간 / 12 => 몫 => year
        let b = exp % 12; // 유효기간 / 12 => 나머지 => month
        
        tempY += a;
        if(tempM + b < 13) tempM += b;
        else {
            tempM = tempM + b - 12;
            tempY += 1;
        }
        
        // 일 계산
        if(tempD - 1 > 0) tempD = tempD - 1;
        else {
            tempD = 28;
            tempM -= 1;
        }
        
        // 연도부터 탈락
        // 연도는 같고 월수에서 탈락
        // 연도는 같고 월수도 같고 데이에서 탈락
        
        let todayStr = numsToStr(y, m, d);
        let expStr = numsToStr(tempY, tempM, tempD)
        
        if(expStr - todayStr < 0) answer.push(i+1); 
    }
    
    return answer;
}

function clear(num) {
    num = num[0] == '0' ? num[1] : num;
    return parseInt(num);
}

function numsToStr(num1, num2, num3) {
    num1 = num1.toString();
    num2 = num2 < 10 ? '0'+num2.toString() : num2.toString();
    num3 = num3 < 10 ? '0'+num3.toString() : num3.toString();
    
    return num1+num2+num3;
}