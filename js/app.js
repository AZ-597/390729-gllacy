var modal = document.querySelector(".modal");
var modalForm = document.querySelector(".get-in-touch");
var openModal = document.querySelector(".js-open-modal");
var closeModal = document.querySelector(".js-close-modal");

openModal.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.add("modal-in-animation");
  modalForm.classList.add("modal-form-in-animation");
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.remove("modal-in-animation");
    modalForm.classList.remove("modal-form-in-animation");
  }, 600);
});

closeModal.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.add("modal-out-animation");
  setTimeout(function() {
    modal.classList.remove("modal-out-animation");
  }, 490);
  setTimeout(function() {
    modal.style.display = "none";
  }, 490);

});
/*
modal.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.style.display = "none";
});
 */
// надо бы наверное почитать про всплытие событий, делигирование или что-то такое,
// потому что при клике на детей модалка тоже закрывается :(
