const output = document.querySelector(".output");
let a = "";
let b = "";
let result ;
let opt = "";
let showisnotclick = true;
const show = document.querySelector("#show");
const nobtns = document.querySelectorAll(".no-btns");
const optbtns = document.querySelectorAll(".opt-btns");


optbtns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(btn.textContent === "="){
            showres();
            showisnotclick = false;
        }
        else if(btn.textContent === "Del"){
            remove();
        }
         else if(opt === ""){
            setopt(btn);
            output.textContent += opt;
        }
        else if(opt != ""){
            performopt(btn);
        }
         
         
    })
})
nobtns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        if(btn.id ==="clear"){
            output.textContent = "";
            a = "";
            b="";
            result = 0;
            opt = "";
            showisnotclick = true;
        }
        else if(opt === ""){
            setnumb1(btn);
            // output.textContent = `${a} ${opt} ${b}`;
            
        }
        else if(showisnotclick){
            setnumb2(btn);
            output.textContent = `${a} ${opt} ${b}`;
        }
         
    })
})

function setnumb1(btn){
   a += btn.textContent;
   output.textContent = a;
}
function setnumb2(btn){
    b += btn.textContent;


}
function   setopt(btn){
    opt = btn.textContent;
}
function performopt(btn){
    if(opt === "+"){
      result = parseInt(a) + parseInt(b);
      output.textContent = result;
      opt = btn.textContent;
      a = result;
      b="";
    }
    else if(opt === "-"){
     
      result = parseInt(a) - parseInt(b);
      output.textContent = result;
      opt = btn.textContent;
      a = result;
      b="";
    
    }
    else if(opt === "X"){
     
      result = parseInt(a) * parseInt(b);
      output.textContent = result;
      opt = btn.textContent;
      a = result;
      b="";
    
    }
    else if(opt === "/"){
      if( b!= "0"){
      result = parseInt(a) / parseInt(b);
      output.textContent = result;
      opt = btn.textContent;
      a = result;
      b="";
      }
      else{
        result = "Error";
        output.textContent = result;
      }
    }
}

function remove(){
  let arr = output.textContent;
  let index = arr[length - 1];
  output.textContent = arr[index];
}
function  showres(){
    output.textContent = result;
    showisnotclick = true;
}