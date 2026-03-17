function startGame() {
    const randNum = Math.floor(Math.random()*10)+1;
    let maxAttempts = 3;
    let correctlyGuessed = false;

    for (let i = 0; i < maxAttempts; i++) {
        const str = prompt("Attempt "+ (i+1) +" Guess");
        const guess = Number(str);
        
        if (isNaN(guess) || guess < 1 || guess > 10) {
            alert("Please enter a valid number between 1 and 10.");
            i--; 
            continue;
        }
        
        if (guess === randNum) {
            alert("Congratulations! You guessed the correct number: "+randNum);
            correctlyGuessed = true;
            break;
        }else if (guess < randNum) {
            alert("Too low!");
        }else if (guess > randNum) {
            alert("Too high!");
        }
    }
    if (!correctlyGuessed) {
        alert("Game Over. The correct number: "+randNum);
    }
}