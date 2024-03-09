const solution = (hp) => {
  let answer = 0;

  // hp가 0이 되거나 0보다 작을 때까지 반복문
  while (hp >= 0) {
    if (hp >= 5) {
      answer += Math.trunc(hp / 5);
      hp %= 5;
    }

    if (hp >= 3) {
      answer += Math.trunc(hp / 3);
      hp %= 3;
    }

    if (hp < 3) {
      answer += Math.trunc(hp / 1);
      hp %= 1;
    }

    return answer;
  }

  return answer;
};