const add = document.querySelector(".btn-add");
let channelname
let videotitle
    let views
  let duration
    let months
    const cards = document.querySelector(".cards");
add.addEventListener("click",createcard);
function asignvalues(){
 channelname = document.querySelector("#getchname").value;
     videotitle = document.querySelector("#getvideotitle").value;
     views = parseInt(document.querySelector("#getviews").value);
     duration = document.querySelector("#getduration").value;
     months = document.querySelector("#getmonths").value;
}
function createcard(){
    asignvalues();
    let card = document.createElement("div");
    let imgofcard = document.createElement("div");
    let cardtime = document.createElement("div");
    let textofcard = document.createElement("div");
    let cardtitle = document.createElement("div");
    let carditems = document.createElement("ul");
    let chname = document.createElement("li");
    let v = document.createElement("li");
    let m = document.createElement("li");
    //giving classnames
    card.classList.add("card");
    textofcard.classList.add("textofcard");
    cardtitle.classList.add("cardtitle");
    imgofcard.classList.add("imgofcard");
    cardtime.classList.add("cardtime");
    chname.classList.add("channelname");
    carditems.classList.add("carditems");
    v.classList.add("views");
    m.classList.add("views");
    //giving values
    cardtitle.innerHTML = `<h3>${videotitle}</h3>`;
    chname.textContent = channelname;
    if(views >= 1000 && views <= 999999){
      v.textContent = `${views/1000}K`;
    }
    else if(views >= 100000){
         v.textContent = `${views/100000}M`;
    }
    else{
         v.textContent = `${views}`;
    }

    cardtime.textContent = duration;
    m.textContent = months;
    //adding in html
    cards.appendChild(card);
    card.appendChild(imgofcard);
    imgofcard.appendChild(cardtime);
    card.appendChild(textofcard);
    textofcard.appendChild(cardtitle);
    textofcard.appendChild(carditems);
    carditems.appendChild(chname);
    carditems.appendChild(v);
    carditems.appendChild(m);
    console.log(card);
}
