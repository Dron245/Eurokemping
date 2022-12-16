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

	if(targetElement.closest('.map__tip')){
		//console.log('1');
		document.querySelector('.map__house').classList.add('_active');
	}
	if(!targetElement.closest('.map__tip')){
		//console.log('2');
		document.querySelector('.map__house').classList.remove('_active');
		document.querySelectorAll('._close-open').forEach(element => {
			element.classList.remove('_close-open')
		});
	}
	if(targetElement.closest('.map__tip_1')){console.log('1');
		document.querySelector('.map__house').classList.add('_active');
		if (document.querySelectorAll('._close-open').length==0) {
				document.querySelector('#house2').classList.add('_close-open');
				document.querySelector('#house3').classList.add('_close-open');
		}
		// document.querySelector('#house2').classList.toggle('_close-open');
		// document.querySelector('#house3').classList.toggle('_close-open');
	}
	if(targetElement.closest('.map__tip_2')){console.log('2');
		document.querySelector('.map__house').classList.add('_active');
		if (document.querySelectorAll('._close-open').length==0) {
				document.querySelector('#house1').classList.add('_close-open');
				document.querySelector('#house3').classList.add('_close-open');
		}
		// document.querySelector('#house2').classList.toggle('_close-open');
		// document.querySelector('#house3').classList.toggle('_close-open');
	}
	if(targetElement.closest('.map__tip_3')){console.log('3');
		document.querySelector('.map__house').classList.add('_active');
		if (document.querySelectorAll('._close-open').length==0) {
				document.querySelector('#house1').classList.add('_close-open');
				document.querySelector('#house2').classList.add('_close-open');
		}
		// document.querySelector('#house2').classList.toggle('_close-open');
		// document.querySelector('#house3').classList.toggle('_close-open');
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

const tip1 = document.querySelector('.map__tip_1');
const asd = document.querySelector('.map__house');



