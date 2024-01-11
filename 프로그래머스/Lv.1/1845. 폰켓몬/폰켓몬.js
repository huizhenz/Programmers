function solution(nums) {
  const hashMap = new Map();

  nums.forEach((n, i) => {
    hashMap.has(n) ? 0 : hashMap.set(n, 1);
  });

  return hashMap.size > nums.length / 2 ? nums.length / 2 : hashMap.size;
}