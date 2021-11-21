// Horizontal scroll in cards block
const scrollContainer = document.querySelector('.cards');

scrollContainer.addEventListener('wheel', (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});
// =====

//Выбор раскрытого меню и Выбор города
const openedMenu = document.querySelector('.opened-menu');
const citySelect = document.querySelector('.opened-menu__city-select');

//Работа кнопки меню
const menuBtn = document.querySelector('.header__menu');
menuBtn.addEventListener('click', () => {
  openedMenu.classList.toggle('opened-menu_disabled');
  citySelect.classList.toggle('opened-menu_disabled');
})

//Кнопка выбор города
const citySelectBtn = document.querySelector('.opened-menu__select-button');
citySelectBtn.addEventListener('click', () => {
  citySelect.classList.remove('opened-menu__city-select_disabled');
})

//Кнопка назад формы выбора города
const citySelectBackBtn = document.querySelector('.opened-menu__back-button');
citySelectBackBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  citySelect.classList.add('opened-menu__city-select_disabled');
})

//Реакция на выбор города
const targetCity = document.querySelector('.opened-menu__target-city');
const cityRadioBtns = document.getElementsByName('city');
for (let i=0; i<cityRadioBtns.length; i++)
{
  const btn = cityRadioBtns[i];
  btn.addEventListener('change', (evt => {
    targetCity.textContent = evt.target.value;
  }));
}
