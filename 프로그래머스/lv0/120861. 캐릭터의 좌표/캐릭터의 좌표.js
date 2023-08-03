function solution(keyinput, board) {
    let answer = [0, 0];
    
    // 입력값 〉 ["right", "right", "right", "right", "right", "left"], [9, 5]
    // 기댓값 〉 [3, 0]
    
    for (let i = 0; i < keyinput.length; i++) {
        if (keyinput[i] === "left" && answer[0] > - Math.floor(board [0] / 2)) {
            answer[0]--;
        } else if (keyinput[i] === "right" && answer[0] < Math.floor(board [0] / 2)) {
            answer[0]++;
        } else if (keyinput[i] === "down"&& answer[1] > -Math.floor(board [1] / 2)) {
            answer[1]--;
        } else if (keyinput[i] === "up" && answer[1] < Math.floor(board [1] / 2)) {
            answer[1]++;
        } 
    }
    
    return answer;
}