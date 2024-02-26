const solution = (s) => {
  let answer = 0;

  // 공백을 기준으로 문자열을 배열로 변환
  let array = s.split(" ");

  // 해당 요소의 다음 인덱스가 "Z"가 아니고 해당 요소가 "Z"가 아닐 떄만 더해줌
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] !== "Z" && array[i] !== "Z") {
      answer += parseInt(array[i]);
    }
  }

  return answer;
};