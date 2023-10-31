const solution = (num_list, n) => {
    const answer = num_list.slice(n);
    return answer.concat(num_list.slice(0, n));
}