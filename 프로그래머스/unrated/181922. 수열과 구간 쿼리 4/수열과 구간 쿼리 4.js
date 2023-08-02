function solution(arr, queries) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < queries.length; j++) {
            if (i >= queries[j][0] && i <= queries[j][1] && i % queries[j][2] === 0) {
                arr[i]++;
            }
        }
    }
    
    return arr;
}