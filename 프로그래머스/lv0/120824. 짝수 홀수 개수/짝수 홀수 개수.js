function solution(num_list) {
    var answer = [];
    let num = 0;
    let num2 = 0;

    num_list.forEach((i) => {
        if (i % 2 === 0) {
            num++;
        } else {
            num2++;
        }
    })
    answer = [num, num2];
    
    return answer;
}