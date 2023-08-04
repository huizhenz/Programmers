function solution(arr) {
    let sum = 0;
    return arr.reduce((num , i) => num + i) / arr.length;
}