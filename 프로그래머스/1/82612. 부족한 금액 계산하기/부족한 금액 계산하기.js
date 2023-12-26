const solution = (price, money, count) => {
    let sum = 0;
    let answer = 0;
    
    for (let i = 1; i <= count; i++) {
        sum += price * i;
    }
    answer = sum - money;
    
    return answer > 0 ? answer : 0;
}