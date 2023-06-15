function solution(n, k) {
    var answer = 0;
    var i = 0;
    
    if (n < 10) {
        answer = n * 12000 + k * 2000;
    } else {
         i = Math.floor(n / 10)
         answer = n * 12000 + (k-i) * 2000;
    }
    
    return answer;
}