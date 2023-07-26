function solution(num_list, n) {
    var answer = 0;
    answer = num_list.some((i) => i === n)
    answer ? answer = 1 : answer = 0;
    return answer;
}