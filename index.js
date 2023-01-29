//Элементы на страницу

const slider = document.querySelector('#slider');

const  sliderItems = Array.from(slider.children);

const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');


sliderItems.forEach(function(slide, index) {
console.log(slide);

//Скрываем все слайды кроме первого
if(index !== 0) slide.classList.add('hidden');
    

//Добавляем индексы для каждого слайда
slide.dataset.index = index;

//Добавляем data атрибут active для первого/активного слайда

sliderItems[0].setAttribute('data-active', '');

//Клик по слайдам
slide.addEventListener('click', function() {
  //Скрываем текущий слайд
  slide.classList.add('hidden');
  slide.removeAttribute('data-active');
      
  //Рассчитываем индекс слайда

  let nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;

  //находим следующий слайд 
  const nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`);

  //Отображаем следующий слайд 
  nextSlide.classList.remove('hidden');
  nextSlide.setAttribute('data-active', '');
  });

});

btnNext.onclick = function() {
  console.log('Next Slide');

  //Скрываем текущий слайд
  const currentSlide = slider.querySelector(`[data-active]`);
  const currentSlideIndex = +currentSlide.dataset.index;
  currentSlide.classList.add('hidden');
  currentSlide.removeAttribute('data-active');

  //Показывать следующий слайд
  const nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
  const nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`);
  nextSlide.classList.remove('hidden');
  nextSlide.setAttribute('data-active', '');


  console.log(currentSlideIndex);

}

btnPrev.onclick = function() {
  console.log('Prev Slide');

  //Скрываем текущий слайд
  const currentSlide = slider.querySelector(`[data-active]`);
  const currentSlideIndex = +currentSlide.dataset.index;
  currentSlide.classList.add('hidden');
  currentSlide.removeAttribute('data-active');

  //Показывать следующий слайд
  const nextSlideIndex = currentSlideIndex  === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
  const nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`);
  nextSlide.classList.remove('hidden');
  nextSlide.setAttribute('data-active', '');


  console.log(currentSlideIndex);

}


const burger = document.querySelector('.burger');
const header__navigation = document.querySelector('.header__navigation');
const menu_opened = document.querySelector('.menu-opened');

const link = document.querySelector('.navigation__link');
const navigation__submenu = document.querySelector('.navigation__submenu');
const nav_shadow = document.querySelector('.nav_shadow');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  header__navigation.classList.toggle('_active');
  nav_shadow.classList.toggle('active');
  menu_opened.classList.toggle('active');
});

link.addEventListener('click', () => {
  link.classList.toggle('active');
  navigation__submenu.classList.toggle('active');
});