// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


document.addEventListener('click', documentActions)
function documentActions(e){
	const targetElement = e.target
	if (targetElement.closest('.milde-header__button')){
		console.log('t');
		targetElement.closest('._spoller-init').classList.toggle('_pb')
	}
}

const populartext = document.querySelectorAll('.house-popular__text')

for (let i = 0; i < populartext.length; i++) {
	const el = populartext[i];
	const link = el.nextElementSibling
	if(el.clientHeight<=70){
		link.style.display='none'
	} else {
		el.style.height=50+`${'px'}`;
		el.style.overflow='hidden';
		el.style.background='linear-gradient(180deg, #FFFFFF 50.46%, rgba(255, 255, 255, 0) 129.17%)'
		link.style.display='block'
	}
}

// правильное грид расположение

const swiper = document.querySelector('.popular__swiper')

if(swiper.childElementCount % 2 == 0){
	swiper.lastElementChild.
	//classList.toggle('_gridrows')
	id ="gridrows"
};