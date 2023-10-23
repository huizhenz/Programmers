const solution = (my_string, alp) => {
    let newString = '';
    for (let i = 0; i < my_string.length; i++) {
        my_string[i] === alp ? newString += my_string[i].toUpperCase() : newString += my_string[i];
    }
    return newString;
}