const solution = (d, budget) => {
  let sum = 0;
  let answer = 0;

  // 1. 부서별 배열 오름차순 정렬
  // 1-2. d.sort()와  d.sort((a, b) => a - b)의 차이
  d.sort((a, b) => a - b);

  // 2. 반복문으로 더하다가 예산보다 크면 return
  // 2-1. 금액 합계와 예산만 단순 비교하면 3.에서 예외 발생
  for (let i = 0; i < d.length; i++) {
    if (budget - sum >= d[i]) {
      sum += d[i];
      answer = i;
    }
  }

  // 3. 결과 반환
  // 3-1. 한 개의 부서도 해당이 안되는 경우도 존재
  // 3-2. 한 개의 부서만 해당되는 경우도 존재
  return sum > 0 ? answer + 1 : answer;
};
