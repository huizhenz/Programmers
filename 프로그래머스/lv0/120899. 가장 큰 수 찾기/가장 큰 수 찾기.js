function solution(array) {
    var answer = [];
    let max = array[0];
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
             answer = [max, i];
        }
       
    }
    
    return answer;
}