
const solution = (X, Y) => {
  let answer = "";

  // 1. 0 ~ 9를 갯수대로 저장할 수 있는 배열 생성
  // 1-2. 배열을 하나로 합치면 X에 2개가 들어있어도 짝꿍이 되므로 각각의 배열을 생성
  const xArray = new Array(10).fill(0);
  const yArray = new Array(10).fill(0);

  // 2~3. X, Y를 배열 그리고 정수형으로 변환 후 개수 세기 (문자인데 어떻게 숫자로 인식되지 ?)
  X.split("").forEach((num) => xArray[num]++);
  Y.split("").forEach((num) => yArray[num]++);

  // 4. 짝꿍숫자 추출과 예외
  // 4-2. 동일한 숫자의 짝꿍 숫자가 2개 이상일 경우 (최대공통개수 맞춰주기 = 더 작은 값만큼만 더해주기)
  for (let i = 0; i < xArray.length; i++) {
    if (xArray[i] !== 0 && yArray[i] !== 0) {
      const min = Math.min(xArray[i], yArray[i]);
      for (let j = 0; j < min; j++) {
        answer += i;
      }
    }
  }

  // 5. 예외처리 및 형변환
  if (answer > 0) {
    answer = answer.split("").sort((a, b) => b - a).join("");
  } else if (answer === "") {
    answer = "-1";
  } else {
    answer = "0";
  }

  return answer;
};