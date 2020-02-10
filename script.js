let kleuren = ["#badde8","#badde8","#806052","#a7a7c5","#ffc6c7","#0362a5","#e6d001","#333333","#ff7144","#86d85e","#06a757","#ed4850"];

function willekeurigGetal(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let mijnParagraaf= document.querySelector("p");

$(document).ready(function(){
  let mijnDivs = document.querySelectorAll("div");
  i=0;
  while (mijnDivs[i]) {
    mijnDivs[i].style.backgroundColor = kleuren[willekeurigGetal(0,11)];
    i++;
  }
  vastgezet=0;
  $("div").click(function(){
    if (this.classList.contains("vastgezet")){
      this.classList.remove("vastgezet");
      vastgezet--;

    }
    else{
      this.classList.add("vastgezet");
      vastgezet++;
    }
    if (vastgezet<49) {
      mijnParagraaf.innerHTML= vastgezet + " elementen vastgezet"
    }
    else mijnParagraaf.innerHTML= "Je tekening is voltooid"
  });
});

function veranderKleur(){
  let mijnDivs = document.querySelectorAll("div");
  i=0;
  while (mijnDivs[i]) {
    if ( ! mijnDivs[i].classList.contains("vastgezet")) {
      mijnDivs[i].style.backgroundColor = kleuren[willekeurigGetal(0,11)];
    }
    i++;
  }
}

setInterval(veranderKleur, 1000);
