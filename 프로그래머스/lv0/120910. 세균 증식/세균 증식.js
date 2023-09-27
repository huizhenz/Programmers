const solution = (n, t) => {
    let answer = n;
    for (let i = 0; i < t; i++) {
        answer += n;
        n *= 2;
    }
    return answer;
}