const solution = (n) => {
    let array = n.toString().split('');
    const newArray = array.map((i) => Number(i))
    
    return Number(newArray.sort((a, b) => b - a).join(''));
    
    
}