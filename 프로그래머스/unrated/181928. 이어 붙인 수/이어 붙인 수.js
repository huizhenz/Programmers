function solution(num_list) {
    let even = 0;
    let odd = 0;
    num_list.forEach(num => num % 2 ? even += num.toString() : odd += num.toString() )
    return Number(even) + Number(odd);
}