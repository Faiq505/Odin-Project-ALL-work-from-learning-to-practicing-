

function computerchoice(){
    const obj = {
        1:"Rock",
        2:"Paper",
        3:"Scissor"
    }

    let choice = Math.floor(Math.random()*3)+1;

    return obj[choice];
  
}

function humanchoice(){

    const obj = {
        1:"Rock",
        2:"Paper",
        3:"Scissor"
    }

    let choice = parseInt(prompt("Enter your choice : 1-> Rock, 2-> Paper, 3-> Scissor"));
    return obj[choice];
}

function play(){
    let i = 0;
    let compscore = 0;
    let humanscore = 0;
    while(i < 5){
     let human = humanchoice();
     let computer = computerchoice();
     if(human === computer){
        console.log("Its a tie");
     }
     else if((human === "Rock" && computer === "Paper") || (human === "Scissor" && computer === "Rock") || (human === "Paper" && computer === "Scissor")){
        console.log("COmputer win as computer choice was " + computer + "Humn choice is "+ human);
        compscore++;
     }
     else {
        console.log("Human win as Your choice was "+ human + "Computer choice " + computer);
        humanscore++;
     }

     i++;
      
    }
  
    if(humanscore > compscore){
        console.log("Human Won");
    }
    else if(humanscore < compscore){
        console.log("COmputer won");
    }
    else {
        console.log("Its a tie");
    }

     return 0;

}

play();

