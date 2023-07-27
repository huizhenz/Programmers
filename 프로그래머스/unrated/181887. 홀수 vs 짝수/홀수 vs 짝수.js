function solution(num_list) {
    let even = 0;
    let odd = 0;
    
    // num_list.forEach((num) => num % 2 === 0 ? even += num : odd += num);
    
    for (let i = 0; i < num_list.length; i++) {
        if ((i + 1) % 2 === 0) {
            even += num_list[i];
        } else {
            odd += num_list[i];
        }
    }
 
    return Math.max(even, odd);
}