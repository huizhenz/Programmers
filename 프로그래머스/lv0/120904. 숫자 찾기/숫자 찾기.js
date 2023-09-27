const solution = (num, k) => {
    let answer = 0;
    answer = num.toString().split('').indexOf(k.toString());
    return answer !== -1 ? answer += 1 : -1;
}