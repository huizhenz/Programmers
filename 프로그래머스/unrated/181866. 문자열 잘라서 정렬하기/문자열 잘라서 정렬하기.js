function solution(myString) {
    var answer = [];
    answer = myString.split("x").sort().filter((i) => i !== "");
    
    return answer;
}