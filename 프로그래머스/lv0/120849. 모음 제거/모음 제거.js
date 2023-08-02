function solution(my_string) {
    var answer = '';
    answer = my_string.split('').filter((str) => {
        if (str === "a" || str === "e" || str === "i" || str === "o" || str === "u") {
            return str = "";
        } else {
            return str;
        }
    })
    return answer.join('');
}