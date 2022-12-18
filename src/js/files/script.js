// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


document.addEventListener('click', documentActions)
function documentActions(e){
	const targetElement = e.target
	if (targetElement.closest('.milde-header__button')){
		targetElement.closest('._spoller-init').classList.toggle('_pb')
	}

	//Открытие домика по клику на карте
	const map = document.querySelector('.map__house')
	const closeOne = document.querySelectorAll('._close-open')
	const not = map.querySelectorAll('.house__item:not(._close-open)');
	
	
	if(targetElement.closest('.map__tip')){
	map.classList.add('_active');
	}
	if(!targetElement.closest('.map__tip') && !targetElement.closest('.house__items')){
		map.classList.remove('_active');
		closeOne.forEach(element => {
			element.classList.remove('_close-open')
		});
	}

	
	if(targetElement.closest('.map__tip_1')){
		map.classList.add('_active');
		if (document.querySelector('#house1').classList.contains("_close-open")){
			document.querySelector('#house1').classList.remove('_close-open')
		}
		document.querySelector('#house2').classList.add('_close-open');
		document.querySelector('#house3').classList.add('_close-open');
	}
	if(targetElement.closest('.map__tip_2')){
		map.classList.add('_active');
		if (document.querySelector('#house2').classList.contains("_close-open")){
			document.querySelector('#house2').classList.remove('_close-open')
		}
		document.querySelector('#house1').classList.add('_close-open');
		document.querySelector('#house3').classList.add('_close-open');
	}
	if(targetElement.closest('.map__tip_3')){
		map.classList.add('_active');
		if (document.querySelector('#house3').classList.contains("_close-open")){
			document.querySelector('#house3').classList.remove('_close-open')
		}
		document.querySelector('#house1').classList.add('_close-open');
		document.querySelector('#house2').classList.add('_close-open');
	}
}
const popular = document.querySelector('.popular')
const populartext = popular.querySelectorAll('.house-popular__text')
console.log(populartext);

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


