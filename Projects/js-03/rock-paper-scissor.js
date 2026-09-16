function Human() {
    const obj = {
        1: "ROCK",
        2: "PAPER",
        3: "SCISSOR"
    };

    let CHOICE = parseInt(prompt("Enter your choice:\n 1:ROCK \n 2:PAPER \n 3:SCISSOR "));
    while (!(CHOICE === 2 || CHOICE === 3 || CHOICE === 1)) {
        console.log("Try Agian Invalid option is chossed");
        CHOICE = parseInt(prompt("Enter your choice:\n 1:ROCK \n 2:PAPER \n 3:SCISSOR "));
    }
    return obj[CHOICE];



}
function Computer() {
    const obj = {
        1: "ROCK",
        2: "PAPER",
        3: "SCISSOR"
    };
    let CHOICE = Math.floor(Math.random() * 3) + 1;
    return obj[CHOICE];

}

function round(human, comp) {
    if (human === comp) {
        console.log("Its a Tie");
        return 4;
    }
    else if ((human === "ROCK" && comp === "PAPER") || (human === "PAPER" && comp === "SCISSOR") || (human === "SCISSOR" && comp === "ROCK")) {
        console.log("COMPUTER WON" + comp + "Beats YOUR" + human);
        return comp;
    }
    else {
        console.log("Human WON" + human + "Beats computer" + comp);
        return human;
    }


}
function Play() {
    let i = 0;
    let scoreofhuman = 0;
    let scoreofcomputer = 0;
    let winner;
    while (i < 5) {
        let humanch = Human();
        let computerchoice = Computer();
        winner = round(humanch, computerchoice)
        if (winner === humanch) {
            scoreofhuman++;
        }
        else if (winner === computerchoice) {
            scoreofcomputer++;
        };
        i++;
    };
    if(scoreofcomputer>scoreofhuman){
        console.log("COMPUTER WON");
    }
    else if(scoreofcomputer === scoreofhuman){
        console.log("ITS a TIE");
    }
    else{
        console.log("HUMAN WON");
    }

}
Play();