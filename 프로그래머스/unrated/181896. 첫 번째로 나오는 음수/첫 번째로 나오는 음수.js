const solution = (num_list) => (num_list.find((num, i) => num < 0) ? num_list.indexOf(num_list.find((num, i) => num < 0)) : -1);