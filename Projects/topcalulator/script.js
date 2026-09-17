import { skip } from "node:test";

let numberbtns = document.querySelectorAll(".no-btns");
let opt;
let numb1;
let numb2;
let result;
let output = document.querySelector(".output");
const clear = document.querySelector("#clear");


numberbtns.forEach( (btn) => {
  if(btn.textContent === "C"){
    console.log(btn.textContent);
    cleareverything();
  }
  else{
    btn.addEventListener("click", () => {
      output.innerText = btn.textContent;
    })
  }
}

)

function getnumber1(){

}
function getnumber2(){

}
function getoperation(){

}
function performoperation(){

}
function cleareverything(){
 clear.addEventListener("click",()=>{
  output.textContent = "";
})
}