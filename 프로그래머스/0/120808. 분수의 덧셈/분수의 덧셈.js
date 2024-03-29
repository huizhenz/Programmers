function solution(numer1, denom1, numer2, denom2) {
  const fractions = [numer1 * denom2 + numer2 * denom1, denom1 * denom2];
  let arr1 = [];
  let arr2 = [];

  for (let i = 1; i <= fractions[0]; i++) {
    if (fractions[0] % i === 0) arr1.push(i);
  }
  for (let i = 1; i <= fractions[1]; i++) {
    if (fractions[1] % i === 0) arr2.push(i);
  }

  const gcd = Math.max(
    ...arr1.filter((num) => {
      return arr2.includes(num);
    })
  );

  return [fractions[0] / gcd, fractions[1] / gcd];
}