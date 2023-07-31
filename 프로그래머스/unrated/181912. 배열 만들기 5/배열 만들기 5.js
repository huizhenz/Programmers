function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.forEach((num) => k < num.slice(s, s+l) && answer.push(parseInt(num.slice(s, s+l))));
    
    return answer;
}