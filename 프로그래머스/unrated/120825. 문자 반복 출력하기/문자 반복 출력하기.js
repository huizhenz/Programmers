const solution = (my_string, n) => {
    let  newString = '';
    for (let i = 0; i < my_string.length; i++) {
        for (let j = 0; j < n; j++) {
            newString += my_string[i];
        }
    }
    return newString;
}