const solution = (a, b) => {
    let answer = 0;
    
    if (Math.max(a, b) === b) {
        for (let i = a; i <= b; i++) {
            answer += i;
        }
    } else {
        for (let i = b; i <= a; i++) {
            answer += i;
        }
    }
   
   return answer; 
}