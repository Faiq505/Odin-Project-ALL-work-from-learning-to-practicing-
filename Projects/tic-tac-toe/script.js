// let humanselect;
// let computerselect;
// let humanscore;
// const boxes = document.querySelectorAll(".box");
// let computerscore;
// let board = ["","","","","","","","",""];
// let selector = document.querySelectorAll(".selector");
// let turn = true;
// const reset = document.getElementById("btn");

// reset.addEventListener("click", () => {
//   boxes.forEach((box,index) => {
//     board[index] = "";
//     box.textContent = "";
//     computerselect = "";
//     humanselect = "";
//     computerscore= 0;
//     humanscore = 0;
//   })
// humanselector();
// });
// let winningpattern = [
//    [0,1,2],
//    [0,3,6],
//    [0,4,8],

//    [3,4,5],
//    [6,7,8],
//    [1,4,7],

//    [2,5,8],
//    [2,4,6]

// ]
// function humanselector(){
//      selector.forEach((select) => {
//         select.addEventListener("click", () =>{
//             humanselect = select.getAttribute("id");
//             console.log(humanselect);
//             compselect();
//             play();
//         }

//         )
//      }

//      )    
// }
// function compselect(){
//     if(humanselect === "X"){
//         computerselect = "O";
//      }
//      else{
//         computerselect = "X";
//      }
// }

// function computerplay(){
//    let i = 1;
//    while(turn){
//  i = Math.floor(Math.random()*8);
//    if(board[i] === "" && board[i] != humanselect){
//     board[i] = computerselect;
//     boxes[i].textContent = computerselect;
//     boxes[i].disabled = true;

//     turn = false;
//    }else{
//     turn = true;
//    }


//    }
   
// }

//     function check(){
//     winningpattern.forEach((pattern) => {
//         let pos1 = board[pattern[0]];
//         let pos2 = board[pattern[1]];
//         let pos3 = board[pattern[2]];

//         if(pos1 !== "" && pos1 === pos2 && pos2 === pos3){
//             console.log("winner:", pos1);
//         }
//     });
// }



// function play(){
//     boxes.forEach((box,index) => {
//         box.addEventListener("click", () => {
//             board[index] = humanselect;
//             box.textContent = humanselect;
//             box.disabled = true;
//             check();
//             computerplay();
//            turn = true;
//         })
//     }


// )
// }

// humanselector();

let humanselect = "";
let computerselect = "";

let humanscore = 0;
let computerscore = 0;

const boxes = document.querySelectorAll(".box");
const selector = document.querySelectorAll(".selector");

const reset = document.getElementById("btn");

const yourScore = document.getElementById("yourScore");
const computerScore = document.getElementById("computerScore");
const msg = document.getElementById("msg");

let board = ["", "", "", "", "", "", "", "", ""];

let gameOver = false;

const winningpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],

    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],

    [2, 5, 8],
    [2, 4, 6]
];


// ---------------- SELECT X / O ----------------

selector.forEach((select) => {

    select.addEventListener("click", () => {

        if (gameOver) return;

        humanselect = select.getAttribute("id");

        if (humanselect === "X") {
            computerselect = "O";
        } else {
            computerselect = "X";
        }

        msg.textContent = `You are ${humanselect}. Your turn!`;

    });

});


// ---------------- HUMAN MOVE ----------------

boxes.forEach((box, index) => {

    box.addEventListener("click", () => {

        // Don't allow playing before selecting X/O
        if (humanselect === "") {
            msg.textContent = "Choose X or O first!";
            return;
        }

        // Don't allow move after game ends
        if (gameOver) {
            return;
        }

        // Don't allow occupied box
        if (board[index] !== "") {
            return;
        }

        // Human move
        board[index] = humanselect;
        box.textContent = humanselect;
        box.disabled = true;

        // Check human win
        if (checkWinner()) {
            return;
        }

        // Check draw
        if (checkDraw()) {
            return;
        }

        // Computer move
        computerplay();

    });

});


// ---------------- COMPUTER MOVE ----------------

function computerplay() {

    if (gameOver) return;

    let emptyBoxes = [];

    // Find all empty boxes
    board.forEach((value, index) => {

        if (value === "") {
            emptyBoxes.push(index);
        }

    });

    // No empty boxes
    if (emptyBoxes.length === 0) {
        return;
    }

    // Pick random empty box
    let randomIndex =
        Math.floor(Math.random() * emptyBoxes.length);

    let computerIndex = emptyBoxes[randomIndex];

    // Computer move
    board[computerIndex] = computerselect;

    boxes[computerIndex].textContent = computerselect;
    boxes[computerIndex].disabled = true;

    // Check computer win
    if (checkWinner()) {
        return;
    }

    // Check draw
    if (checkDraw()) {
        return;
    }

    msg.textContent = "Your turn!";
}


// ---------------- CHECK WINNER ----------------

function checkWinner() {

    for (let pattern of winningpattern) {

        let pos1 = board[pattern[0]];
        let pos2 = board[pattern[1]];
        let pos3 = board[pattern[2]];

        if (
            pos1 !== "" &&
            pos1 === pos2 &&
            pos2 === pos3
        ) {

            gameOver = true;

            if (pos1 === humanselect) {

                humanscore++;

                yourScore.textContent = humanscore;

                msg.textContent = "🎉 You Win!";

            } else {

                computerscore++;

                computerScore.textContent = computerscore;

                msg.textContent = "🤖 Computer Wins!";

            }

            return true;
        }
    }

    return false;
}


// ---------------- CHECK DRAW ----------------

function checkDraw() {

    if (!board.includes("")) {

        gameOver = true;

        msg.textContent = "🤝 It's a Draw!";

        return true;
    }

    return false;
}


// ---------------- RESET BOARD ----------------

reset.addEventListener("click", () => {

    // Reset board
    board = ["", "", "", "", "", "", "", "", ""];

    // Reset game state
    gameOver = false;

    // Reset selections
    humanselect = "";
    computerselect = "";

    // Clear boxes
    boxes.forEach((box) => {

        box.textContent = "";
        box.disabled = false;

    });

    // Message
    msg.textContent = "Choose X or O to start!";

});
