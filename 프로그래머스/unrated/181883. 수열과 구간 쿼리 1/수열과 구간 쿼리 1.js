function solution(arr, queries) {
    var answer = arr;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < queries.length; j++) {
             if (i >= queries[j][0] && i <= queries[j][1]) {
            answer[i]++;
            }
        }
    }
    return answer;
}