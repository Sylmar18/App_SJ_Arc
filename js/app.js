const slides =
document.querySelectorAll(".slide");

let atual = 0;

function trocarSlide(){

slides[atual].classList.remove("active");

atual++;

if(atual >= slides.length){
atual = 0;
}

slides[atual].classList.add("active");

}

setInterval(trocarSlide,3000);