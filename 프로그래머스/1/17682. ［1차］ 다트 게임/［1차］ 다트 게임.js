const solution = (dartResult) => {
  let answer = 0;
  let square = [];

  let regex = /(\d+|\D)/g; // 숫자와 문자를 구분하는 정규 표현식
  let matchArr = dartResult.match(regex); // 정규 표현식을 이용해 문자열을 분리하여 배열에 저장'

  for (let i = 0; i < matchArr.length; i++) {
    if (matchArr[i] === "S") {
      square.push(Math.pow(matchArr[i - 1], 1));
    } else if (matchArr[i] === "D") {
      square.push(Math.pow(matchArr[i - 1], 2));
    } else if (matchArr[i] === "T") {
      square.push(Math.pow(matchArr[i - 1], 3));
    }

    if (matchArr[i] === "*") {
      square[square.length - 1] = square[square.length - 1] * 2;
      square[square.length - 2] = square[square.length - 2] * 2;
    } else if (matchArr[i] === "#") {
      square[square.length - 1] = square[square.length - 1] * -1;
    }
  }

  return square.reduce((sum, i) => sum + i);
};