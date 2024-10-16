function solution(myString, pat) {
    let result = myString.lastIndexOf(pat);
    return myString.substr(0, result+1+pat.length-1);
}