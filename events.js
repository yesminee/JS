const btnplus= document.getElementsByClassName("plus");
const btnmoins = document.getElementsByClassName("moins");
const rmv = document.getElementsByClassName("fa-cut");
const hearts = document.getElementsByClassName("fa-heart");
const qtn= document.getElementsByClassName("quantite");
const price = document.getElementsByClassName("price");
const final= document.getElementById("totalp");


for (let heart of hearts) {
  heart.addEventListener("click", () => {
    if (heart.style.color == "red") {
      heart.style.color = "grey";
    } else {
      heart.style.color = "red";
    }
  });
}

function myfn() {
  let s = 0;
  for (let i = 0; i < price.length; i++) {
    s += qtn[i].innerHTML*price[i].innerHTML;
  }
  
  return (final.innerHTML = "shopping bag total: "+s+"$");
}

for(let i=0; i<btnplus.length; i++)
{
  btnplus[i].addEventListener("click", ()=>{
    btnplus[i].nextElementSibling.innerHTML++;
    myfn();
  });
}
for (let i = 0; i < btnmoins.length; i++) {
  btnmoins[i].addEventListener("click", () => {
    if (btnmoins[i].previousElementSibling.innerHTML>0){
      btnmoins[i].previousElementSibling.innerHTML--;
      myfn();

    }else{
      alert("impossible de decrementer encore!");
      
    }

  });
}
for (let r of rmv) {
  r.addEventListener("click", () => {
    r.parentNode.remove();
    myfn();
  });
}












