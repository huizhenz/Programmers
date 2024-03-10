const solution = (my_string, m, c) => {
  let strArr = [];
  let answer = [];

  // m 글자씩 배열에 담기
  my_string.split("").forEach((s, i) => {
    i % m === 0 && strArr.push(my_string.substring(i, i + m));
  });

  // 배열에 왼쪽부터 c번째 요소만 추출
  strArr.forEach((s, i) => {
    answer.push(s.substring(c - 1, c));
  });

  return answer.join("");
};