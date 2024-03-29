const sliderWrap = document.querySelector(".slaider-flex");
const slider = document.querySelector(".slaider__img");
const slides = document.querySelectorAll(".slaider__img");
const sliderBtn = document.querySelectorAll(".slider__pag-btn");
let index = 0;
let max = slides.length;

window.onload = window.onresize = () => {
 sliderWrap.style.transitionDuration = "0s";
 sliderWrap.offsetHeight;
 sliderWrap.style.width = "100%";
 let currentWidth = sliderWrap.clientWidth;
 sliderWrap.style.transitionDuration = ".5s";
 sliderWrap.offsetHeight;
 let elsFull = Math.floor(currentWidth / (slides[0].scrollWidth + 25));
 max = slides.length - elsFull - 1;
 sliderWrap.style.width = (elsFull * (slides[0].scrollWidth + 25) - 25) + "px";
}
function slide(num) {
 if(num > 0 && index >= max){
  	index = 0;
 }	else if(num > 0 || index > 0) index += num;
 	sliderWrap.scrollTo({
  	left: index * (slides[0].scrollWidth + 25),
 	behavior: 'smooth'
   	});
}
function slideBtn(num) {
	if(num > 0 && index >= max){
  	index = 0;
  	setActive(sliderBtn[index], sliderBtn, "slider__pag-btn-active");
 }	else if(num > 0 || index > 0) index = num;
 	setActive(sliderBtn[index], sliderBtn, "slider__pag-btn-active");
 	sliderWrap.scrollTo({
  	left: index * (slides[0].scrollWidth + 25),
 	behavior: 'smooth'
   	});
}
function setActive(el, elArr, cl) {
	elArr.forEach((item) => {
		item.classList.remove(cl);
	});
	el.classList.add(cl);
}


for (let el of document.querySelectorAll(".info-sell-pictures-inner > .info-sell-pictures-img")) {
    el.addEventListener('click', (e) => changePicture(e));
}
function changePicture(e){
	let target = e.target;
	let childNodes = target.parentNode.parentNode.childNodes;
	let toReplace = childNodes[0] instanceof Text ? childNodes[1] : childNodes[0];
	toReplace.style.backgroundImage = target.style.backgroundImage;
}
