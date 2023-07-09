function solution(array, n) {
    var answer = 0;
    
    array.forEach((i) => {
        if (i == n) {
            answer++;
        }
    })
    
    return answer;
}