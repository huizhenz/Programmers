function solution(keyinput, board) {
    let answer = [0, 0];
    
    keyinput.forEach((key) => {
         if (key === "left" && answer[0] > - Math.floor(board [0] / 2)) {
            answer[0]--;
        } else if (key === "right" && answer[0] < Math.floor(board [0] / 2)) {
            answer[0]++;
        } else if (key === "down"&& answer[1] > -Math.floor(board [1] / 2)) {
            answer[1]--;
        } else if (key === "up" && answer[1] < Math.floor(board [1] / 2)) {
            answer[1]++;
        } 
    })
    
    return answer;
}