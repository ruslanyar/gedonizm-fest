const scrollContainer = document.querySelector('.cards');
const popup = document.querySelector('.popup');
const formPayment = popup.querySelector('.form');
const openPopupBtn = document.querySelector('.header__button-to-support');
const closeFormBtn = popup.querySelector('.popup__close-btn');
const formFieldAmount = popup.querySelector('.form__field_type_amount');
const formFieldAmountRadioButtons = formFieldAmount.querySelectorAll('.form__input-radio');
const inputAmount = popup.querySelector('.form__input-amount');

function openPopup (elem) {
  elem.classList.add('popup_is-opened');
}

function closePopup (elem) {
  elem.classList.remove('popup_is-opened');
  formPayment.reset();
}

scrollContainer.addEventListener('wheel', (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});

openPopupBtn.addEventListener('click', () => openPopup(popup));
closeFormBtn.addEventListener('click', () => closePopup(popup));
formPayment.addEventListener('submit', (evt) => {
  evt.preventDefault();
  closePopup(popup);
});

inputAmount.addEventListener('keyup', (evt) => {
  if (/^\d+$/.test(evt.target.value)) {
    formFieldAmountRadioButtons.forEach(el => el.checked = false);
  }
});

formFieldAmountRadioButtons.forEach(el => el.addEventListener('click', () => inputAmount.value = ''));

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
/*функционал секции photo-gallery*/
const chboxOne = document.querySelector('#photo-one');
const chboxTwo = document.querySelector('#photo-two');
const chboxThree = document.querySelector('#photo-three');
const chboxFour = document.querySelector('#photo-four');
const chboxFive = document.querySelector('#photo-five');
const ImageOne = document.querySelector('.photo-gallery__card:nth-child(1)');
const ImageTwo = document.querySelector('.photo-gallery__card:nth-child(2)');
const ImageThree = document.querySelector('.photo-gallery__card:nth-child(3)');
const ImageFour = document.querySelector('.photo-gallery__card:nth-child(4)');
const ImageFive = document.querySelector('.photo-gallery__card:nth-child(5)');
/*добавление класса к карточке для переключения фото в секции photo-gallery*/
function checkPhoto(photo) {
  photo.classList.add("photo-gallery__card_open");
};
/*удаление класса у карточки для переключения фото в секции photo-gallery*/
function removeCheck(photo) {
  photo.classList.remove("photo-gallery__card_open");
};
chboxOne.addEventListener('click', function() {
  checkPhoto(ImageOne);
  removeCheck(ImageTwo);
  removeCheck(ImageThree);
  removeCheck(ImageFour);
  removeCheck(ImageFive);
});
chboxTwo.addEventListener('click', function() {
  checkPhoto(ImageTwo);
  removeCheck(ImageOne);
  removeCheck(ImageThree);
  removeCheck(ImageFour);
  removeCheck(ImageFive);
});
chboxThree.addEventListener('click', function() {
  checkPhoto(ImageThree);
  removeCheck(ImageOne);
  removeCheck(ImageTwo);
  removeCheck(ImageFour);
  removeCheck(ImageFive);
});
chboxFour.addEventListener('click', function() {
  checkPhoto(ImageFour);
  removeCheck(ImageOne);
  removeCheck(ImageTwo);
  removeCheck(ImageThree);
  removeCheck(ImageFive);
});
chboxFive.addEventListener('click', function() {
  checkPhoto(ImageFive);
  removeCheck(ImageOne);
  removeCheck(ImageTwo);
  removeCheck(ImageThree);
  removeCheck(ImageFour);
});
