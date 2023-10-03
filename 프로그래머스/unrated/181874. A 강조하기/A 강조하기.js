const solution = (myString) => {
    let newString = [];
    myString.split('').map((str) => {
        str === 'a' || str === 'A' ? newString += str.toUpperCase() : newString += str.toLowerCase();
    });
    return newString;
}