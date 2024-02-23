function solution(n, arr1, arr2) {
  let binary = [];
  let binary2 = [];
  let answer = [];
  let string = [];

  for (let i = 0; i < n; i++) {
    if (arr1[i].toString(2).length < n) {
      binary.push(arr1[i].toString(2).padStart(n, "0"));
    } else {
      binary.push(arr1[i].toString(2));
    }
  }

  for (let i = 0; i < n; i++) {
    if (arr2[i].toString(2).length < n) {
      binary2.push(arr2[i].toString(2).padStart(n, "0"));
    } else {
      binary2.push(arr2[i].toString(2));
    }
  }

  for (let i = 0; i < n; i++) {
    answer.push(
      (parseInt(binary[i]) + parseInt(binary2[i])).toString().padStart(n, "0")
    );
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (answer[i][j] === "0") {
        string += " ";
      } else {
        string += "#";
      }
    }
    if (i !== n - 1) {
      string += ",";
    }
  }

  return string.split(",");
}