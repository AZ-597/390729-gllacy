var modal = document.querySelector(".modal");
var openModal = document.querySelector(".js-open-modal");
var closeModal = document.querySelector(".js-close-modal");

openModal.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.style.display = "flex";
});

closeModal.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.style.display = "none";
});
/*
modal.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.style.display = "none";
});
 */
// надо бы наверное почитать про всплытие событий, делигирование или что-то такое,
// потому что при клике на детей модалка тоже закрывается :(
