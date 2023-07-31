function solution(start, end) {
    var answer = [];
    let num = start;
    for (let i = 0; i < end - start + 1; i++) {
        answer.push(num++)
    }
    return answer;
}