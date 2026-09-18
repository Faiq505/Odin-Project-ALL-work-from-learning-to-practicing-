let numb1 = "";
let numb2 = "";
let opt = "";
let output= "";
let save = 0;
let result = document.querySelector(".output");
const show = document.querySelector("#show");
const del = document.querySelector("#Del");
const numberbtns = document.querySelectorAll(".no-btns");
const optbtns = document.querySelectorAll(".opt-btns");
numberbtns.forEach((btn)=>{
  btn.addEventListener("click",()=>{
    if(opt === ""){
      setNumber1(btn);
      result.textContent = numb1;
    }
    else if( output===""){
      setNumber2(btn);
    }
  })
})
optbtns.forEach((btn)=>{
  btn.addEventListener("click",()=>{
    if(btn.textContent != "="){
    setopt(btn);
    }
    else if(btn.textContent != "Del"){
      remove();
    }
    else{
      output = btn.textContent;
      showresult();
    }
  })
})
function setNumber1(btn){
    numb1 += btn.textContent;
    
    return;

}
function setNumber2(btn){
    numb2 += btn.textContent;
    result.textContent += numb2;
    return;

}
function setopt(btn){
  opt = btn.textContent;
  result.textContent += opt;
}
function getopt(){
  return opt;
}
function performopt(){
  let a = parseInt(numb1);
  let b = parseInt(numb2);
  if(opt === "+"){
    return a + b;
  }
  else if(opt === "-"){
    return a - b;
  }
  else if(opt === "X"){
    return a * b;
  }
}
function remove(){
  return;
}
function showresult(){
  console.log(numb1 , opt ,numb2);
  result.textContent = performopt();
  numb1 = ""
numb2 = ""
opt = ""
output="";

}