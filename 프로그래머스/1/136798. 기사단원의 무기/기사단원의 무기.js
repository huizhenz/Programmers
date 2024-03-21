const solution = (number, limit, power) => {
  let ironWeight = 0; // 필요한 철의 무게를 저장할 변수

  // 각 기사의 번호마다 약수의 개수를 구하여 공격력을 계산합니다.
  for (let i = 1; i <= number; i++) {
    let count = 0; // 약수의 개수를 저장할 변수

    // 현재 기사의 번호 i에 대한 약수의 개수를 구합니다.
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        // 약수인 경우 count를 증가시킵니다.
        if (i / j === j) {
          count++;
        } else {
          count += 2;
        }
      }
    }

    // 약수의 개수가 제한 수치를 초과하는지 확인하고, 초과하는 경우 협약된 공격력을 사용합니다.
    let attackPower = count > limit ? power : count;

    // 필요한 철의 무게를 더합니다. (무기의 공격력 1당 1kg의 철이 필요합니다)
    ironWeight += attackPower;
  }

  // 계산된 필요한 철의 무게를 반환합니다.
  return ironWeight;
};