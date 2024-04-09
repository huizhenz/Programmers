function solution(s) {
    const numArr = [0,1,2,3,4,5,6,7,8,9];
    let answer = true;
    
    s.split('').forEach(n => {
        if (numArr.includes(parseInt(n)) === false || s.length !== 4 && s.length !== 6)
            answer = false;
    })
    
    return answer;
}