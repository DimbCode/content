const sliderWrap = document.querySelector(".slaider-flex");
const slider = document.querySelector(".slaider__img");
const slides = document.querySelectorAll(".slaider__img");
let slideStyle = getComputedStyle(slider);
let slideWrapStyle = getComputedStyle(sliderWrap);
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
	max = slides.length - elsFull;
	sliderWrap.style.width = (elsFull * (slides[0].scrollWidth + 25) - 25) + "px";
}

function slide(num) {
	if(num > 0 && index >= max){
		index = 0;
	}else if(num > 0 || index > 0) index += num;
	sliderWrap.scrollTo({
		left: index * (slides[0].scrollWidth + 25), 
		behavior: 'smooth'
	  });
}
