const solution = (age) => {
  let ageStr = "abcdefghijklmnopqrstuvwxyz";
  age = age.toString().split("");

  const answer = age.map((num) => {
    return ageStr[num];
  });

  return answer.join("");
}