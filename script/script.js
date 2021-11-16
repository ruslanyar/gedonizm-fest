// Horizontal scroll in cards block
const scrollContainer = document.querySelector('.cards');

scrollContainer.addEventListener('wheel', (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});
// =====
