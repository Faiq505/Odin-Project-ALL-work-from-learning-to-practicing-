// const human = document.querySelector(".human");
// const comp = document.querySelector(".comp");
// const rock = document.getElementById("rock");
// const paper = document.getElementById("paper");
// const scissor = document.getElementById("scissor");
// let humanchoice;
// let compchoice;
// let msg = document.getElementById("msg");
// const items = document.querySelectorAll(".items");
// let humanscore = document.getElementById("humanscore");
// let computerscore = document.getElementById("Computerscore");
// function humanchoices(){
//  items.forEach( (item) => {
//     item.addEventListener('click', ()=>{
//         humanchoice = item.getAttribute("id");
//         alert(`${humanchoice} is Selected`);
//     })
// }
// );
// }

// function computerchoices(){
//     compchoice = Math.floor(Math.random()*2);
//     if(compchoice === 1){
//         chompchoice = rock;
// }
// else if(compchoice === 2){
//     compchoice = paper;
// }
// else{
//     compchoice = scissor;
// }
// }




let humanscore = 0;
let computerscore = 0;
let humanchocie;
let computerchocie;
let showhumanscore = document.querySelector("#humanscore");
let showcomputerscore = document.querySelector("#Computerscore");
let msg = document.querySelector("#msg");
const items = document.querySelectorAll(".items");

function humanclick(){
    
    items.forEach(
        (item) => {
            item.addEventListener("click",
                () => {
                    humanchocie = item.getAttribute("id");
                    console.log(humanchocie);
                    computer();
                    check();
                }
            )
        }
    )
};

function computer(){
    computerchocie = Math.floor(Math.random()*3) + 1;
    if(computerchocie===1){
        computerchocie = "rock";
    }
    else if(computerchocie === 2){
        computerchocie = "paper";
    }
    else {
        computerchocie = "scissor";
    }
};

function check(){
    if(humanchocie===computerchocie){
        msg.textContent = "Its a Tie";
        msg.setAttribute("style","color:black; background-color:white; border: 2px solid black");
    }
    else if((humanchocie === "rock" && computerchocie === "paper") || (humanchocie === "paper" && computerchocie === "scissor") || (humanchocie === "scissor" && computerchocie=== "rock")){
          msg.textContent = `Computer Won as ${computerchocie} beats your ${humanchocie}`;
          msg.setAttribute("style","background-color:red");
          computerscore++;
          showcomputerscore.textContent = `${computerscore}`;
    }
    else{
        msg.textContent = `Human Won as your ${humanchocie} beats ${computerchocie}`;
        msg.setAttribute("style","background-color:green");
        humanscore++;
        showhumanscore.textContent = `${humanscore}`;
    }
};

humanclick();
