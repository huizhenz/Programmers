const solution = (n) => {
    let array = n.toString().split('').reverse();
    const newArray = array.map((i) => Number(i));
    return newArray;
}