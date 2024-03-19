const solution = (a, b) => {
  // 1월 1일이 금요일이므로 금요일을 시작 기준으로 지정
  const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  // 달 별 일수가 담긴 배열
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let answer = 0;

  // 1월은 빈 배열이 되므로 1월을 기준으로 조건문 설정
  if (a !== 1) {
    // a 직전 달까지 있는 배열을 모두 더한 다음 b를 더해준 값을 7로 나눈 나머지에 -1한 인덱스 요소 반환
    answer = (month.slice(0, a - 1).reduce((sum, i) => (sum += i)) + b) % 7;
  } else {
    answer = b % 7;
  }

  // "THU"는 answer가 0이 될 때인데 answer를 인덱스로 days의 요소를 반환하니 오류
  // 그로 인해 answer가 0일 때만 days에 마지막 요소를 반환하는 삼항연산자 지정
  return answer === 0 ? days[days.length - 1] : days[answer - 1];
};