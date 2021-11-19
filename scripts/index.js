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
