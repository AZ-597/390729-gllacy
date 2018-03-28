var modal = document.querySelector(".modal");
var openModal = document.querySelector(".js-open-modal");
var closeModal = document.querySelector(".js-close-modal");

openModal.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.add("modal-in-animation");
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.remove("modal-in-animation");
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
