const solution = (number) => {
  const answer = [];

  // 중복되는 인덱스가 없게 배열이 반복될 때 마다 1씩 더해주기
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          answer.push([i, j, k]);
        }
      }
    }
  }

  return answer.length;
};