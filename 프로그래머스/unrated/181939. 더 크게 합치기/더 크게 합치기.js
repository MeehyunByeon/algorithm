function solution(a, b) {
    let ab = a.toString() + b.toString();
    let ba = b.toString() + a.toString();
    return parseInt(ab) > parseInt(ba) ? parseInt(ab) : parseInt(ba);
}