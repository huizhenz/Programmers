function solution(numbers) {
  const tempArr = new Array(10).fill(0);
  let answer = 0;

  numbers.forEach((num) => {
    tempArr[num]++;
  });

  tempArr.forEach((cnt, i) => {
    cnt === 0 ? (answer += i) : 0;
  });

  return answer;
}