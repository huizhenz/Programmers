const solution = (num_str) => {
    let arr = num_str.split('').map((num, i) => parseInt(num));
    return arr.reduce((sum, i) => sum + i);
}